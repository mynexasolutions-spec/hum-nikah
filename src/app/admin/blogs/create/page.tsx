"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { ArrowLeft, Upload, Loader2, Save } from "lucide-react";
import { uploadImage, createBlog } from "../actions";

export default function CreateBlogPage() {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [imageFile, setImageFile] = useState<File | null>(null);
  const [imagePreview, setImagePreview] = useState("");
  const [slug, setSlug] = useState("");
  const [title, setTitle] = useState("");

  const generateSlug = (text: string) => {
    return text
      .toLowerCase()
      .trim()
      .replace(/[^\w\s-]/g, '')
      .replace(/[\s_-]+/g, '-')
      .replace(/^-+|-+$/g, '');
  };

  const handleTitleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newTitle = e.target.value;
    setTitle(newTitle);
    setSlug(generateSlug(newTitle));
  };

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setImageFile(file);
      const url = URL.createObjectURL(file);
      setImagePreview(url);
    }
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    try {
      if (!imageFile) {
        throw new Error("Please select an image");
      }

      const formData = new FormData(e.currentTarget);
      
      // First upload image
      const imageFormData = new FormData();
      imageFormData.append("file", imageFile);
      const imageUrl = await uploadImage(imageFormData) as string;

      if (!imageUrl) {
        throw new Error("Failed to upload image");
      }

      // Then create blog
      const result = await createBlog(formData, imageUrl);

      if (result.success) {
        router.push("/admin/blogs");
        router.refresh();
      } else {
        throw new Error(result.error);
      }
    } catch (err: any) {
      setError(err.message || "An error occurred");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-[1600px] mx-auto w-full space-y-4 sm:space-y-6">
      <div className="flex items-center justify-between gap-4">
        <div className="flex items-center gap-3 sm:gap-4">
          <Link
            href="/admin/blogs"
            className="p-1.5 sm:p-2 bg-white rounded-full border border-brand-border/60 hover:bg-brand-cream/50 transition-colors shadow-sm"
          >
            <ArrowLeft className="w-4 h-4 sm:w-5 sm:h-5 text-brand-charcoal" />
          </Link>
          <div>
            <h1 className="text-xl sm:text-2xl font-bold text-brand-charcoal font-playfair leading-tight">Create New Post</h1>
            <p className="text-[10px] sm:text-xs text-brand-secondary mt-0.5">Publish a new article to your blog.</p>
          </div>
        </div>
        
        {/* Mobile Submit Button (Hidden on Desktop) */}
        <button
          form="blog-form"
          type="submit"
          disabled={loading}
          className="lg:hidden flex items-center gap-1.5 px-4 py-2 rounded-lg text-xs font-semibold text-white bg-[#062E29] hover:bg-[#062E29]/90 transition-colors disabled:opacity-70 shadow-sm shrink-0"
        >
          {loading ? <Loader2 size={14} className="animate-spin" /> : <Save size={14} />}
          {loading ? 'Publishing...' : 'Publish'}
        </button>
      </div>

      {error && (
        <div className="p-3 bg-red-50 text-red-600 rounded-lg text-xs font-medium border border-red-100">
          {error}
        </div>
      )}

      <form id="blog-form" onSubmit={handleSubmit} className="flex flex-col lg:flex-row gap-4 sm:gap-6 items-start">
        {/* Left Column: Main Content */}
        <div className="w-full flex-grow flex flex-col gap-4">
          <div className="bg-white rounded-xl shadow-sm border border-brand-border/60 p-4 sm:p-5 flex flex-col">
            <div className="space-y-4">
              <div>
                <input
                  type="text"
                  id="title"
                  name="title"
                  value={title}
                  onChange={handleTitleChange}
                  autoFocus
                  required
                  className="w-full px-0 py-2 border-b-2 border-brand-border/60 focus:border-brand-gold outline-none transition-all text-xl sm:text-2xl font-playfair font-bold placeholder:text-slate-300 bg-transparent"
                  placeholder="Enter blog title..."
                />
              </div>

              <div>
                <textarea
                  id="excerpt"
                  name="excerpt"
                  required
                  rows={2}
                  className="w-full px-3 py-2 rounded-lg border border-brand-border focus:ring-1 focus:ring-brand-gold focus:border-brand-gold outline-none transition-all text-sm resize-none"
                  placeholder="Short excerpt or description..."
                ></textarea>
              </div>

              <div>
                <textarea
                  id="content"
                  name="content"
                  required
                  rows={15}
                  className="w-full px-3 py-3 rounded-lg border border-brand-border focus:ring-1 focus:ring-brand-gold focus:border-brand-gold outline-none transition-all text-sm font-mono resize-y"
                  placeholder="<h2>Subheading</h2><p>Your full HTML content here...</p>"
                ></textarea>
              </div>
            </div>
          </div>
        </div>

        {/* Right Column: Settings & Metadata */}
        <div className="w-full lg:w-80 xl:w-96 flex-shrink-0 flex flex-col gap-4 lg:sticky lg:top-0">
          {/* Submit Actions (Desktop) */}
          <div className="hidden lg:flex bg-white rounded-xl shadow-sm border border-brand-border/60 p-4 justify-between items-center">
            <Link
              href="/admin/blogs"
              className="px-4 py-1.5 rounded-lg text-xs font-semibold text-brand-charcoal hover:bg-brand-cream transition-colors"
            >
              Cancel
            </Link>
            <button
              type="submit"
              disabled={loading}
              className="flex items-center gap-1.5 px-5 py-2 rounded-lg text-xs font-semibold text-white bg-[#062E29] hover:bg-[#062E29]/90 transition-colors disabled:opacity-70 shadow-sm"
            >
              {loading ? <Loader2 size={14} className="animate-spin" /> : <Save size={14} />}
              {loading ? 'Publishing...' : 'Publish Post'}
            </button>
          </div>

          {/* Featured Image */}
          <div className="bg-white rounded-xl shadow-sm border border-brand-border/60 p-4">
            <h3 className="text-xs font-bold text-brand-charcoal uppercase tracking-wider mb-3">Featured Image</h3>
            <div 
              className={`w-full aspect-video border-2 border-dashed rounded-lg overflow-hidden relative flex items-center justify-center transition-colors ${
                imagePreview ? 'border-transparent bg-slate-100' : 'border-brand-border hover:bg-brand-cream/20'
              }`}
            >
              {imagePreview ? (
                <img src={imagePreview} alt="Preview" className="w-full h-full object-cover" />
              ) : (
                <div className="text-center p-3">
                  <Upload className="mx-auto text-brand-secondary mb-1" size={18} />
                  <p className="text-[10px] text-brand-secondary font-medium">Upload Image</p>
                </div>
              )}
              <input
                type="file"
                accept="image/*"
                onChange={handleImageChange}
                className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
                required
              />
            </div>
          </div>

          {/* Settings Grid */}
          <div className="bg-white rounded-xl shadow-sm border border-brand-border/60 p-4 space-y-3">
            <h3 className="text-xs font-bold text-brand-charcoal uppercase tracking-wider mb-1">Post Details</h3>
            
            <div className="grid grid-cols-2 gap-3">
              <div className="space-y-1">
                <label htmlFor="category" className="text-[10px] font-semibold text-brand-secondary uppercase">Category</label>
                <select
                  id="category"
                  name="category"
                  required
                  className="w-full px-2.5 py-1.5 rounded-lg border border-brand-border focus:ring-1 focus:ring-brand-gold outline-none text-xs"
                >
                  <option value="Nikah Sunnah">Nikah Sunnah</option>
                  <option value="Choosing Partner">Choosing Partner</option>
                  <option value="Mahr & Rights">Mahr & Rights</option>
                  <option value="Family & Rights">Family & Rights</option>
                  <option value="Pre-Marriage">Pre-Marriage</option>
                  <option value="Post-Nikah">Post-Nikah</option>
                </select>
              </div>
              <div className="space-y-1">
                <label htmlFor="readTime" className="text-[10px] font-semibold text-brand-secondary uppercase">Read Time</label>
                <input
                  type="text"
                  id="readTime"
                  name="readTime"
                  required
                  className="w-full px-2.5 py-1.5 rounded-lg border border-brand-border focus:ring-1 focus:ring-brand-gold outline-none text-xs"
                  placeholder="e.g. 5 min read"
                />
              </div>
            </div>

            <div className="space-y-1">
              <label htmlFor="slug" className="text-[10px] font-semibold text-brand-secondary uppercase">URL Slug (Auto-generated)</label>
              <input
                type="text"
                id="slug"
                name="slug"
                value={slug}
                readOnly
                className="w-full px-2.5 py-1.5 rounded-lg border border-brand-border/50 bg-slate-50 text-slate-500 outline-none text-xs font-mono cursor-not-allowed"
                placeholder="url-friendly-slug"
              />
            </div>
            
            <div className="space-y-1">
              <label htmlFor="tags" className="text-[10px] font-semibold text-brand-secondary uppercase">Tags (comma separated)</label>
              <input
                type="text"
                id="tags"
                name="tags"
                className="w-full px-2.5 py-1.5 rounded-lg border border-brand-border focus:ring-1 focus:ring-brand-gold outline-none text-xs"
                placeholder="Nikah, Sunnah, Advice"
              />
            </div>
          </div>

          {/* Author Details */}
          <div className="bg-white rounded-xl shadow-sm border border-brand-border/60 p-4 space-y-3">
            <h3 className="text-xs font-bold text-brand-charcoal uppercase tracking-wider mb-1">Author Details</h3>
            <div className="grid grid-cols-2 gap-3">
              <div className="space-y-1">
                <label htmlFor="authorName" className="text-[10px] font-semibold text-brand-secondary uppercase">Name</label>
                <input
                  type="text"
                  id="authorName"
                  name="authorName"
                  required
                  className="w-full px-2.5 py-1.5 rounded-lg border border-brand-border focus:ring-1 focus:ring-brand-gold outline-none text-xs"
                />
              </div>
              <div className="space-y-1">
                <label htmlFor="authorRole" className="text-[10px] font-semibold text-brand-secondary uppercase">Role</label>
                <input
                  type="text"
                  id="authorRole"
                  name="authorRole"
                  required
                  className="w-full px-2.5 py-1.5 rounded-lg border border-brand-border focus:ring-1 focus:ring-brand-gold outline-none text-xs"
                />
              </div>
            </div>
          </div>

          {/* Additional Settings */}
          <div className="bg-white rounded-xl shadow-sm border border-brand-border/60 p-4">
             <label className="flex items-center gap-2.5 cursor-pointer">
              <input
                type="checkbox"
                name="featured"
                value="true"
                className="w-4 h-4 rounded border-brand-border text-brand-gold focus:ring-brand-gold cursor-pointer"
              />
              <span className="text-xs font-semibold text-brand-charcoal">Feature this post on blog index</span>
            </label>
          </div>
        </div>
      </form>
    </div>
  );
}
