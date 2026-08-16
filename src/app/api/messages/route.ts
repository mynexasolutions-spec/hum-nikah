import { NextResponse } from "next/server";
import { supabase } from "@/lib/supabase";

export const dynamic = "force-dynamic";

export async function GET() {
  try {
    const { data, error } = await supabase
      .from("ContactMessage")
      .select("*")
      .order("createdAt", { ascending: false });

    if (error) {
      console.error("Error fetching messages:", error);
      return NextResponse.json({ success: false, error: error.message }, { status: 500 });
    }

    return NextResponse.json({ success: true, data });
  } catch (err: any) {
    console.error("Exception in GET /api/messages:", err);
    return NextResponse.json({ success: false, error: "Internal server error" }, { status: 500 });
  }
}
