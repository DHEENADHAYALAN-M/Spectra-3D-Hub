export type GalleryCategory = 
  | "lighting"
  | "home-decor"
  | "keychains"
  | "aerospace"
  | "prototypes"
  | "artistic";

export interface GalleryItem {
  id: string;
  thumbnail: string;
  title: string;
  category: GalleryCategory;
  description?: string;
}

export const categoryLabels: Record<GalleryCategory, string> = {
  "lighting": "Ambient Lighting",
  "home-decor": "Home Décor",
  "keychains": "Keychains & Accessories",
  "aerospace": "Aerospace & Models",
  "prototypes": "Prototypes",
  "artistic": "Artistic Prints",
};

export const galleryItems: GalleryItem[] = [
  {
    id: "1",
    thumbnail: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=600&q=80",
    title: "LED Mood Lamp",
    category: "lighting",
    description: "Custom designed LED lamp with geometric patterns",
  },
  {
    id: "2",
    thumbnail: "https://images.unsplash.com/photo-1524484485831-a92ffc0de03f?w=600&q=80",
    title: "Pendant Light Shade",
    category: "lighting",
    description: "Intricate pendant light with honeycomb design",
  },
  {
    id: "3",
    thumbnail: "https://images.unsplash.com/photo-1513506003901-1e6a229e2d15?w=600&q=80",
    title: "Desk Lamp",
    category: "lighting",
    description: "Modern desk lamp with adjustable arm",
  },
  {
    id: "4",
    thumbnail: "https://images.unsplash.com/photo-1540932239986-30128078f3c5?w=600&q=80",
    title: "Night Light",
    category: "lighting",
    description: "Soft glow night light for bedrooms",
  },
  {
    id: "5",
    thumbnail: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=600&q=80",
    title: "Decorative Vase",
    category: "home-decor",
    description: "Elegant vase with spiral pattern",
  },
  {
    id: "6",
    thumbnail: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=600&q=80",
    title: "Plant Pot",
    category: "home-decor",
    description: "Modern geometric plant pot",
  },
  {
    id: "7",
    thumbnail: "https://images.unsplash.com/photo-1513519245088-0e12902e35a6?w=600&q=80",
    title: "Table Organizer",
    category: "home-decor",
    description: "Desktop organizer with multiple compartments",
  },
  {
    id: "8",
    thumbnail: "https://images.unsplash.com/photo-1493663284031-b7e3aefcae8e?w=600&q=80",
    title: "Wall Art",
    category: "home-decor",
    description: "3D printed wall decoration",
  },
  {
    id: "9",
    thumbnail: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&q=80",
    title: "Custom Logo Keychain",
    category: "keychains",
    description: "Branded keychain with company logo",
  },
  {
    id: "10",
    thumbnail: "https://images.unsplash.com/photo-1612539465577-7eba94a11f78?w=600&q=80",
    title: "Name Tag",
    category: "keychains",
    description: "Personalized name tag keychain",
  },
  {
    id: "11",
    thumbnail: "https://images.unsplash.com/photo-1605001011156-cbf0b0f67a51?w=600&q=80",
    title: "Bottle Opener",
    category: "keychains",
    description: "Functional bottle opener accessory",
  },
  {
    id: "12",
    thumbnail: "https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=600&q=80",
    title: "Phone Stand Keychain",
    category: "keychains",
    description: "Compact phone stand that doubles as keychain",
  },
  {
    id: "13",
    thumbnail: "https://images.unsplash.com/photo-1614728263952-84ea256f9679?w=600&q=80",
    title: "Rocket Model",
    category: "aerospace",
    description: "Detailed SpaceX Falcon 9 replica",
  },
  {
    id: "14",
    thumbnail: "https://images.unsplash.com/photo-1446776811953-b23d57bd21aa?w=600&q=80",
    title: "Satellite Model",
    category: "aerospace",
    description: "Educational satellite demonstration model",
  },
  {
    id: "15",
    thumbnail: "https://images.unsplash.com/photo-1581833971358-2c8b550f87b3?w=600&q=80",
    title: "Drone Frame",
    category: "aerospace",
    description: "Custom drone body frame",
  },
  {
    id: "16",
    thumbnail: "https://images.unsplash.com/photo-1516849841032-87cbac4d88f7?w=600&q=80",
    title: "Aircraft Model",
    category: "aerospace",
    description: "Detailed aircraft replica for display",
  },
  {
    id: "17",
    thumbnail: "https://images.unsplash.com/photo-1581092160607-ee22621dd758?w=600&q=80",
    title: "Product Prototype",
    category: "prototypes",
    description: "Early-stage product development model",
  },
  {
    id: "18",
    thumbnail: "https://images.unsplash.com/photo-1581092795360-fd1ca04f0952?w=600&q=80",
    title: "Mechanical Part",
    category: "prototypes",
    description: "Precision mechanical component",
  },
  {
    id: "19",
    thumbnail: "https://images.unsplash.com/photo-1618365908648-e71bd5716cba?w=600&q=80",
    title: "Enclosure Design",
    category: "prototypes",
    description: "Electronics enclosure prototype",
  },
  {
    id: "20",
    thumbnail: "https://images.unsplash.com/photo-1563725911583-7b4e6a4c7e09?w=600&q=80",
    title: "MVP Model",
    category: "prototypes",
    description: "Minimum viable product demonstration",
  },
  {
    id: "21",
    thumbnail: "https://images.unsplash.com/photo-1544967082-d9d25d867d66?w=600&q=80",
    title: "Abstract Sculpture",
    category: "artistic",
    description: "Modern abstract art piece",
  },
  {
    id: "22",
    thumbnail: "https://images.unsplash.com/photo-1549887534-1541e9326642?w=600&q=80",
    title: "Character Figurine",
    category: "artistic",
    description: "Detailed character model",
  },
  {
    id: "23",
    thumbnail: "https://images.unsplash.com/photo-1578749556568-bc2c40e68b61?w=600&q=80",
    title: "Geometric Art",
    category: "artistic",
    description: "Mathematical art sculpture",
  },
  {
    id: "24",
    thumbnail: "https://images.unsplash.com/photo-1611532736597-de2d4265fba3?w=600&q=80",
    title: "Miniature Model",
    category: "artistic",
    description: "Detailed miniature for display",
  },
];

export const serviceToCategoryMap: Record<string, GalleryCategory> = {
  "Ambient Lighting": "lighting",
  "Table Lamps & Home Décor": "home-decor",
  "Custom Keychains & Accessories": "keychains",
  "Aerospace & Educational Models": "aerospace",
  "Hackathon & Startup Prototypes": "prototypes",
  "Statues & Artistic Prints": "artistic",
};

export function getItemsByCategory(category: GalleryCategory): GalleryItem[] {
  return galleryItems.filter(item => item.category === category);
}

export function getFeaturedItems(): GalleryItem[] {
  const categories: GalleryCategory[] = ["lighting", "home-decor", "keychains", "aerospace", "prototypes", "artistic"];
  return categories.map(cat => galleryItems.find(item => item.category === cat)!);
}
