import { motion } from "framer-motion";
import { MessageCircle, ArrowDown } from "lucide-react";
import { Button } from "@/components/ui/button";

const WHATSAPP_NUMBER = "916385444407";
const WHATSAPP_MESSAGE = encodeURIComponent(
  "Hi Spectra 3D Hub 👋\nI want a quote for 3D printing."
);

export function HeroSection() {
  const scrollToWork = () => {
    document.getElementById("gallery")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* ===== BACKGROUND IMAGE ===== */}
      <div className="absolute inset-0 z-0">
        <div
          className="w-full h-full bg-cover bg-center scale-105"
          style={{
            backgroundImage: "url('/hero-bg.jpg')",
          }}
        />

        {/* DARK OVERLAYS (important for bright image) */}
        <div className="absolute inset-0 bg-black/20" />
        <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/60 to-black/90" />
        <div className="absolute inset-0 bg-gradient-to-r from-neon-cyan/10 via-transparent to-neon-blue/10" />
      </div>

      {/* ===== GLOW ORBS ===== */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-neon-cyan/10 rounded-full blur-3xl animate-glow-pulse" />
        <div
          className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-neon-blue/10 rounded-full blur-3xl animate-glow-pulse"
          style={{ animationDelay: "1s" }}
        />
      </div>

      {/* ===== CONTENT ===== */}
      <div className="relative z-10 container mx-auto px-4 text-center">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9 }}
          className="max-w-4xl mx-auto"
        >
          {/* BADGE */}
          <span className="inline-block mb-6 px-4 py-2 rounded-full border border-neon-cyan/40 bg-neon-cyan/10 text-neon-cyan text-sm backdrop-blur">
            Premium 3D Printing Services
          </span>

          {/* TITLE */}
          <h1 className="font-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight mb-6">
            <span className="text-white">Spectra</span>{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-neon-cyan via-neon-blue to-neon-cyan animate-text-shimmer">
              3D Hub
            </span>
          </h1>

          {/* SUBTITLE */}
          <p className="text-lg sm:text-xl md:text-2xl text-gray-300 mb-4 max-w-2xl mx-auto">
            Turning ideas into high-quality 3D printed products
          </p>

          <p className="text-base sm:text-lg text-gray-400 mb-10 max-w-xl mx-auto">
            From custom prototypes to artistic prints, we bring your designs to
            life with precision engineering and modern materials.
          </p>

          {/* BUTTONS */}
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Button
              size="lg"
              className="bg-neon-cyan text-black font-semibold px-8 py-6 text-lg shadow-neon hover:scale-105 transition"
              asChild
            >
              <a
                href={`https://wa.me/${WHATSAPP_NUMBER}?text=${WHATSAPP_MESSAGE}`}
                target="_blank"
                rel="noopener noreferrer"
              >
                <MessageCircle className="mr-2 h-5 w-5" />
                Get Quote on WhatsApp
              </a>
            </Button>

            <Button
              size="lg"
              variant="outline"
              className="border-neon-cyan/40 text-white px-8 py-6 text-lg backdrop-blur hover:bg-white/5"
              onClick={scrollToWork}
            >
              Explore Our Work
              <ArrowDown className="ml-2 h-5 w-5" />
            </Button>
          </div>
        </motion.div>
      </div>

      {/* SCROLL INDICATOR */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 text-gray-400">
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
          className="flex flex-col items-center gap-2"
        >
          <span className="text-sm">Scroll to explore</span>
          <ArrowDown className="h-4 w-4" />
        </motion.div>
      </div>
    </section>
  );
}
