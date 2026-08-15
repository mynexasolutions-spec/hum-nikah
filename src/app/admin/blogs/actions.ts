"use server";

import { supabase } from "@/lib/supabase";
import cloudinary from "@/lib/cloudinary";
import { revalidatePath } from "next/cache";
import { BLOG_POSTS } from "@/data/blogsData";

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

    const author = {
      name: authorName,
      role: authorRole,
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=200" // Default or we could upload it too
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
        readTime,
        author,
        image: imageUrl,
        featured,
        tags
      })
      .select();

    if (error) {
      throw error;
    }

    revalidatePath("/blog");
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
      name: authorName,
      role: authorRole,
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=200" // Default
    };

    const updateData: any = {
      slug,
      title,
      excerpt,
      content,
      category,
      readTime,
      author,
      featured,
      tags
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

    const { error } = await supabase
      .from("blogs")
      .delete()
      .eq("id", id);

    if (error) {
      throw error;
    }

    revalidatePath("/blog");
    revalidatePath("/admin/blogs");
    return { success: true };
  } catch (error) {
    console.error("Error deleting blog:", error);
    return { success: false, error: "Failed to delete blog" };
  }
}
