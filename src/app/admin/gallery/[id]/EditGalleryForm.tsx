"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { ArrowLeft, Upload, Loader2, Save } from "lucide-react";
import { uploadGalleryImage, updateGalleryItem } from "../actions";

interface GalleryItemType {
  id: string;
  title: string;
  category: string;
  image: string;
  date?: string;
}

export default function EditGalleryForm({ item }: { item: GalleryItemType }) {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [imageFile, setImageFile] = useState<File | null>(null);
  const [imagePreview, setImagePreview] = useState(item.image || "");
  const [dateStr, setDateStr] = useState(item.date || "");

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
      const formData = new FormData(e.currentTarget);
      
      let imageUrl = undefined;
      if (imageFile) {
        const imageFormData = new FormData();
        imageFormData.append("file", imageFile);
        imageUrl = await uploadGalleryImage(imageFormData) as string;

        if (!imageUrl) {
          throw new Error("Failed to upload image");
        }
      }

      const result = await updateGalleryItem(item.id, formData, imageUrl);

      if (result.success) {
        router.push("/admin/gallery");
        router.refresh();
      } else {
        throw new Error(result.error);
      }
    } catch (err: unknown) {
      if (err instanceof Error) {
        setError(err.message);
      } else {
        setError("An error occurred");
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-[1200px] mx-auto w-full space-y-4 sm:space-y-6">
      <div className="flex items-center justify-between gap-4">
        <div className="flex items-center gap-3 sm:gap-4">
          <Link
            href="/admin/gallery"
            className="p-1.5 sm:p-2 bg-white rounded-full border border-brand-border/60 hover:bg-brand-cream/50 transition-colors shadow-sm"
          >
            <ArrowLeft className="w-4 h-4 sm:w-5 sm:h-5 text-brand-charcoal" />
          </Link>
          <div>
            <h1 className="text-xl sm:text-2xl font-bold text-brand-charcoal font-playfair leading-tight">Edit Photo</h1>
            <p className="text-[10px] sm:text-xs text-brand-secondary mt-0.5">Update details for this gallery item.</p>
          </div>
        </div>
        
        <button
          form="edit-gallery-form"
          type="submit"
          disabled={loading}
          className="lg:hidden flex items-center gap-1.5 px-4 py-2 rounded-lg text-xs font-semibold text-white bg-[#062E29] hover:bg-[#062E29]/90 transition-colors disabled:opacity-70 shadow-sm shrink-0"
        >
          {loading ? <Loader2 size={14} className="animate-spin" /> : <Save size={14} />}
          {loading ? 'Saving...' : 'Save'}
        </button>
      </div>

      {error && (
        <div className="p-3 bg-red-50 text-red-600 rounded-lg text-xs font-medium border border-red-100">
          {error}
        </div>
      )}

      <form id="edit-gallery-form" onSubmit={handleSubmit} className="flex flex-col lg:flex-row gap-4 sm:gap-6 items-start">
        {/* Left Side: Image Upload (Reduced Width) */}
        <div className="w-full lg:w-1/3 flex-shrink-0 flex flex-col gap-4">
          <div className="bg-white rounded-xl shadow-sm border border-brand-border/60 p-4">
            <h3 className="text-xs font-bold text-brand-charcoal uppercase tracking-wider mb-3">Photo Upload</h3>
            <div 
              className={`w-full aspect-video sm:aspect-square border-2 border-dashed rounded-xl overflow-hidden relative flex items-center justify-center transition-all ${
                imagePreview ? 'border-transparent bg-slate-100' : 'border-brand-border hover:bg-brand-cream hover:border-brand-gold/50'
              }`}
            >
              {imagePreview ? (
                <div className="relative w-full h-full">
                  <img src={imagePreview} alt="Preview" className="w-full h-full object-cover" />
                  <div className="absolute bottom-4 left-1/2 -translate-x-1/2 bg-white/95 backdrop-blur-sm px-4 py-2 rounded-full shadow-md border border-slate-200/80 flex items-center gap-2 pointer-events-none transition-transform group-hover:scale-105">
                    <Upload size={14} className="text-brand-gold" />
                    <span className="text-xs font-semibold text-brand-charcoal whitespace-nowrap">Change Photo</span>
                  </div>
                </div>
              ) : (
                <div className="text-center p-4">
                  <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center mx-auto mb-3 shadow-sm border border-slate-100">
                    <Upload className="text-brand-gold" size={20} />
                  </div>
                  <p className="text-xs text-brand-charcoal font-semibold">Click to upload photo</p>
                  <p className="text-[10px] text-brand-secondary mt-1">PNG, JPG up to 5MB</p>
                </div>
              )}
              <input type="hidden" name="currentImage" value={item.image} />
              <input
                type="file"
                accept="image/*"
                onChange={handleImageChange}
                className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
              />
            </div>
          </div>
        </div>

        {/* Right Side: Photo Details (Increased Width) */}
        <div className="flex-grow w-full flex flex-col gap-4">
          <div className="hidden lg:flex bg-white rounded-xl shadow-sm border border-brand-border/60 p-4 justify-between items-center">
            <Link
              href="/admin/gallery"
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
              {loading ? 'Saving...' : 'Save Changes'}
            </button>
          </div>

          <div className="bg-white rounded-xl shadow-sm border border-brand-border/60 p-5 sm:p-7 flex flex-col flex-grow">
            <h3 className="text-xs font-bold text-brand-charcoal uppercase tracking-wider mb-6">Photo Details</h3>
            <div className="space-y-6 flex flex-col h-full">
              <div>
                <input
                  type="text"
                  id="title"
                  name="title"
                  defaultValue={item.title}
                  autoFocus
                  required
                  className="w-full px-0 py-2 border-b-2 border-brand-border/60 focus:border-[#b3854d] outline-none transition-all text-xl sm:text-2xl font-playfair font-bold text-brand-charcoal placeholder:text-slate-300 bg-transparent"
                  placeholder="Enter a beautiful title for this photo..."
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div className="space-y-2">
                  <label htmlFor="category" className="text-[10px] font-bold text-brand-charcoal uppercase tracking-wider">Category</label>
                  <select
                    id="category"
                    name="category"
                    defaultValue={item.category}
                    required
                    className="w-full px-4 py-2.5 bg-slate-50 border border-brand-border/80 focus:border-[#b3854d] focus:bg-white rounded-xl outline-none text-sm text-brand-charcoal transition-all appearance-none cursor-pointer"
                    style={{ backgroundImage: 'url("data:image/svg+xml,%3Csvg xmlns=\'http://www.w3.org/2000/svg\' fill=\'none\' viewBox=\'0 0 24 24\' stroke=\'%23a0743f\' stroke-width=\'2\'%3E%3Cpath stroke-linecap=\'round\' stroke-linejoin=\'round\' d=\'M19 9l-7 7-7-7\'/%3E%3C/svg%3E")', backgroundRepeat: 'no-repeat', backgroundPosition: 'right 1rem center', backgroundSize: '1em' }}
                  >
                    <option value="" disabled>Select a category</option>
                    <option value="Nikah Moments">Nikah Moments</option>
                    <option value="Walima & Celebrations">Walima & Celebrations</option>
                    <option value="Rings & Promises">Rings & Promises</option>
                    <option value="Venue & Decor">Venue & Decor</option>
                    <option value="Couple Stories">Couple Stories</option>
                  </select>
                </div>
                
                <div className="space-y-2">
                  <label htmlFor="date" className="text-[10px] font-bold text-brand-charcoal uppercase tracking-wider">Date (Optional)</label>
                  <input
                    type="date"
                    id="date"
                    name="date"
                    value={dateStr}
                    onChange={(e) => setDateStr(e.target.value)}
                    className="w-full px-4 py-2.5 bg-slate-50 border border-brand-border/80 focus:border-[#b3854d] focus:bg-white rounded-xl outline-none text-sm text-brand-charcoal transition-all cursor-pointer"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
}
