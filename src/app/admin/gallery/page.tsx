import { supabase } from "@/lib/supabase";
import Link from "next/link";
import { Plus, Edit, ExternalLink } from "lucide-react";
import { deleteGalleryItem } from "./actions";
import { revalidatePath } from "next/cache";
import DeleteButton from "./DeleteButton";
import { GALLERY_ITEMS, GalleryItem } from "@/data/galleryData";

export const dynamic = "force-dynamic";

export default async function AdminGalleryPage() {
  const { data: gallery, error } = await supabase
    .from("gallery")
    .select("*")
    .order("created_at", { ascending: false });

  if (error) {
    console.error("Error fetching gallery items:", error);
  }

  const displayGallery: GalleryItem[] = gallery && gallery.length > 0 ? gallery : GALLERY_ITEMS;

  // Delete Action handler
  async function handleDelete(formData: FormData) {
    "use server";
    const id = formData.get("id") as string;
    if (id) {
      await deleteGalleryItem(id);
      revalidatePath("/admin/gallery");
    }
  }

  return (
    <div className="p-6 sm:p-8 max-w-7xl mx-auto w-full">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-8 gap-4">
        <div>
          <h1 className="text-2xl sm:text-3xl font-bold text-brand-charcoal font-playfair">Gallery Management</h1>
          <p className="text-sm text-brand-secondary mt-1">Manage your website beautiful gallery moments.</p>
        </div>
        <div className="flex flex-col sm:flex-row gap-3">
          <Link
            href="/admin/gallery/create"
            className="flex items-center justify-center gap-2 bg-[#062E29] text-white px-5 py-2.5 rounded-xl text-sm font-semibold hover:bg-[#062E29]/90 transition-colors whitespace-nowrap shadow-md"
          >
            <Plus size={18} />
            Upload New Photo
          </Link>
        </div>
      </div>

      {displayGallery && displayGallery.length > 0 ? (
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 sm:gap-6">
          {displayGallery.map((item: GalleryItem) => (
            <div key={item.id} className="bg-white rounded-2xl shadow-sm border border-brand-border/60 overflow-hidden flex flex-col group hover:shadow-md transition-shadow relative">
              <div className="relative aspect-square w-full bg-brand-beige overflow-hidden">
                {item.image ? (
                  <img src={item.image} alt={item.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                ) : (
                  <div className="w-full h-full flex items-center justify-center text-brand-secondary">No Image</div>
                )}
                <div className="absolute top-2 left-2 right-2 flex justify-between items-start">
                  <span className="px-2 py-1 rounded-md bg-white/90 backdrop-blur-md text-[#062E29] text-[9px] sm:text-[10px] font-bold tracking-wide shadow-sm">
                    {item.category}
                  </span>
                  
                  <div className="flex flex-col gap-1 opacity-0 group-hover:opacity-100 transition-opacity">
                    <Link
                      href={`/admin/gallery/${item.id}`}
                      className="p-2 text-[#062E29] bg-white/90 hover:bg-white rounded-lg shadow-md transition-colors"
                      title="Edit photo"
                    >
                      <Edit size={14} />
                    </Link>
                    <form action={handleDelete}>
                      <input type="hidden" name="id" value={item.id} />
                      <button
                        type="submit"
                        className="p-2 text-red-600 bg-white/90 hover:bg-white rounded-lg shadow-md transition-colors"
                        title="Delete photo"
                      >
                        <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M3 6h18"/><path d="M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6"/><path d="M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2"/><line x1="10" y1="11" x2="10" y2="17"/><line x1="14" y1="11" x2="14" y2="17"/></svg>
                      </button>
                    </form>
                  </div>
                </div>
              </div>
              
              <div className="p-3 sm:p-4 flex flex-col flex-grow bg-white">
                <h3 className="font-semibold text-brand-charcoal text-xs sm:text-sm line-clamp-1 mb-1">{item.title}</h3>
                <p className="text-[10px] sm:text-xs text-brand-secondary font-medium">
                  {item.date || "No Date"}
                </p>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <div className="bg-white rounded-2xl shadow-sm border border-brand-border/60 p-12 text-center flex flex-col items-center justify-center">
          <div className="w-16 h-16 bg-brand-cream rounded-full flex items-center justify-center mb-4">
            <Edit className="text-brand-gold/50" size={24} />
          </div>
          <p className="font-semibold text-brand-charcoal mb-1">No photos found</p>
          <p className="text-sm text-brand-secondary mb-5">Get started by uploading your first gallery photo.</p>
          <Link
            href="/admin/gallery/create"
            className="inline-flex items-center gap-2 bg-[#062E29] text-white px-5 py-2.5 rounded-xl text-sm font-semibold hover:bg-[#062E29]/90 transition-colors shadow-md"
          >
            <Plus size={16} /> Upload Photo
          </Link>
        </div>
      )}
    </div>
  );
}
