"use server";

import { supabase } from "@/lib/supabase";
import { revalidatePath } from "next/cache";
import { Database } from "@/types/database";

export async function fetchBiodatas() {
  try {
    const { data, error } = await supabase
      .from('Biodata')
      .select('*')
      .order('createdAt', { ascending: false });

    if (error) {
      console.error("Error fetching biodatas:", error);
      return [];
    }

    return data || [];
  } catch (err) {
    console.error("Failed to fetch biodatas:", err);
    return [];
  }
}

export async function updateBiodataStatus(id: string, newStatus: 'PENDING' | 'APPROVED' | 'REJECTED') {
  try {
    const { error } = await supabase
      .from('Biodata')
      .update({ status: newStatus })
      .eq('id', id);

    if (error) throw error;
    
    revalidatePath('/admin/biodata');
    return { success: true };
  } catch (err: any) {
    console.error(`Error updating biodata status to ${newStatus}:`, err);
    return { success: false, error: err.message || "Failed to update status" };
  }
}

export async function deleteBiodata(id: string) {
  try {
    const { error } = await supabase
      .from('Biodata')
      .delete()
      .eq('id', id);

    if (error) throw error;
    
    revalidatePath('/admin/biodata');
    return { success: true };
  } catch (err: any) {
    console.error("Error deleting biodata:", err);
    return { success: false, error: err.message || "Failed to delete biodata" };
  }
}
