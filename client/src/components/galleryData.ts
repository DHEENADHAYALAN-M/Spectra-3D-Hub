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
  "lighting": "Table Lamps",
  "home-decor": "Home Décor",
  "keychains": "Keychains",
  "aerospace": "Customized Products",
  "prototypes": "Prototypes",
  "artistic": "Statues",
};

export const galleryItems: GalleryItem[] = [
  {
    id: "1",
    thumbnail: "/gallery/ambiant_1_1765902081137.jpg",
    title: "Ribbed Table Lamp",
    category: "lighting",
    description: "Elegant ribbed design table lamp with tripod base",
  },
  {
    id: "2",
    thumbnail: "/gallery/ambiant_2_1765902081138.webp",
    title: "Wave Design Lamp",
    category: "lighting",
    description: "Artistic wave pattern ambient lamp",
  },
  {
    id: "3",
    thumbnail: "/gallery/ambiant_3_1765902081139.webp",
    title: "Spherical Mood Light",
    category: "lighting",
    description: "Organic wave pattern spherical lamp",
  },
  {
    id: "4",
    thumbnail: "/gallery/ambiant_4_1765902081140.webp",
    title: "Lattice Table Lamp",
    category: "lighting",
    description: "Modern lattice design with fabric shade",
  },
  {
    id: "5",
    thumbnail: "/gallery/lamp1_1765902081144.jpg",
    title: "Photo Cube Lamp",
    category: "lighting",
    description: "Custom photo lithophane cube lamp",
  },
  {
    id: "6",
    thumbnail: "/gallery/lamp2_1765902081145.jpg",
    title: "Moon Photo Lamp",
    category: "lighting",
    description: "Personalized moon lamp with photo engraving",
  },
  {
    id: "7",
    thumbnail: "/gallery/homedecor1_1765902081142.jpg",
    title: "Teardrop Pendant",
    category: "home-decor",
    description: "Elegant teardrop pendant light shade",
  },
  {
    id: "8",
    thumbnail: "/gallery/homedecor2_1765902081143.jpg",
    title: "Floral Pendant Light",
    category: "home-decor",
    description: "Artistic floral design hanging lamp",
  },
  {
    id: "9",
    thumbnail: "/gallery/homedecor3_1765902081143.jpg",
    title: "Geometric Sphere Light",
    category: "home-decor",
    description: "Modern geometric pendant with warm glow",
  },
  {
    id: "10",
    thumbnail: "/gallery/homedecor4_1765902081143.jpg",
    title: "Woven Pendant Duo",
    category: "home-decor",
    description: "Rustic woven pattern pendant lights",
  },
  {
    id: "11",
    thumbnail: "/gallery/3d_printed_home_deco_123b1cd9.jpg",
    title: "Decorative Vase",
    category: "home-decor",
    description: "Elegant vase with spiral pattern",
  },
  {
    id: "12",
    thumbnail: "/gallery/3d_printed_home_deco_9c352ff1.jpg",
    title: "Modern Plant Pot",
    category: "home-decor",
    description: "Geometric plant pot for indoor plants",
  },
  {
    id: "13",
    thumbnail: "/gallery/keychain2_1765902081144.webp",
    title: "Name Keychains",
    category: "keychains",
    description: "Personalized colorful name keychains",
  },
  {
    id: "14",
    thumbnail: "/gallery/keychain1_1765902081143.jpg",
    title: "Animal Figurines",
    category: "keychains",
    description: "Cute animal figurine collection",
  },
  {
    id: "15",
    thumbnail: "/gallery/keychain_1.jpeg_1765902081143.jpg",
    title: "Toy Keychains",
    category: "keychains",
    description: "Playful toy keychains",
  },
  {
    id: "16",
    thumbnail: "/gallery/keychain3_1765902081144.jpg",
    title: "Photo Keychains",
    category: "keychains",
    description: "Custom lithophane photo keychains",
  },
  {
    id: "17",
    thumbnail: "/gallery/custom_keychain_acce_8abf48bf.jpg",
    title: "Logo Keychain",
    category: "keychains",
    description: "Branded keychain with company logo",
  },
  {
    id: "18",
    thumbnail: "/gallery/custom_keychain_acce_bbbfe2e4.jpg",
    title: "Custom Name Tag",
    category: "keychains",
    description: "Personalized name tag accessory",
  },
  {
    id: "19",
    thumbnail: "/gallery/custom2_1765902081142.jpg",
    title: "Photo Lithophane",
    category: "aerospace",
    description: "Personalized photo lithophane display",
  },
  {
    id: "20",
    thumbnail: "/gallery/custom1_1765902081141.jpg",
    title: "Custom Objects",
    category: "aerospace",
    description: "Unique 3D prints",
  },
  {
    id: "21",
    thumbnail: "/gallery/rocket_model_aerospa_8eac2326.jpg",
    title: "Rocket Model",
    category: "aerospace",
    description: "Detailed SpaceX Falcon 9 replica",
  },
  {
    id: "22",
    thumbnail: "/gallery/rocket_model_aerospa_70093925.jpg",
    title: "Satellite Model",
    category: "aerospace",
    description: "Educational satellite demonstration model",
  },
  {
    id: "23",
    thumbnail: "/gallery/rocket_model_aerospa_47650761.jpg",
    title: "Drone Frame",
    category: "aerospace",
    description: "Custom drone body frame",
  },
  {
    id: "24",
    thumbnail: "/gallery/rocket_model_aerospa_ecdcecfc.jpg",
    title: "Aircraft Model",
    category: "aerospace",
    description: "Detailed aircraft replica for display",
  },
  {
    id: "25",
    thumbnail: "/gallery/prototype1_1765902081145.jpg",
    title: "Robotic Arm",
    category: "prototypes",
    description: "Functional robotic arm prototype",
  },
  {
    id: "26",
    thumbnail: "/gallery/machine1_1765902081145.jpg",
    title: "Turbine Impeller",
    category: "prototypes",
    description: "Precision turbine impeller component",
  },
  {
    id: "27",
    thumbnail: "/gallery/machine2_1765902081145.jpg",
    title: "3D Printed Hardware",
    category: "prototypes",
    description: "Custom nuts and bolts prototypes",
  },
  {
    id: "28",
    thumbnail: "/gallery/machine3_1765902081145.webp",
    title: "Complex Assembly",
    category: "prototypes",
    description: "Industrial prototype assembly",
  },
  {
    id: "29",
    thumbnail: "/gallery/3d_printed_prototype_226a0e42.jpg",
    title: "Product Prototype",
    category: "prototypes",
    description: "Early-stage product development model",
  },
  {
    id: "30",
    thumbnail: "/gallery/3d_printed_prototype_05fe0223.jpg",
    title: "Mechanical Part",
    category: "prototypes",
    description: "Precision mechanical component",
  },
  {
    id: "31",
    thumbnail: "/gallery/3d_printed_sculpture_57614e42.jpg",
    title: "Abstract Sculpture",
    category: "artistic",
    description: "Modern abstract art piece",
  },
  {
    id: "32",
    thumbnail: "/gallery/3d_printed_sculpture_d5b89b46.jpg",
    title: "Character Figurine",
    category: "artistic",
    description: "Detailed character model",
  },
  {
    id: "33",
    thumbnail: "/gallery/3d_printed_sculpture_04157831.jpg",
    title: "Geometric Art",
    category: "artistic",
    description: "Mathematical art sculpture",
  },
  {
    id: "34",
    thumbnail: "/gallery/3d_printed_sculpture_1822b349.jpg",
    title: "Miniature Model",
    category: "artistic",
    description: "Detailed miniature for display",
  },
  {
    id: "35",
    thumbnail: "/gallery/3d_printed_sculpture_57614e42.jpg",
    title: "Artistic Bust",
    category: "artistic",
    description: "Classic bust sculpture design",
  },
  {
    id: "36",
    thumbnail: "/gallery/3d_printed_sculpture_d5b89b46.jpg",
    title: "Fantasy Figure",
    category: "artistic",
    description: "Detailed fantasy character sculpture",
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
