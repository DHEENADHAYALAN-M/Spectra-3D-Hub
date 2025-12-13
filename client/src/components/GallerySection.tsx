import { motion } from "framer-motion";
import { useState } from "react";

const galleryItems = [
  {
    video: "https://cdn.coverr.co/videos/coverr-3d-printer-printing-9583/1080p.mp4",
    thumbnail: "https://images.unsplash.com/photo-1581092160607-ee22621dd758?w=600&q=80",
    title: "High-Precision Print",
    category: "Prototype",
  },
  {
    video: "https://cdn.coverr.co/videos/coverr-using-a-3d-printer-9582/1080p.mp4",
    thumbnail: "https://images.unsplash.com/photo-1581092795360-fd1ca04f0952?w=600&q=80",
    title: "Custom Design",
    category: "Production",
  },
  {
    video: "https://cdn.coverr.co/videos/coverr-3d-printer-8571/1080p.mp4",
    thumbnail: "https://images.unsplash.com/photo-1618365908648-e71bd5716cba?w=600&q=80",
    title: "Detail Work",
    category: "Artistic",
  },
  {
    video: "https://cdn.coverr.co/videos/coverr-3d-printed-objects-8318/1080p.mp4",
    thumbnail: "https://images.unsplash.com/photo-1563725911583-7b4e6a4c7e09?w=600&q=80",
    title: "Finished Products",
    category: "Showcase",
  },
  {
    video: "https://cdn.coverr.co/videos/coverr-3d-printing-process-3318/1080p.mp4",
    thumbnail: "https://images.unsplash.com/photo-1611532736597-de2d4265fba3?w=600&q=80",
    title: "Layer by Layer",
    category: "Process",
  },
  {
    video: "https://cdn.coverr.co/videos/coverr-engineer-working-7589/1080p.mp4",
    thumbnail: "https://images.unsplash.com/photo-1581092162384-8987c1d64718?w=600&q=80",
    title: "Quality Control",
    category: "Engineering",
  },
];

function GalleryItem({ item, index }: { item: typeof galleryItems[0]; index: number }) {
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
      data-testid={`gallery-item-${index}`}
    >
      <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent z-10" />
      
      <video
        autoPlay
        loop
        muted
        playsInline
        poster={item.thumbnail}
        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
      >
        <source src={item.video} type="video/mp4" />
      </video>

      <div className="absolute inset-0 z-20 flex flex-col justify-end p-4">
        <motion.div
          initial={{ opacity: 0.8, y: 5 }}
          animate={{ opacity: isHovered ? 1 : 0.8, y: isHovered ? 0 : 5 }}
          transition={{ duration: 0.3 }}
        >
          <span className="text-neon-cyan text-xs font-medium uppercase tracking-wider">
            {item.category}
          </span>
          <h3 className="text-foreground font-semibold mt-1">{item.title}</h3>
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
            Explore our latest projects and see the quality of our 3D printing craftsmanship.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {galleryItems.map((item, index) => (
            <GalleryItem key={index} item={item} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
