import { NextResponse } from 'next/server';
import { supabase } from '@/lib/supabase';

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { 
      name, phone,
      gender, dob, country, city, maritalStatus, profession, education
    } = body;

    if (!name || !phone) {
      return NextResponse.json(
        { success: false, error: 'Name and Phone are required' },
        { status: 400 }
      );
    }

    const { data, error } = await supabase
      .from('Lead')
      .insert({
        name,
        phone,
        status: 'NEW',
        gender: gender || null,
        dob: dob || null,
        country: country || null,
        city: city || null,
        maritalStatus: maritalStatus || null,
        profession: profession || null,
        education: education || null
      })
      .select()
      .single();

    if (error) {
      console.error('Supabase error inserting Lead:', error);
      return NextResponse.json(
        { success: false, error: error.message },
        { status: 500 }
      );
    }

    return NextResponse.json({ success: true, data }, { status: 201 });
  } catch (error: any) {
    console.error('Error submitting search lead:', error);
    return NextResponse.json(
      { success: false, error: 'Internal Server Error' },
      { status: 500 }
    );
  }
}

export async function GET() {
  try {
    const { data, error } = await supabase
      .from('Lead')
      .select('*')
      .order('createdAt', { ascending: false });

    if (error) {
      return NextResponse.json({ success: false, error: error.message }, { status: 500 });
    }

    return NextResponse.json({ success: true, data });
  } catch (error: any) {
    return NextResponse.json({ success: false, error: 'Internal Server Error' }, { status: 500 });
  }
}
