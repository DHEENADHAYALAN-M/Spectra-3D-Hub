import { motion } from "framer-motion";
import { ArrowDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { WhatsAppQuoteDialog } from "./WhatsAppQuoteDialog";

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
        <div className="absolute inset-0 bg-black/0" />
        <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/60 to-black/90" />
        <div className="absolute inset-0 bg-gradient-to-r from-neon-cyan/10 via-transparent to-neon-blue/10" />
      </div>

        

      {/* ===== CONTENT ===== */}
      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-0">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* LEFT: TEXT & ACTIONS */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.9 }}
            className="lg:col-span-7 text-left"
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
            <p className="text-lg sm:text-xl md:text-2xl text-gray-300 mb-4 max-w-2xl">
              Turning ideas into high-quality 3D printed products
            </p>

            <p className="text-base sm:text-lg text-gray-400 mb-10 max-w-xl">
              From custom prototypes to artistic prints, we bring your designs to
              life with precision engineering and modern materials.
            </p>

            {/* BUTTONS */}
            <div className="flex flex-col sm:flex-row justify-start items-stretch sm:items-center gap-4">
              <WhatsAppQuoteDialog variant="hero" />

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

          {/* RIGHT: FOUNDER IMAGE */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 30 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="lg:col-span-5 flex justify-center lg:justify-end relative"
          >
            <div className="relative max-w-md w-full flex justify-center items-center">
              {/* Radial Neon Glow Behind Founder */}
              <div className="absolute w-72 h-72 sm:w-96 sm:h-96 rounded-full bg-gradient-to-tr from-neon-cyan/30 via-neon-blue/20 to-purple-600/20 blur-3xl -z-10 animate-pulse pointer-events-none" />

              {/* Founder Image with gentle floating animation */}
              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                className="relative z-10 w-full max-w-[320px] sm:max-w-[380px] lg:max-w-[420px] flex justify-center"
              >
                <img
                  src="/founderpic.png"
                  alt="Spectra 3D Hub Founder"
                  className="w-full h-auto object-contain drop-shadow-[0_20px_35px_rgba(0,242,254,0.3)] select-none pointer-events-none"
                />
              </motion.div>
            </div>
          </motion.div>
        </div>
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
