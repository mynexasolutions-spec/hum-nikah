import { supabase } from "@/lib/supabase";
import Link from "next/link";
import { Plus, Edit, ExternalLink, Download } from "lucide-react";
import { deleteBlog } from "./actions";
import { revalidatePath } from "next/cache";
import DeleteButton from "./DeleteButton";
import { BLOG_POSTS } from "@/data/blogsData";

export const dynamic = "force-dynamic";

export default async function AdminBlogsPage() {
  const { data: blogs, error } = await supabase
    .from("blogs")
    .select("*")
    .order("created_at", { ascending: false });

  if (error) {
    console.error("Error fetching blogs:", error);
  }

  const displayBlogs = blogs && blogs.length > 0 ? blogs : BLOG_POSTS;

  // Delete Action handler
  async function handleDelete(formData: FormData) {
    "use server";
    const id = formData.get("id") as string;
    if (id) {
      await deleteBlog(id);
      revalidatePath("/admin/blogs");
    }
  }

  return (
    <div className="p-6 sm:p-8 max-w-7xl mx-auto w-full">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-8 gap-4">
        <div>
          <h1 className="text-2xl sm:text-3xl font-bold text-brand-charcoal font-playfair">Blog Management</h1>
          <p className="text-sm text-brand-secondary mt-1">Manage your website's blog posts, articles, and guidance.</p>
        </div>
        <div className="flex flex-col sm:flex-row gap-3">
          <Link
            href="/admin/blogs/create"
            className="flex items-center justify-center gap-2 bg-[#062E29] text-white px-5 py-2.5 rounded-xl text-sm font-semibold hover:bg-[#062E29]/90 transition-colors whitespace-nowrap shadow-md"
          >
            <Plus size={18} />
            Create New Post
          </Link>
        </div>
      </div>

      {displayBlogs && displayBlogs.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {displayBlogs.map((blog: any) => (
            <div key={blog.id} className="bg-white rounded-2xl shadow-sm border border-brand-border/60 overflow-hidden flex flex-col group hover:shadow-md transition-shadow">
              <div className="relative h-48 w-full bg-brand-beige overflow-hidden">
                {blog.image ? (
                  <img src={blog.image} alt={blog.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                ) : (
                  <div className="w-full h-full flex items-center justify-center text-brand-secondary">No Image</div>
                )}
                <div className="absolute top-3 left-3 flex gap-2">
                  <span className="px-2.5 py-1 rounded-md bg-[#062E29]/90 backdrop-blur-md text-white text-[10px] font-semibold tracking-wide">
                    {blog.category}
                  </span>
                </div>
              </div>
              <div className="p-5 flex flex-col flex-grow">
                <h3 className="font-semibold text-brand-charcoal text-lg line-clamp-2 mb-1 group-hover:text-brand-gold transition-colors">{blog.title}</h3>
                <p className="text-xs text-brand-secondary line-clamp-1 mb-4">{blog.slug}</p>
                
                <div className="flex items-center gap-2 mb-4 text-xs text-brand-secondary">
                  {blog.author?.avatar ? (
                    <img src={blog.author.avatar} alt={blog.author.name} className="w-5 h-5 rounded-full" />
                  ) : (
                    <div className="w-5 h-5 rounded-full bg-brand-gold/20" />
                  )}
                  <span className="truncate max-w-[120px]">{blog.author?.name || "Admin"}</span>
                  <span>•</span>
                  <span>{blog.publishedAt}</span>
                </div>

                <div className="mt-auto pt-4 border-t border-brand-border/40 flex items-center justify-between">
                  <Link
                    href={`/blog/${blog.slug}`}
                    target="_blank"
                    className="flex items-center gap-1 text-xs font-semibold text-slate-500 hover:text-[#062E29] transition-colors"
                  >
                    <ExternalLink size={14} /> View
                  </Link>
                  <div className="flex items-center gap-1">
                    <Link
                      href={`/admin/blogs/${blog.id}`}
                      className="p-1.5 text-slate-400 hover:text-blue-600 hover:bg-blue-50 rounded-lg transition-colors"
                      title="Edit post"
                    >
                      <Edit size={16} />
                    </Link>
                    <form action={handleDelete}>
                      <input type="hidden" name="id" value={blog.id} />
                      <DeleteButton />
                    </form>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <div className="bg-white rounded-2xl shadow-sm border border-brand-border/60 p-12 text-center flex flex-col items-center justify-center">
          <div className="w-16 h-16 bg-brand-cream rounded-full flex items-center justify-center mb-4">
            <Edit className="text-brand-gold/50" size={24} />
          </div>
          <p className="font-semibold text-brand-charcoal mb-1">No blog posts found</p>
          <p className="text-sm text-brand-secondary mb-5">Get started by creating your first blog post.</p>
          <Link
            href="/admin/blogs/create"
            className="inline-flex items-center gap-2 bg-[#062E29] text-white px-5 py-2.5 rounded-xl text-sm font-semibold hover:bg-[#062E29]/90 transition-colors shadow-md"
          >
            <Plus size={16} /> Create Post
          </Link>
        </div>
      )}
    </div>
  );
}
