import { supabase } from "@/lib/supabase";
import GalleryClient from "./GalleryClient";
import { GALLERY_ITEMS } from "@/data/galleryData";

export const dynamic = "force-dynamic";

export default async function GalleryPage() {
  const { data: gallery, error } = await supabase
    .from("gallery")
    .select("*")
    .order("created_at", { ascending: false });

  if (error) {
    console.error("Error fetching gallery:", error);
  }

  const items = gallery && gallery.length > 0 ? gallery : GALLERY_ITEMS;

  return <GalleryClient initialItems={items} />;
}
