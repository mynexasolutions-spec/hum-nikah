import { supabase } from "@/lib/supabase";
import { notFound } from "next/navigation";
import EditBlogForm from "./EditBlogForm";

import { BLOG_POSTS } from "@/data/blogsData";

export default async function EditBlogPage({ params }: { params: Promise<{ id: string }> }) {
  let blog = null;
  const { id } = await params;
  
  // Try to fetch from Supabase
  const { data, error } = await supabase
    .from("blogs")
    .select("*")
    .eq("id", id)
    .single();

  if (!error && data) {
    blog = data;
  } else {
    // Fallback to static blogs
    blog = BLOG_POSTS.find(p => p.id === id);
  }

  if (!blog) {
    notFound();
  }

  return <EditBlogForm blog={blog} />;
}
