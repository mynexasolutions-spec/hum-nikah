import React from "react";

const galleryPhotos = [
  { src: "https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&q=80&w=600", title: "Nikah Ceremony" },
  { src: "https://images.unsplash.com/photo-1511285560929-80b456fea0bc?auto=format&fit=crop&q=80&w=600", title: "Walima Celebration" },
  { src: "https://images.unsplash.com/photo-1583939003579-730e3918a45a?auto=format&fit=crop&q=80&w=600", title: "Joyful Beginnings" },
  { src: "https://images.unsplash.com/photo-1520854221256-17451cc331bf?auto=format&fit=crop&q=80&w=600", title: "Floral Decor" },
  { src: "https://images.unsplash.com/photo-1465495976277-4387d4b0b4c6?auto=format&fit=crop&q=80&w=600", title: "Rings & Promises" },
  { src: "https://images.unsplash.com/photo-1522673607200-164d1b6ce486?auto=format&fit=crop&q=80&w=600", title: "Blessed Union" },
];

export function GalleryPreview() {
  return (
    <section className="py-12 bg-white">
      <div className="max-w-wrap mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {galleryPhotos.map((item, idx) => (
            <div key={idx} className="group relative rounded-2xl overflow-hidden shadow-md bg-brand-cream aspect-[4/3]">
              <img
                src={item.src}
                alt={item.title}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-brand-deep-green/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-4">
                <span className="text-white font-playfair font-semibold text-lg">{item.title}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default GalleryPreview;
