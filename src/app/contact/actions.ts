"use server";

import { supabase } from "@/lib/supabase";
import { revalidatePath } from "next/cache";

export async function submitContactMessage(formData: FormData) {
  try {
    const name = formData.get("name") as string;
    const email = formData.get("email") as string;
    const phone = formData.get("phone") as string;
    const subject = formData.get("subject") as string;
    const message = formData.get("message") as string;

    if (!name || !email || !message) {
      return { success: false, error: "Name, email, and message are required." };
    }

    const { error } = await supabase.from("ContactMessage").insert({
      name,
      email,
      phone: phone || null,
      subject: subject || null,
      message,
      status: "NEW",
    });

    if (error) {
      console.error("Error inserting contact message:", error);
      return { success: false, error: "Failed to send message. Please try again." };
    }

    revalidatePath("/admin/messages");
    return { success: true };
  } catch (err) {
    console.error("Exception sending contact message:", err);
    return { success: false, error: "An unexpected error occurred." };
  }
}
