import { NextResponse } from 'next/server';
import { supabase } from '@/lib/supabase';

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, phone, email, gender } = body;

    if (!name || !phone) {
      return NextResponse.json(
        { success: false, error: 'Name and Phone are required' },
        { status: 400 }
      );
    }

    const payload: Record<string, any> = {
      name,
      phone,
      email: email || null,
      gender: gender || null,
      status: 'NEW',
    };

    // 1. Primary insert attempt with name, phone, email, gender
    let { data, error } = await supabase
      .from('Lead')
      .insert(payload)
      .select()
      .single();

    // 2. Fallback insert if gender column is missing in Supabase schema
    if (error) {
      console.warn('Direct insert failed, running fallback insert:', error.message);

      const fallbackPayload = {
        name,
        phone,
        email: email || null,
        status: 'NEW',
        message: gender ? `Gender: ${gender}` : null,
      };

      const fallbackRes = await supabase
        .from('Lead')
        .insert(fallbackPayload)
        .select()
        .single();

      if (fallbackRes.error) {
        console.error('Supabase error inserting Lead:', fallbackRes.error);
        return NextResponse.json(
          { success: false, error: fallbackRes.error.message },
          { status: 500 }
        );
      }

      data = fallbackRes.data;
    }

    return NextResponse.json({ success: true, data }, { status: 201 });
  } catch (error: any) {
    console.error('Error submitting lead:', error);
    return NextResponse.json(
      { success: false, error: error?.message || 'Internal Server Error' },
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

