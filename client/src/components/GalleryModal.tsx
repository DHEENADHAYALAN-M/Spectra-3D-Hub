import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";
import { GalleryCategory, GalleryItem, categoryLabels, getItemsByCategory } from "./galleryData";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";

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
    <Dialog open={isOpen} onOpenChange={(open) => !open && onClose()}>
      <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto border-neon-cyan/30 bg-background/95 backdrop-blur-xl">
        <DialogHeader>
          <DialogTitle className="text-2xl font-display flex items-center gap-2">
            <span className="text-neon-cyan">{categoryLabel}</span>
            <span className="text-muted-foreground text-sm font-normal">({items.length} items)</span>
          </DialogTitle>
        </DialogHeader>
        
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mt-4">
          <AnimatePresence>
            {items.map((item, index) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3, delay: index * 0.05 }}
                className="group relative aspect-square rounded-lg overflow-hidden cursor-pointer border border-border/50 hover:border-neon-cyan/50 transition-colors"
              >
                <img
                  src={item.thumbnail}
                  alt={item.title}
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                <div className="absolute bottom-0 left-0 right-0 p-3 translate-y-full group-hover:translate-y-0 transition-transform">
                  <h4 className="text-white font-semibold text-sm">{item.title}</h4>
                  {item.description && (
                    <p className="text-gray-300 text-xs mt-1 line-clamp-2">{item.description}</p>
                  )}
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </DialogContent>
    </Dialog>
  );
}
