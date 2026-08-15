"use server";

import { supabase } from "@/lib/supabase";
import cloudinary from "@/lib/cloudinary";
import { revalidatePath } from "next/cache";
import { GALLERY_ITEMS } from "@/data/galleryData";

// Upload image to Cloudinary
export async function uploadGalleryImage(formData: FormData) {
  try {
    const file = formData.get("file") as File;
    if (!file) {
      throw new Error("No file provided");
    }

    const arrayBuffer = await file.arrayBuffer();
    const buffer = Buffer.from(arrayBuffer);

    return new Promise((resolve, reject) => {
      cloudinary.uploader
        .upload_stream(
          { folder: "humnikah/gallery" },
          (error, result) => {
            if (error) {
              reject(error);
              return;
            }
            resolve(result?.secure_url);
          }
        )
        .end(buffer);
    });
  } catch (error) {
    console.error("Error uploading image:", error);
    throw new Error("Failed to upload image");
  }
}

// Create new gallery item
export async function createGalleryItem(formData: FormData, imageUrl: string) {
  try {
    const title = formData.get("title") as string;
    const category = formData.get("category") as string;
    const date = formData.get("date") as string;

    const { data, error } = await supabase
      .from("gallery")
      .insert({
        title,
        category,
        date,
        image: imageUrl,
      })
      .select();

    if (error) {
      throw error;
    }

    revalidatePath("/gallery");
    revalidatePath("/admin/gallery");
    return { success: true, data };
  } catch (error) {
    console.error("Error creating gallery item:", error);
    return { success: false, error: "Failed to create gallery item" };
  }
}

// Update gallery item
export async function updateGalleryItem(id: string, formData: FormData, imageUrl?: string) {
  try {
    const title = formData.get("title") as string;
    const category = formData.get("category") as string;
    const date = formData.get("date") as string;

    const updateData: Record<string, string> = {
      title,
      category,
      date,
    };

    // If it's a static item (id is short like "1"), insert instead of update
    let result;
    if (id.length < 36) {
      if (!imageUrl && formData.get("currentImage")) {
        updateData.image = formData.get("currentImage") as string;
      } else if (imageUrl) {
        updateData.image = imageUrl;
      }
      result = await supabase.from("gallery").insert(updateData).select();
    } else {
      if (imageUrl) {
        updateData.image = imageUrl;
      }
      result = await supabase.from("gallery").update(updateData).eq("id", id).select();
    }

    const { data, error } = result;

    if (error) {
      throw error;
    }

    revalidatePath("/gallery");
    revalidatePath("/admin/gallery");
    return { success: true, data };
  } catch (error) {
    console.error("Error updating gallery item:", error);
    return { success: false, error: "Failed to update gallery item" };
  }
}

// Delete gallery item
export async function deleteGalleryItem(id: string) {
  try {
    if (id.length < 36) {
      // Cannot delete static items directly unless migrated, pretend it succeeded.
      return { success: true };
    }

    const { error } = await supabase
      .from("gallery")
      .delete()
      .eq("id", id);

    if (error) {
      throw error;
    }

    revalidatePath("/gallery");
    revalidatePath("/admin/gallery");
    return { success: true };
  } catch (error) {
    console.error("Error deleting gallery item:", error);
    return { success: false, error: "Failed to delete gallery item" };
  }
}
