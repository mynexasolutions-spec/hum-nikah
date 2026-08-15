"use server";

import { supabase } from "@/lib/supabase";
import { revalidatePath } from "next/cache";

export async function updateLeadStatus(id: string, status: string) {
  try {
    const { error } = await supabase
      .from("Lead")
      .update({ status })
      .eq("id", id);

    if (error) throw new Error(error.message);
    
    revalidatePath("/admin/leads");
    revalidatePath("/admin");
    return { success: true };
  } catch (error) {
    console.error("Error updating lead status:", error);
    return { success: false, error };
  }
}

export async function deleteLead(id: string) {
  try {
    const { error } = await supabase
      .from("Lead")
      .delete()
      .eq("id", id);

    if (error) throw new Error(error.message);
    
    revalidatePath("/admin/leads");
    revalidatePath("/admin");
    return { success: true };
  } catch (error) {
    console.error("Error deleting lead:", error);
    return { success: false, error };
  }
}
