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
    thumbnail: "/gallery/3d_printed_lamp_led__d13727e5.jpg",
    title: "LED Mood Lamp",
    category: "lighting",
    description: "Custom designed LED lamp with geometric patterns",
  },
  {
    id: "2",
    thumbnail: "/gallery/3d_printed_lamp_led__539fa231.jpg",
    title: "Pendant Light Shade",
    category: "lighting",
    description: "Intricate pendant light with honeycomb design",
  },
  {
    id: "3",
    thumbnail: "/gallery/3d_printed_lamp_led__249f35aa.jpg",
    title: "Desk Lamp",
    category: "lighting",
    description: "Modern desk lamp with adjustable arm",
  },
  {
    id: "4",
    thumbnail: "/gallery/3d_printed_lamp_led__2818f7bd.jpg",
    title: "Night Light",
    category: "lighting",
    description: "Soft glow night light for bedrooms",
  },
  {
    id: "5",
    thumbnail: "/gallery/3d_printed_home_deco_123b1cd9.jpg",
    title: "Decorative Vase",
    category: "home-decor",
    description: "Elegant vase with spiral pattern",
  },
  {
    id: "6",
    thumbnail: "/gallery/3d_printed_home_deco_9c352ff1.jpg",
    title: "Plant Pot",
    category: "home-decor",
    description: "Modern geometric plant pot",
  },
  {
    id: "7",
    thumbnail: "/gallery/3d_printed_home_deco_951262dc.jpg",
    title: "Table Organizer",
    category: "home-decor",
    description: "Desktop organizer with multiple compartments",
  },
  {
    id: "8",
    thumbnail: "/gallery/3d_printed_home_deco_a97b11ec.jpg",
    title: "Wall Art",
    category: "home-decor",
    description: "3D printed wall decoration",
  },
  {
    id: "9",
    thumbnail: "/gallery/custom_keychain_acce_8abf48bf.jpg",
    title: "Custom Logo Keychain",
    category: "keychains",
    description: "Branded keychain with company logo",
  },
  {
    id: "10",
    thumbnail: "/gallery/custom_keychain_acce_bbbfe2e4.jpg",
    title: "Name Tag",
    category: "keychains",
    description: "Personalized name tag keychain",
  },
  {
    id: "11",
    thumbnail: "/gallery/custom_keychain_acce_e0d109b4.jpg",
    title: "Bottle Opener",
    category: "keychains",
    description: "Functional bottle opener accessory",
  },
  {
    id: "12",
    thumbnail: "/gallery/custom_keychain_acce_2cfc63f4.jpg",
    title: "Phone Stand Keychain",
    category: "keychains",
    description: "Compact phone stand that doubles as keychain",
  },
  {
    id: "13",
    thumbnail: "/gallery/rocket_model_aerospa_8eac2326.jpg",
    title: "Rocket Model",
    category: "aerospace",
    description: "Detailed SpaceX Falcon 9 replica",
  },
  {
    id: "14",
    thumbnail: "/gallery/rocket_model_aerospa_70093925.jpg",
    title: "Satellite Model",
    category: "aerospace",
    description: "Educational satellite demonstration model",
  },
  {
    id: "15",
    thumbnail: "/gallery/rocket_model_aerospa_47650761.jpg",
    title: "Drone Frame",
    category: "aerospace",
    description: "Custom drone body frame",
  },
  {
    id: "16",
    thumbnail: "/gallery/rocket_model_aerospa_ecdcecfc.jpg",
    title: "Aircraft Model",
    category: "aerospace",
    description: "Detailed aircraft replica for display",
  },
  {
    id: "17",
    thumbnail: "/gallery/3d_printed_prototype_226a0e42.jpg",
    title: "Product Prototype",
    category: "prototypes",
    description: "Early-stage product development model",
  },
  {
    id: "18",
    thumbnail: "/gallery/3d_printed_prototype_05fe0223.jpg",
    title: "Mechanical Part",
    category: "prototypes",
    description: "Precision mechanical component",
  },
  {
    id: "19",
    thumbnail: "/gallery/3d_printed_prototype_6cba04cc.jpg",
    title: "Enclosure Design",
    category: "prototypes",
    description: "Electronics enclosure prototype",
  },
  {
    id: "20",
    thumbnail: "/gallery/3d_printed_prototype_718dda25.jpg",
    title: "MVP Model",
    category: "prototypes",
    description: "Minimum viable product demonstration",
  },
  {
    id: "21",
    thumbnail: "/gallery/3d_printed_sculpture_57614e42.jpg",
    title: "Abstract Sculpture",
    category: "artistic",
    description: "Modern abstract art piece",
  },
  {
    id: "22",
    thumbnail: "/gallery/3d_printed_sculpture_d5b89b46.jpg",
    title: "Character Figurine",
    category: "artistic",
    description: "Detailed character model",
  },
  {
    id: "23",
    thumbnail: "/gallery/3d_printed_sculpture_04157831.jpg",
    title: "Geometric Art",
    category: "artistic",
    description: "Mathematical art sculpture",
  },
  {
    id: "24",
    thumbnail: "/gallery/3d_printed_sculpture_1822b349.jpg",
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
