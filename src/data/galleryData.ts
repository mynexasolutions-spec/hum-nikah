export interface GalleryItem {
  id: string;
  title: string;
  category: "Nikah Moments" | "Walima & Celebrations" | "Rings & Promises" | "Venue & Decor" | "Couple Stories";
  image: string;
  description: string;
  date?: string;
  location?: string;
}

export const GALLERY_CATEGORIES = [
  "All",
  "Nikah Moments",
  "Walima & Celebrations",
  "Rings & Promises",
  "Venue & Decor",
  "Couple Stories",
] as const;

export const GALLERY_ITEMS: GalleryItem[] = [
  {
    id: "1",
    title: "Sacred Nikah Ceremony",
    category: "Nikah Moments",
    image: "https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&q=80&w=1200",
    description: "The heartwarming moment of signing the Nikah contract in the presence of beloved family and elders.",
    location: "Royal Emerald Hall",
  },
  {
    id: "2",
    title: "Walima Celebration & Feast",
    category: "Walima & Celebrations",
    image: "https://images.unsplash.com/photo-1511285560929-80b456fea0bc?auto=format&fit=crop&q=80&w=1200",
    description: "A joyful Walima reception filled with warm smiles, gratitude, and delicious traditional hospitality.",
    location: "Grand Heritage Resort",
  },
  {
    id: "3",
    title: "Rings & Eternal Promises",
    category: "Rings & Promises",
    image: "https://images.unsplash.com/photo-1465495976277-4387d4b0b4c6?auto=format&fit=crop&q=80&w=1200",
    description: "Symbol of love and commitment bound together under the blessings of Allah (SWT).",
    location: "Private Garden Venue",
  },
  {
    id: "4",
    title: "Floral Elegance & Backdrop",
    category: "Venue & Decor",
    image: "https://images.unsplash.com/photo-1520854221256-17451cc331bf?auto=format&fit=crop&q=80&w=1200",
    description: "Handcrafted white and pastel floral arrangements creating a serene Islamic wedding atmosphere.",
    location: "Crystal Ballroom",
  },
  {
    id: "5",
    title: "Joyful Beginnings Together",
    category: "Couple Stories",
    image: "https://images.unsplash.com/photo-1583939003579-730e3918a45a?auto=format&fit=crop&q=80&w=1200",
    description: "Radiant smiles as the newly wedded couple embarks on a life built upon Deen and mutual support.",
    location: "Sunset Terrace",
  },
  {
    id: "6",
    title: "Blessed Family Gathering",
    category: "Nikah Moments",
    image: "https://images.unsplash.com/photo-1522673607200-164d1b6ce486?auto=format&fit=crop&q=80&w=1200",
    description: "Family members coming together to share prayers, dua, and congratulations for the bride and groom.",
    location: "Central Mosque Hall",
  },
  {
    id: "7",
    title: "Traditional Henna & Accessories",
    category: "Rings & Promises",
    image: "https://images.unsplash.com/photo-1537633552985-df8429e8048b?auto=format&fit=crop&q=80&w=1200",
    description: "Intricate bridal henna design paired with timeless traditional jewelry and gold accents.",
    location: "Bridal Suite",
  },
  {
    id: "8",
    title: "Candlelit Evening Reception",
    category: "Venue & Decor",
    image: "https://images.unsplash.com/photo-1519225421980-715cb0215aed?auto=format&fit=crop&q=80&w=1200",
    description: "Warm candlelit centerpieces and gold table decor for an unforgettable evening with loved ones.",
    location: "Lakeside Pavilion",
  },
  {
    id: "9",
    title: "Unforgettable Sunset Walk",
    category: "Couple Stories",
    image: "https://images.unsplash.com/photo-1469371670807-013ccf25f16a?auto=format&fit=crop&q=80&w=1200",
    description: "A serene moment captured in nature as husband and wife walk hand in hand.",
    location: "Golden Bay",
  },
];
