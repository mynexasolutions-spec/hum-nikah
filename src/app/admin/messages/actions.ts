"use server";

import { supabase } from "@/lib/supabase";
import { revalidatePath } from "next/cache";

export async function updateMessageStatus(id: string, status: string) {
  try {
    const { error } = await supabase
      .from("ContactMessage")
      .update({ status, updatedAt: new Date().toISOString() })
      .eq("id", id);

    if (error) {
      console.error("Error updating message status:", error);
      return { success: false, error: error.message };
    }

    revalidatePath("/admin/messages");
    return { success: true };
  } catch (err: any) {
    console.error("Exception in updateMessageStatus:", err);
    return { success: false, error: "Internal server error" };
  }
}

export async function deleteMessage(id: string) {
  try {
    const { error } = await supabase
      .from("ContactMessage")
      .delete()
      .eq("id", id);

    if (error) {
      console.error("Error deleting message:", error);
      return { success: false, error: error.message };
    }

    revalidatePath("/admin/messages");
    return { success: true };
  } catch (err: any) {
    console.error("Exception in deleteMessage:", err);
    return { success: false, error: "Internal server error" };
  }
}
