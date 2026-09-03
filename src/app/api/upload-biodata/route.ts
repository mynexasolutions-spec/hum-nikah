import { NextResponse } from 'next/server';
import cloudinary from '@/lib/cloudinary';
import fs from 'fs';
import path from 'path';

export async function POST(request: Request) {
  try {
    const formData = await request.formData();
    const file = formData.get('file') as File | null;

    if (!file) {
      return NextResponse.json({ success: false, error: 'No file provided' }, { status: 400 });
    }

    // Allowed MIME types: PDF, Images (JPEG, PNG, WEBP), Word Documents
    const allowedTypes = [
      'application/pdf',
      'image/jpeg',
      'image/jpg',
      'image/png',
      'image/webp',
      'application/msword',
      'application/vnd.openxmlformats-officedocument.wordprocessingml.document'
    ];

    const isAllowedType = allowedTypes.includes(file.type) || 
      file.name.match(/\.(pdf|jpe?g|png|webp|doc|docx)$/i);

    if (!isAllowedType) {
      return NextResponse.json({ 
        success: false, 
        error: 'Invalid file type. Please upload a PDF, JPG, PNG, or DOC document.' 
      }, { status: 400 });
    }

    // 15MB file size limit
    if (file.size > 15 * 1024 * 1024) {
      return NextResponse.json({ 
        success: false, 
        error: 'File size exceeds 15MB limit.' 
      }, { status: 400 });
    }

    const arrayBuffer = await file.arrayBuffer();
    const buffer = Buffer.from(arrayBuffer);
    const sanitizedOriginalName = file.name.replace(/[^a-zA-Z0-9._-]/g, '_');

    // Attempt 1: Upload to Cloudinary if credentials are present
    if (process.env.CLOUDINARY_CLOUD_NAME && process.env.CLOUDINARY_API_KEY) {
      try {
        const cloudinaryUrl = await new Promise<string>((resolve, reject) => {
          cloudinary.uploader.upload_stream(
            {
              folder: 'humnikah/biodata_docs',
              resource_type: 'auto',
              use_filename: true,
              unique_filename: true,
            },
            (error, result) => {
              if (error) reject(error);
              else resolve(result?.secure_url || '');
            }
          ).end(buffer);
        });

        if (cloudinaryUrl) {
          return NextResponse.json({
            success: true,
            url: cloudinaryUrl,
            filename: file.name,
            size: file.size,
          });
        }
      } catch (cloudErr) {
        console.warn('Cloudinary upload failed or not configured, falling back to local storage:', cloudErr);
      }
    }

    // Attempt 2: Local storage fallback in public/uploads/biodata
    const uploadDir = path.join(process.cwd(), 'public', 'uploads', 'biodata');
    if (!fs.existsSync(uploadDir)) {
      fs.mkdirSync(uploadDir, { recursive: true });
    }

    const uniquePrefix = `${Date.now()}_${Math.random().toString(36).substring(2, 8)}`;
    const savedFileName = `${uniquePrefix}_${sanitizedOriginalName}`;
    const filePath = path.join(uploadDir, savedFileName);

    fs.writeFileSync(filePath, buffer);
    const localUrl = `/uploads/biodata/${savedFileName}`;

    return NextResponse.json({
      success: true,
      url: localUrl,
      filename: file.name,
      size: file.size,
    });

  } catch (error: any) {
    console.error('Upload biodata error:', error);
    return NextResponse.json({ 
      success: false, 
      error: error?.message || 'Failed to upload document' 
    }, { status: 500 });
  }
}
