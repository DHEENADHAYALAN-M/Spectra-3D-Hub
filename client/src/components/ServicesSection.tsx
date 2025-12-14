import { motion } from "framer-motion";
import { Lightbulb, Lamp, Key, Rocket, Cpu, Palette } from "lucide-react";
import { useState } from "react";
import { GalleryCategory, serviceToCategoryMap } from "./galleryData";
import { GalleryModal } from "./GalleryModal";

const services = [
  {
    icon: Lightbulb,
    title: "Ambient Lighting",
    description: "Custom 3D printed lamps and lighting fixtures that transform any space with artistic illumination.",
    video: "https://cdn.coverr.co/videos/coverr-light-bulb-1636/1080p.mp4",
    color: "from-yellow-400 to-orange-500",
  },
  {
    icon: Lamp,
    title: "Table Lamps & Home Décor",
    description: "Elegant decorative pieces and functional home accessories crafted with precision.",
    video: "https://cdn.coverr.co/videos/coverr-interior-design-studio-2461/1080p.mp4",
    color: "from-pink-400 to-rose-500",
  },
  {
    icon: Key,
    title: "Custom Keychains & Accessories",
    description: "Personalized keychains, tags, and accessories for brands, events, or personal use.",
    video: "https://cdn.coverr.co/videos/coverr-3d-printed-objects-8318/1080p.mp4",
    color: "from-green-400 to-emerald-500",
  },
  {
    icon: Rocket,
    title: "Aerospace & Educational Models",
    description: "Detailed display models for aerospace, architecture, and educational demonstrations.",
    video: "https://cdn.coverr.co/videos/coverr-3d-printer-8571/1080p.mp4",
    color: "from-blue-400 to-indigo-500",
  },
  {
    icon: Cpu,
    title: "Hackathon & Startup Prototypes",
    description: "Rapid prototyping for startups, hackathons, and product development teams.",
    video: "https://cdn.coverr.co/videos/coverr-using-a-3d-printer-9582/1080p.mp4",
    color: "from-violet-400 to-purple-500",
  },
  {
    icon: Palette,
    title: "Statues & Artistic Prints",
    description: "Sculptures, figurines, and artistic creations that showcase creativity and craftsmanship.",
    video: "https://cdn.coverr.co/videos/coverr-artist-sculpture-3321/1080p.mp4",
    color: "from-cyan-400 to-teal-500",
  },
];

function ServiceCard({ 
  service, 
  index,
  onClick 
}: { 
  service: typeof services[0]; 
  index: number;
  onClick: () => void;
}) {
  const [isHovered, setIsHovered] = useState(false);
  const Icon = service.icon;

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="group relative cursor-pointer"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onClick={onClick}
      data-testid={`card-service-${index}`}
    >
      <div className="relative h-full rounded-lg border border-border/50 bg-card/50 backdrop-blur-sm overflow-hidden transition-all duration-300 hover:border-neon-cyan/50 hover:shadow-neon">
        <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
          {isHovered && (
            <video
              autoPlay
              loop
              muted
              playsInline
              className="w-full h-full object-cover opacity-20"
            >
              <source src={service.video} type="video/mp4" />
            </video>
          )}
          <div className="absolute inset-0 bg-gradient-to-t from-card via-card/80 to-transparent" />
        </div>

        <div className="relative z-10 p-6 flex flex-col h-full">
          <div className={`w-14 h-14 rounded-lg bg-gradient-to-br ${service.color} p-3 mb-4 transition-transform duration-300 group-hover:scale-110`}>
            <Icon className="w-full h-full text-white" />
          </div>

          <h3 className="font-display text-xl font-semibold mb-3 text-foreground group-hover:text-neon-cyan transition-colors">
            {service.title}
          </h3>

          <p className="text-muted-foreground text-sm leading-relaxed flex-grow">
            {service.description}
          </p>

          <div className="mt-4 pt-4 border-t border-border/30">
            <p className="text-neon-cyan text-xs font-medium opacity-0 group-hover:opacity-100 transition-opacity">
              Click to view gallery →
            </p>
            <motion.div
              initial={{ width: 0 }}
              whileInView={{ width: "100%" }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.3 + index * 0.1 }}
              className="h-0.5 bg-gradient-to-r from-neon-cyan/0 via-neon-cyan/50 to-neon-cyan/0"
            />
          </div>
        </div>

        <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-neon-cyan/10 to-transparent rounded-bl-full opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      </div>
    </motion.div>
  );
}

export function ServicesSection() {
  const [selectedCategory, setSelectedCategory] = useState<GalleryCategory | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleServiceClick = (serviceTitle: string) => {
    const category = serviceToCategoryMap[serviceTitle];
    if (category) {
      setSelectedCategory(category);
      setIsModalOpen(true);
    }
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setSelectedCategory(null);
  };

  return (
    <section id="services" className="py-24 relative" data-testid="section-services">
      <div className="absolute inset-0 bg-gradient-to-b from-background via-card/30 to-background" />
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-neon-cyan text-sm font-medium tracking-wider uppercase mb-4 block">
            What We Create
          </span>
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold mb-6">
            Our{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-neon-cyan to-neon-blue">
              Services
            </span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            From concept to creation, we specialize in bringing your ideas to life. Click any service to explore our work.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <ServiceCard 
              key={service.title} 
              service={service} 
              index={index}
              onClick={() => handleServiceClick(service.title)}
            />
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
