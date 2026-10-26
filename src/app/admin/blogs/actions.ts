"use server";

import { supabase } from "@/lib/supabase";
import cloudinary from "@/lib/cloudinary";
import { revalidatePath } from "next/cache";
import { estimateReadTime } from "@/lib/blog-utils";

/** Optional text field: blank means "fall back to title/excerpt". */
function optionalText(formData: FormData, key: string): string | null {
  const value = formData.get(key);
  if (typeof value !== "string") return null;
  const trimmed = value.trim();
  return trimmed.length > 0 ? trimmed : null;
}


// Upload image to Cloudinary
export async function uploadImage(formData: FormData) {
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
          { folder: "humnikah/blogs" },
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

// Create new blog
export async function createBlog(formData: FormData, imageUrl: string) {
  try {
    const title = formData.get("title") as string;
    const slug = formData.get("slug") as string;
    const excerpt = formData.get("excerpt") as string;
    const content = formData.get("content") as string;
    const category = formData.get("category") as string;
    const authorName = formData.get("authorName") as string;
    const authorRole = formData.get("authorRole") as string;
    const readTime = formData.get("readTime") as string;
    const featured = formData.get("featured") === "true";
    const tagsString = formData.get("tags") as string;
    const tags = tagsString ? tagsString.split(",").map(t => t.trim()) : [];

    // No stock avatar: an unverifiable author photo was flagged in the SEO audit.
    const author = {
      name: authorName || "HumNikah Editorial Team",
      role: authorRole || "Nikah & family guidance",
      avatar: ""
    };

    const publishedAt = new Date().toLocaleDateString("en-US", {
      month: "long",
      day: "numeric",
      year: "numeric"
    });

    const { data, error } = await supabase
      .from("blogs")
      .insert({
        slug,
        title,
        excerpt,
        content,
        category,
        publishedAt,
        readTime: readTime?.trim() || estimateReadTime(content),
        author,
        image: imageUrl,
        featured,
        tags,
        seoTitle: optionalText(formData, "seoTitle"),
        seoDescription: optionalText(formData, "seoDescription"),
        imageAlt: optionalText(formData, "imageAlt")
      })
      .select();

    if (error) {
      throw error;
    }

    revalidatePath("/blog");
    revalidatePath(`/blog/${slug}`);
    revalidatePath("/sitemap.xml");
    revalidatePath("/admin/blogs");
    return { success: true, data };
  } catch (error) {
    console.error("Error creating blog:", error);
    return { success: false, error: "Failed to create blog" };
  }
}

// Update blog
export async function updateBlog(id: string, formData: FormData, imageUrl?: string) {
  try {
    const title = formData.get("title") as string;
    const slug = formData.get("slug") as string;
    const excerpt = formData.get("excerpt") as string;
    const content = formData.get("content") as string;
    const category = formData.get("category") as string;
    const authorName = formData.get("authorName") as string;
    const authorRole = formData.get("authorRole") as string;
    const readTime = formData.get("readTime") as string;
    const featured = formData.get("featured") === "true";
    const tagsString = formData.get("tags") as string;
    const tags = tagsString ? tagsString.split(",").map(t => t.trim()) : [];

    const author = {
      name: authorName || "HumNikah Editorial Team",
      role: authorRole || "Nikah & family guidance",
      avatar: ""
    };

    const updateData: Record<string, unknown> = {
      slug,
      title,
      excerpt,
      content,
      category,
      readTime: readTime?.trim() || estimateReadTime(content),
      author,
      featured,
      tags,
      seoTitle: optionalText(formData, "seoTitle"),
      seoDescription: optionalText(formData, "seoDescription"),
      imageAlt: optionalText(formData, "imageAlt"),
      // Feeds Article dateModified and the sitemap's lastmod.
      updated_at: new Date().toISOString()
    };

    if (imageUrl) {
      updateData.image = imageUrl;
    }

    // If it's a static blog (id is short like "1"), insert instead of update
    let result;
    if (id.length < 36) {
      const publishedAt = new Date().toLocaleDateString("en-US", { month: "long", day: "numeric", year: "numeric" });
      updateData.publishedAt = publishedAt;
      if (!imageUrl && formData.get("currentImage")) {
        updateData.image = formData.get("currentImage") as string;
      }
      result = await supabase.from("blogs").insert(updateData).select();
    } else {
      result = await supabase.from("blogs").update(updateData).eq("id", id).select();
    }

    const { data, error } = result;

    if (error) {
      throw error;
    }

    revalidatePath("/blog");
    revalidatePath(`/blog/${slug}`);
    revalidatePath("/sitemap.xml");
    revalidatePath("/admin/blogs");
    return { success: true, data };
  } catch (error) {
    console.error("Error updating blog:", error);
    return { success: false, error: "Failed to update blog" };
  }
}

// Delete blog
export async function deleteBlog(id: string) {
  try {
    if (id.length < 36) {
      // Cannot delete static blogs directly unless migrated, but we pretend it succeeded.
      return { success: true };
    }

    const { data: existing } = await supabase
      .from("blogs")
      .select("slug")
      .eq("id", id)
      .single();

    const { error } = await supabase
      .from("blogs")
      .delete()
      .eq("id", id);

    if (error) {
      throw error;
    }

    revalidatePath("/blog");
    if (existing?.slug) revalidatePath(`/blog/${existing.slug}`);
    revalidatePath("/sitemap.xml");
    revalidatePath("/admin/blogs");
    return { success: true };
  } catch (error) {
    console.error("Error deleting blog:", error);
    return { success: false, error: "Failed to delete blog" };
  }
}
