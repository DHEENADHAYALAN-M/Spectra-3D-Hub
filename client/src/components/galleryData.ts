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
    thumbnail: "/gallery/homedecor5.png",
    title: "Honeycomb Pendant",
    category: "home-decor",
    description: "Modern honeycomb geometric pattern pendant lamp",
  },
  {
    id: "12",
    thumbnail: "/gallery/homedecor6.png",
    title: "Spiral Cone Light",
    category: "home-decor",
    description: "Elegant spiral cone pendant with warm ambient glow",
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
    thumbnail: "/gallery/custom3.png",
    title: "Custom Phone Stand",
    category: "aerospace",
    description: "Personalized phone stand with name engraving",
  },
  {
    id: "22",
    thumbnail: "/gallery/custom4.png",
    title: "Custom Desk Organizer",
    category: "aerospace",
    description: "Personalized desk organizer with company logo",
  },
  {
    id: "23",
    thumbnail: "/gallery/custom5.png",
    title: "Custom Award Trophy",
    category: "aerospace",
    description: "Personalized award trophy with elegant design",
  },
  {
    id: "24",
    thumbnail: "/gallery/custom6.png",
    title: "Custom Photo Frame",
    category: "aerospace",
    description: "Decorative photo frame with intricate border",
  },
  {
    id: "25",
    thumbnail: "/gallery/machine1_1765902081145.jpg",
    title: "Turbine Impeller",
    category: "prototypes",
    description: "Precision turbine impeller component",
  },
  {
    id: "26",
    thumbnail: "/gallery/prototype1_1765902081145.jpg",
    title: "Robotic Arm",
    category: "prototypes",
    description: "Functional robotic arm prototype",
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
    thumbnail: "/gallery/prototype2_1765905477614.png",
    title: "Structural Design Model",
    category: "prototypes",
    description: "Complex lattice structure prototype design",
  },
  {
    id: "30",
    thumbnail: "/gallery/prototype3_1765905477614.jpg",
    title: "Jet Engine Cutaway",
    category: "prototypes",
    description: "Detailed jet engine cross-section model",
  },
  {
    id: "31",
    thumbnail: "/gallery/statue1_1765905223792.jpg",
    title: "Custom Portrait Bust",
    category: "artistic",
    description: "Personalized 3D printed portrait bust with name engraving",
  },
  {
    id: "32",
    thumbnail: "/gallery/statue2_1765905223795.jpg",
    title: "Realistic Self Portrait",
    category: "artistic",
    description: "Hyper-realistic colored bust sculpture",
  },
  {
    id: "33",
    thumbnail: "/gallery/statue3_1765905223797.jpg",
    title: "Full Body Figurine",
    category: "artistic",
    description: "Custom full-body 3D printed figurine",
  },
  {
    id: "34",
    thumbnail: "/gallery/statue4_1765905223799.jpg",
    title: "Historical Figures Collection",
    category: "artistic",
    description: "Hand-painted collection of iconic historical personalities",
  },
  {
    id: "35",
    thumbnail: "/gallery/statue5.png",
    title: "Greek Goddess Statue",
    category: "artistic",
    description: "Classical Greek goddess sculpture with marble-like finish",
  },
  {
    id: "36",
    thumbnail: "/gallery/statue6.png",
    title: "Dragon Sculpture",
    category: "artistic",
    description: "Detailed fantasy dragon figurine with bronze finish",
  },
];

export const serviceToCategoryMap: Record<string, GalleryCategory> = {
  "Ambient Lighting": "lighting",
  "Home Décor": "home-decor",
  "Custom Keychains & Accessories": "keychains",
  "Custom Models": "aerospace",
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
