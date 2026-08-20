import { NextResponse } from 'next/server';
import { supabase } from '@/lib/supabase';
import { biodataSchema } from '@/lib/validations';

export async function POST(request: Request) {
  try {
    const body = await request.json();
    
    // Validate request body
    const validatedData = biodataSchema.parse(body);
    
    // Save to database with safe fallbacks for non-blocking insert
    const { data: newBiodata, error } = await supabase.from('Biodata').insert({
        fullName: validatedData.fullName,
        gender: validatedData.gender,
        dateOfBirth: new Date(validatedData.dateOfBirth).toISOString(),
        age: calculateAge(new Date(validatedData.dateOfBirth)),
        maritalStatus: validatedData.maritalStatus,
        height: validatedData.height,
        city: validatedData.city,
        state: validatedData.state || '',
        country: validatedData.country || 'India',
        
        highestEducation: validatedData.highestEducation,
        profession: validatedData.profession,
        incomeRange: validatedData.incomeRange || '',
        
        fatherOccupation: validatedData.fatherOccupation,
        motherOccupation: validatedData.motherOccupation || '',
        siblings: validatedData.siblings || '',
        familyType: validatedData.familyType || 'Nuclear',
        familyLocation: validatedData.familyLocation,
        
        religiousPractice: validatedData.religiousPractice || 'Practicing',
        prayerPractice: validatedData.prayerPractice || 'Always Pray (5 Times Daily)',
        
        shortIntro: validatedData.shortIntro,
        
        prefAgeRange: validatedData.prefAgeRange,
        prefLocation: validatedData.prefLocation,
        prefEducation: validatedData.prefEducation,
        
        phone: validatedData.phone,
        whatsapp: validatedData.whatsapp || validatedData.phone,
        email: validatedData.email,
        contactMethod: validatedData.contactMethod || 'WhatsApp',
        
        profileImageUrl: validatedData.profileImageUrl || '',
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
