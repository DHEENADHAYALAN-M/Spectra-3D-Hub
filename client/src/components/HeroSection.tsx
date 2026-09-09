import { motion } from "framer-motion";
import { ArrowDown, ArrowUpRight } from "lucide-react";
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
      <div className="relative z-10 container max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-12 pt-28 pb-12 lg:py-0">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-6 items-center min-h-[calc(100vh-4rem)]">
          {/* LEFT: TEXT & ACTIONS */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.9 }}
            className="lg:col-span-7 text-left py-8 lg:py-16"
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

          {/* RIGHT: FOUNDER IMAGE & PROFILE GLASS CARD */}
          <div className="lg:col-span-5 flex justify-center lg:justify-end items-end self-end relative">
            <div className="w-full relative flex justify-center lg:justify-end items-end lg:translate-x-8 xl:translate-x-16 -translate-y-4 lg:-translate-y-8">
              {/* Founder Image */}
              <img
                src="/founderpic.png"
                alt="Dharunraj R - Founder & CEO"
                className="w-full max-w-[440px] sm:max-w-[520px] lg:max-w-[640px] xl:max-w-[720px] max-h-[86vh] lg:max-h-[90vh] object-contain object-bottom select-none"
              />

              {/* Glassmorphic Founder Card */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="absolute bottom-6 sm:bottom-10 left-2 sm:left-auto sm:right-4 lg:right-8 z-30 max-w-[340px] sm:max-w-[370px] w-full"
              >
                <div className="p-4 sm:p-5 rounded-2xl sm:rounded-3xl bg-black/45 backdrop-blur-xl border border-white/20 shadow-2xl flex items-center justify-between gap-4 text-left transition-all duration-300 hover:border-neon-cyan/40 hover:bg-black/55 group">
                  <div className="flex flex-col">
                    <span className="text-xs font-medium text-neon-cyan/90 uppercase tracking-wider mb-1">
                      Founder & CEO
                    </span>
                    <h2 className="text-lg sm:text-xl font-bold text-white tracking-tight">
                      Dharunraj R
                    </h2>
                    <p className="text-xs sm:text-sm text-gray-300 mt-1 leading-snug">
                      Connect on LinkedIn & explore collaborations
                    </p>
                  </div>

                  {/* External Link Redirect Button */}
                  <a
                    href="https://www.linkedin.com/in/dharunraj-r-843432328/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-11 h-11 sm:w-12 sm:h-12 rounded-2xl bg-white text-black hover:bg-neon-cyan hover:text-black flex items-center justify-center shrink-0 shadow-lg transition-all duration-300 group-hover:scale-105"
                    aria-label="View Dharunraj R's LinkedIn Profile"
                  >
                    <ArrowUpRight className="w-5 h-5 sm:w-6 sm:h-6 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </a>
                </div>
              </motion.div>
            </div>
          </div>
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
