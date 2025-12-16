import { motion } from "framer-motion";
import { useState } from "react";
import { GalleryCategory, categoryLabels, getFeaturedItems, GalleryItem } from "./galleryData";
import { GalleryModal } from "./GalleryModal";

function GalleryItemCard({ 
  item, 
  index, 
  onClick 
}: { 
  item: GalleryItem; 
  index: number;
  onClick: () => void;
}) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="group relative aspect-video rounded-lg overflow-hidden cursor-pointer"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onClick={onClick}
      data-testid={`gallery-item-${index}`}
    >
      <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent z-10" />
      
      <img
        src={item.thumbnail}
        alt={item.title}
        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
      />

      <div className="absolute inset-0 z-20 flex flex-col justify-end p-4">
        <motion.div
          initial={{ opacity: 0.8, y: 5 }}
          animate={{ opacity: isHovered ? 1 : 0.8, y: isHovered ? 0 : 5 }}
          transition={{ duration: 0.3 }}
        >
          <span className="text-neon-cyan text-xs font-medium uppercase tracking-wider">
            {categoryLabels[item.category]}
          </span>
          <h3 className="text-foreground font-semibold mt-1">{item.title}</h3>
          <p className="text-muted-foreground text-xs mt-1 opacity-0 group-hover:opacity-100 transition-opacity">
            Click to see more
          </p>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: isHovered ? 1 : 0 }}
        className="absolute inset-0 ring-2 ring-neon-cyan/50 rounded-lg z-0 shadow-neon"
      />
    </motion.div>
  );
}

export function GallerySection() {
  const [selectedCategory, setSelectedCategory] = useState<GalleryCategory | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  
  const featuredItems = getFeaturedItems();

  const handleItemClick = (category: GalleryCategory) => {
    setSelectedCategory(category);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setSelectedCategory(null);
  };

  return (
    <section id="gallery" className="py-24 relative" data-testid="section-gallery">
      <div className="absolute inset-0 bg-gradient-to-b from-background via-card/20 to-background" />
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-neon-cyan text-sm font-medium tracking-wider uppercase mb-4 block">
            Our Portfolio
          </span>
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold mb-6">
            Showcase{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-neon-cyan to-neon-blue">
              Gallery
            </span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Explore our latest projects and see the quality of our 3D printing craftsmanship. Click any category to see more.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {featuredItems.map((item, index) => (
            <div 
              key={item.id}
              id={item.category === "aerospace" ? "customized-products" : undefined}
            >
              <GalleryItemCard 
                item={item} 
                index={index}
                onClick={() => handleItemClick(item.category)}
              />
            </div>
          ))}
        </div>
      </div>

      <GalleryModal
        category={selectedCategory}
        isOpen={isModalOpen}
        onClose={handleCloseModal}
      />
    </section>
  );
}

export { GalleryModal };
export type { GalleryCategory };
