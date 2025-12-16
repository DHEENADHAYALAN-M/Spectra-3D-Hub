import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";
import { GalleryCategory, categoryLabels, getItemsByCategory } from "./galleryData";

interface GalleryModalProps {
  category: GalleryCategory | null;
  isOpen: boolean;
  onClose: () => void;
}

export function GalleryModal({ category, isOpen, onClose }: GalleryModalProps) {
  if (!category) return null;

  const items = getItemsByCategory(category);
  const categoryLabel = categoryLabels[category];

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 bg-black/70 backdrop-blur-sm z-50"
            onClick={onClose}
          />
          
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            className="fixed inset-4 md:inset-8 lg:inset-12 z-50 flex items-center justify-center"
          >
            <div className="relative w-full max-w-4xl max-h-full bg-background/95 backdrop-blur-xl rounded-2xl border border-neon-cyan/30 shadow-2xl shadow-neon-cyan/10 overflow-hidden">
              <div className="sticky top-0 z-10 flex items-center justify-between p-6 border-b border-border/50 bg-background/95 backdrop-blur-xl">
                <h2 className="text-2xl font-display font-bold flex items-center gap-3">
                  <span className="text-neon-cyan">{categoryLabel}</span>
                  <span className="text-muted-foreground text-sm font-normal">({items.length} items)</span>
                </h2>
                <button
                  onClick={onClose}
                  className="p-2 rounded-full bg-muted/50 hover:bg-muted text-muted-foreground hover:text-foreground transition-colors"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>
              
              <div 
                className="p-6 overflow-y-auto max-h-[calc(100vh-12rem)]"
                style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
              >
                <style>{`
                  .gallery-scroll::-webkit-scrollbar {
                    display: none;
                  }
                `}</style>
                <div className="gallery-scroll grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                  {items.map((item, index) => (
                    <motion.div
                      key={item.id}
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 0.9 }}
                      transition={{ duration: 0.3, delay: index * 0.05 }}
                      className="group relative aspect-square rounded-xl overflow-hidden cursor-pointer border border-border/50 hover:border-neon-cyan/50 transition-all duration-300"
                    >
                      <img
                        src={item.thumbnail}
                        alt={item.title}
                        className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-[1.03]"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                      <div className="absolute bottom-0 left-0 right-0 p-4 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                        <h4 className="text-white font-semibold text-sm">{item.title}</h4>
                        {item.description && (
                          <p className="text-gray-300 text-xs mt-1 line-clamp-2">{item.description}</p>
                        )}
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
