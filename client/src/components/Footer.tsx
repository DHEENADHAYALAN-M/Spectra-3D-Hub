import { motion } from "framer-motion";
import { SiInstagram } from "react-icons/si";
import { Phone, MapPin, Mail } from "lucide-react";

export function Footer() {
  return (
    <footer className="py-12 relative border-t border-border/30" data-testid="section-footer">
      <div className="absolute inset-0 bg-gradient-to-t from-card/50 to-transparent" />
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h3 className="font-display text-2xl font-bold mb-4">
              <span className="text-foreground">Spectra</span>{" "}
              <span className="text-neon-cyan">3D Hub</span>
            </h3>
            <p className="text-muted-foreground text-sm leading-relaxed max-w-xs">
              Turning ideas into high-quality 3D printed products with precision engineering and modern materials.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <h4 className="font-semibold text-foreground mb-4">Quick Links</h4>
            <nav className="flex flex-col gap-2">
              <a
                href="#services"
                className="text-muted-foreground hover:text-neon-cyan transition-colors text-sm"
                data-cursor="link"
                data-testid="link-services"
              >
                Services
              </a>
              <a
                href="#how-it-works"
                className="text-muted-foreground hover:text-neon-cyan transition-colors text-sm"
                data-cursor="link"
                data-testid="link-how-it-works"
              >
                How It Works
              </a>
              <a
                href="#gallery"
                className="text-muted-foreground hover:text-neon-cyan transition-colors text-sm"
                data-cursor="link"
                data-testid="link-gallery"
              >
                Gallery
              </a>
              <a
                href="#why-choose"
                className="text-muted-foreground hover:text-neon-cyan transition-colors text-sm"
                data-cursor="link"
                data-testid="link-why-choose"
              >
                Why Choose Us
              </a>
            </nav>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h4 className="font-semibold text-foreground mb-4">Contact</h4>
            <div className="flex flex-col gap-3">
              <a
                href="tel:+916385444407"
                className="flex items-center gap-3 text-muted-foreground hover:text-neon-cyan transition-colors text-sm group"
                data-cursor="link"
                data-testid="link-phone"
              >
                <Phone className="w-4 h-4 group-hover:scale-110 transition-transform" />
                +91 6385444407
              </a>
              <a
                href="https://instagram.com/spectra_3d_hub"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-muted-foreground hover:text-neon-cyan transition-colors text-sm group"
                data-cursor="link"
                data-testid="link-instagram"
              >
                <SiInstagram className="w-4 h-4 group-hover:scale-110 transition-transform" />
                @spectra_3d_hub
              </a>
              <div className="flex items-center gap-3 text-muted-foreground text-sm">
                <MapPin className="w-4 h-4" />
                India
              </div>
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="pt-8 border-t border-border/30 flex flex-col sm:flex-row items-center justify-between gap-4"
        >
          <p className="text-muted-foreground text-sm">
            2024 Spectra 3D Hub. All rights reserved.
          </p>
          <p className="text-muted-foreground/60 text-xs">
            Precision Engineering • Innovation • Quality
          </p>
        </motion.div>
      </div>
    </footer>
  );
}
