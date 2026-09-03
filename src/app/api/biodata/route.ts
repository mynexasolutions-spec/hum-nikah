import { NextResponse } from 'next/server';
import { supabase } from '@/lib/supabase';
import { biodataSchema } from '@/lib/validations';

export async function POST(request: Request) {
  try {
    const body = await request.json();
    
    // Validate request body
    const validatedData = biodataSchema.parse(body);
    
    // Format birthday & calculate age
    let dobIso = new Date().toISOString();
    let calculatedAge = 25;
    if (validatedData.dateOfBirth) {
      const parsedDate = new Date(validatedData.dateOfBirth);
      if (!isNaN(parsedDate.getTime())) {
        dobIso = parsedDate.toISOString();
        calculatedAge = calculateAge(parsedDate);
      }
    }

    // Format short intro to embed uploaded document link if present
    let finalIntro = validatedData.shortIntro || '';
    if (validatedData.biodataDocUrl) {
      const docBadge = `[BIODATA_DOC:${validatedData.biodataDocUrl}|NAME:${validatedData.biodataDocName || 'Attached Biodata'}]`;
      finalIntro = finalIntro ? `${finalIntro}\n\n${docBadge}` : docBadge;
    }

    // Document or profile picture URL
    const fileUrl = validatedData.biodataDocUrl || validatedData.profileImageUrl || '';

    // Save to database with safe fallbacks for non-blocking insert
    const { data: newBiodata, error } = await supabase.from('Biodata').insert({
        fullName: validatedData.fullName,
        gender: validatedData.gender,
        dateOfBirth: dobIso,
        age: calculatedAge,
        maritalStatus: validatedData.maritalStatus,
        height: validatedData.height || '',
        city: validatedData.city,
        state: validatedData.state || '',
        country: validatedData.country || 'India',
        
        highestEducation: validatedData.highestEducation || '',
        profession: validatedData.profession || '',
        incomeRange: validatedData.incomeRange || '',
        
        fatherOccupation: validatedData.fatherOccupation || '',
        motherOccupation: validatedData.motherOccupation || '',
        siblings: validatedData.siblings || '',
        familyType: validatedData.familyType || 'Nuclear',
        familyLocation: validatedData.familyLocation || validatedData.city,
        
        religiousPractice: validatedData.religiousPractice || 'Practicing',
        prayerPractice: validatedData.prayerPractice || 'Always Pray (5 Times Daily)',
        
        shortIntro: finalIntro,
        
        prefAgeRange: validatedData.prefAgeRange || '',
        prefLocation: validatedData.prefLocation || '',
        prefEducation: validatedData.prefEducation || '',
        
        phone: validatedData.phone,
        whatsapp: validatedData.whatsapp || validatedData.phone,
        email: validatedData.email || '',
        contactMethod: validatedData.contactMethod || 'WhatsApp',
        
        profileImageUrl: fileUrl,
        status: 'PENDING',
    }).select().single();

    if (error) {
      console.error('Supabase error inserting biodata:', error);
      throw new Error(error.message);
    }

    return NextResponse.json({ success: true, data: newBiodata }, { status: 201 });
    
  } catch (error: any) {
    console.error('Error submitting biodata:', error);
    
    if (error.name === 'ZodError') {
      return NextResponse.json({ success: false, error: 'Validation failed', details: error.errors }, { status: 400 });
    }
    
    return NextResponse.json({ success: false, error: error.message || 'Internal Server Error' }, { status: 500 });
  }
}

function calculateAge(birthday: Date) {
  const ageDifMs = Date.now() - birthday.getTime();
  const ageDate = new Date(ageDifMs);
  return Math.abs(ageDate.getUTCFullYear() - 1970);
}
