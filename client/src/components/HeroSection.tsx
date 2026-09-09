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
      <div className="relative z-10 container max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-12 pt-24 pb-16 lg:pt-0 lg:pb-0">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-6 items-center min-h-0 lg:min-h-[calc(100vh-4rem)]">
          {/* LEFT: TEXT & ACTIONS */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.9 }}
            className="lg:col-span-7 text-left py-4 sm:py-8 lg:py-16"
          >
            {/* BADGE */}
            <span className="inline-block mb-4 sm:mb-6 px-3.5 py-1.5 sm:px-4 sm:py-2 rounded-full border border-neon-cyan/40 bg-neon-cyan/10 text-neon-cyan text-xs sm:text-sm backdrop-blur">
              Premium 3D Printing Services
            </span>

            {/* TITLE */}
            <h1 className="font-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight mb-4 sm:mb-6">
              <span className="text-white">Spectra</span>{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-neon-cyan via-neon-blue to-neon-cyan animate-text-shimmer">
                3D Hub
              </span>
            </h1>

            {/* SUBTITLE */}
            <p className="text-base sm:text-xl md:text-2xl text-gray-300 mb-3 sm:mb-4 max-w-2xl">
              Turning ideas into high-quality 3D printed products
            </p>

            <p className="text-sm sm:text-base md:text-lg text-gray-400 mb-8 sm:mb-10 max-w-xl">
              From custom prototypes to artistic prints, we bring your designs to
              life with precision engineering and modern materials.
            </p>

            {/* BUTTONS */}
            <div className="flex flex-col sm:flex-row justify-start items-stretch sm:items-center gap-3.5 sm:gap-4">
              <WhatsAppQuoteDialog variant="hero" />

              <Button
                size="lg"
                variant="outline"
                className="border-neon-cyan/40 text-white px-6 sm:px-8 py-5 sm:py-6 text-base sm:text-lg backdrop-blur hover:bg-white/5"
                onClick={scrollToWork}
              >
                Explore Our Work
                <ArrowDown className="ml-2 h-4 w-4 sm:h-5 sm:w-5" />
              </Button>
            </div>
          </motion.div>

          {/* RIGHT: FOUNDER IMAGE & PROFILE GLASS CARD */}
          <div className="lg:col-span-5 flex justify-center lg:justify-end items-end self-center lg:self-end relative w-full mt-4 lg:mt-0">
            <div className="relative w-full max-w-[340px] sm:max-w-[460px] lg:max-w-[620px] xl:max-w-[700px] flex flex-col items-center lg:items-end justify-end mx-auto lg:mx-0">
              {/* Founder Image */}
              <img
                src="/founderpic.png"
                alt="Dharunraj R - Founder & CEO"
                className="w-full h-auto max-h-[52vh] sm:max-h-[62vh] lg:max-h-[90vh] object-contain object-bottom select-none"
              />

              {/* Glassmorphic Founder Card */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="absolute bottom-2 sm:bottom-6 lg:bottom-10 left-1/2 -translate-x-1/2 lg:left-auto lg:right-6 lg:translate-x-0 z-30 w-[94%] sm:w-[340px] md:w-[360px]"
              >
                <div className="p-3.5 sm:p-5 rounded-2xl sm:rounded-3xl bg-black/65 backdrop-blur-2xl border border-white/20 shadow-2xl flex items-center justify-between gap-3 sm:gap-4 text-left transition-all duration-300 hover:border-neon-cyan/40 hover:bg-black/80 group">
                  <div className="flex flex-col min-w-0">
                    <span className="text-[11px] sm:text-xs font-semibold text-neon-cyan uppercase tracking-wider mb-0.5 sm:mb-1">
                      Founder & CEO
                    </span>
                    <h2 className="text-base sm:text-xl font-bold text-white tracking-tight truncate">
                      DHARUNRAJ. R
                    </h2>
                    <p className="text-[11px] sm:text-sm text-gray-300 mt-0.5 sm:mt-1 leading-tight sm:leading-snug">
                      Connect on LinkedIn & explore collaborations
                    </p>
                  </div>

                  {/* External Link Redirect Button */}
                  <a
                    href="https://www.linkedin.com/in/dharunraj-r-843432328/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl sm:rounded-2xl bg-white text-black hover:bg-neon-cyan hover:text-black flex items-center justify-center shrink-0 shadow-lg transition-all duration-300 group-hover:scale-105"
                    aria-label="View Dharunraj R's LinkedIn Profile"
                  >
                    <ArrowUpRight className="w-4 h-4 sm:w-6 sm:h-6 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </a>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </div>

      {/* SCROLL INDICATOR (Desktop Only) */}
      <div className="hidden lg:flex absolute bottom-6 left-1/2 -translate-x-1/2 text-gray-400">
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
          className="flex flex-col items-center gap-1.5"
        >
          <span className="text-xs">Scroll to explore</span>
          <ArrowDown className="h-3.5 w-3.5" />
        </motion.div>
      </div>
    </section>
  );
}
