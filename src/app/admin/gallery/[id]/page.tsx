import { supabase } from "@/lib/supabase";
import { notFound } from "next/navigation";
import EditGalleryForm from "./EditGalleryForm";
import { GALLERY_ITEMS } from "@/data/galleryData";

export default async function EditGalleryPage({ params }: { params: Promise<{ id: string }> }) {
  let item = null;
  const { id } = await params;
  
  const { data, error } = await supabase
    .from("gallery")
    .select("*")
    .eq("id", id)
    .single();

  if (!error && data) {
    item = data;
  } else {
    // Fallback to static items
    item = GALLERY_ITEMS.find(p => p.id === id);
  }

  if (!item) {
    notFound();
  }

  return <EditGalleryForm item={item} />;
}
