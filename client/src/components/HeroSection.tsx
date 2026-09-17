import { motion } from "framer-motion";
import { ArrowDown, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";
import { WhatsAppQuoteDialog } from "./WhatsAppQuoteDialog";

export function HeroSection() {
  const scrollToWork = () => {
    document.getElementById("gallery")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col justify-start lg:justify-center overflow-hidden pt-20 pb-12 sm:pt-24 lg:py-0"
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
      <div className="relative z-10 container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-8 items-center min-h-0 lg:min-h-[calc(100vh-4rem)]">
          {/* LEFT: TEXT & ACTIONS */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.9 }}
            className="lg:col-span-6 text-left py-2 sm:py-6 lg:py-16"
          >
            {/* BADGE */}
            <span className="inline-block mb-3 sm:mb-6 px-3.5 py-1.5 sm:px-4 sm:py-2 rounded-full border border-neon-cyan/40 bg-neon-cyan/10 text-neon-cyan text-xs sm:text-sm backdrop-blur">
              Premium 3D Printing Services
            </span>

            {/* TITLE */}
            <h1 className="font-display text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight mb-3 sm:mb-6">
              <span className="text-white">Spectra</span>{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-neon-cyan via-neon-blue to-neon-cyan animate-text-shimmer">
                3D Hub
              </span>
            </h1>

            {/* SUBTITLE */}
            <p className="text-base sm:text-xl md:text-2xl text-gray-300 mb-3 sm:mb-4 max-w-2xl">
              Turning ideas into high-quality 3D printed products
            </p>

            <p className="text-sm sm:text-base md:text-lg text-gray-400 mb-6 sm:mb-10 max-w-xl">
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

          {/* RIGHT: FOUNDER IMAGE & LOCKED PROFILE CARD */}
          <div className="lg:col-span-6 flex justify-center lg:justify-end items-end self-center lg:self-end relative w-full mt-4 lg:mt-0">
            <div className="relative w-fit flex justify-center lg:justify-end items-end mx-auto lg:mr-0 lg:translate-x-12 xl:translate-x-20 2xl:translate-x-28">
              {/* Founder Portrait (Defines exact container bounds) */}
              <img
                src="/founderpic.png"
                alt="Dharunraj R - Founder & CEO"
                className="w-full max-w-[360px] sm:max-w-[460px] lg:max-w-[660px] xl:max-w-[760px] h-auto max-h-[52vh] sm:max-h-[64vh] lg:max-h-[92vh] object-contain object-bottom select-none block pointer-events-none"
              />

              {/* Founder Name Card (Aligned over Dharunraj's torso matching reference screenshot) */}
              <motion.a
                href="https://www.linkedin.com/in/dharunraj-r-843432328/"
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.3 }}
                className="absolute bottom-3 sm:bottom-5 lg:bottom-8 right-2 sm:right-4 lg:right-6 z-30 w-[84%] sm:w-[310px] md:w-[340px] lg:w-[360px] px-4 py-3 sm:px-5 sm:py-3.5 rounded-2xl bg-black/90 backdrop-blur-xl border border-fuchsia-500/60 shadow-[0_0_25px_rgba(217,70,239,0.2)] flex items-center justify-between gap-3 text-left transition-all duration-300 hover:scale-[1.02] hover:border-fuchsia-400 hover:shadow-[0_0_30px_rgba(217,70,239,0.35)] group cursor-pointer"
                aria-label="Connect with Dharunraj R on LinkedIn"
              >
                <div className="flex flex-col min-w-0">
                  <span className="text-[#38bdf8] text-xs sm:text-sm font-medium tracking-wide">
                    Founder & CEO
                  </span>
                  <h2 className="text-white text-base sm:text-lg md:text-xl font-black tracking-wider uppercase mt-0.5 leading-tight">
                    DHARUNRAJ R
                  </h2>
                  <span className="text-[#38bdf8] text-xs sm:text-sm font-normal mt-0.5">
                    Connect on Linkedin
                  </span>
                </div>

                <div className="shrink-0 flex items-center justify-center">
                  <ExternalLink
                    className="w-7 h-7 sm:w-8 sm:h-8 text-[#38bdf8] transition-transform duration-300 group-hover:scale-110 group-hover:text-sky-300"
                    strokeWidth={2.2}
                  />
                </div>
              </motion.a>
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
