import { motion } from "framer-motion";
import { Target, Zap, Users, BadgeDollarSign, Atom } from "lucide-react";

const features = [
  {
    icon: Target,
    title: "High Precision Prints",
    description: "Layer accuracy down to 0.1mm for exceptional detail and finish quality.",
    gradient: "from-neon-cyan to-cyan-400",
  },
  {
    icon: Zap,
    title: "Fast Turnaround",
    description: "Quick production times without compromising on quality or attention to detail.",
    gradient: "from-yellow-400 to-orange-400",
  },
  {
    icon: Users,
    title: "Startup & Student Friendly",
    description: "Special pricing and support for students, startups, and educational projects.",
    gradient: "from-green-400 to-emerald-400",
  },
  {
    icon: BadgeDollarSign,
    title: "Affordable Pricing",
    description: "Competitive rates that make professional 3D printing accessible to everyone.",
    gradient: "from-neon-blue to-blue-400",
  },
  {
    icon: Atom,
    title: "Modern Materials",
    description: "Wide range of materials including PLA, ABS, PETG, TPU, and specialty filaments.",
    gradient: "from-neon-purple to-purple-400",
  },
];

function FeatureCard({ feature, index }: { feature: typeof features[0]; index: number }) {
  const Icon = feature.icon;

  return (
    <motion.div
      initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="group relative flex items-start gap-4 p-6 rounded-lg border border-border/50 bg-card/30 backdrop-blur-sm hover:border-neon-cyan/30 hover:bg-card/50 transition-all duration-300"
      data-testid={`feature-${index}`}
    >
      <div className={`flex-shrink-0 w-12 h-12 rounded-lg bg-gradient-to-br ${feature.gradient} p-3 shadow-lg group-hover:scale-110 transition-transform duration-300`}>
        <Icon className="w-full h-full text-background" />
      </div>
      
      <div>
        <h3 className="font-display text-lg font-semibold mb-2 text-foreground group-hover:text-neon-cyan transition-colors">
          {feature.title}
        </h3>
        <p className="text-muted-foreground text-sm leading-relaxed">
          {feature.description}
        </p>
      </div>

      <motion.div
        className="absolute bottom-0 left-0 h-0.5 bg-gradient-to-r from-neon-cyan/50 to-transparent"
        initial={{ width: 0 }}
        whileInView={{ width: "60%" }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.3 + index * 0.1 }}
      />
    </motion.div>
  );
}

export function WhyChooseSection() {
  return (
    <section id="why-choose" className="py-24 relative overflow-hidden" data-testid="section-why-choose">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[800px] bg-neon-cyan/5 rounded-full blur-3xl" />
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-neon-cyan text-sm font-medium tracking-wider uppercase mb-4 block">
            Why Us
          </span>
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold mb-6">
            Why Choose{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-neon-cyan to-neon-blue">
              Spectra 3D Hub
            </span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            We combine cutting-edge technology with exceptional service to deliver outstanding results every time.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {features.map((feature, index) => (
            <FeatureCard key={feature.title} feature={feature} index={index} />
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="mt-16 flex justify-center px-4"
        >
          <div className="flex flex-wrap justify-center items-center gap-6 sm:gap-8 px-6 sm:px-8 py-6 sm:py-4 rounded-2xl border border-neon-cyan/20 bg-card/50 backdrop-blur-sm">
            <div className="text-center min-w-[120px]">
              <div className="font-display text-3xl font-bold text-neon-cyan">500+</div>
              <div className="text-muted-foreground text-sm">Projects Completed</div>
            </div>
            <div className="hidden sm:block w-px h-12 bg-border" />
            <div className="text-center min-w-[120px]">
              <div className="font-display text-3xl font-bold text-neon-cyan">98%</div>
              <div className="text-muted-foreground text-sm">Client Satisfaction</div>
            </div>
            <div className="hidden sm:block w-px h-12 bg-border" />
            <div className="text-center min-w-[120px]">
              <div className="font-display text-3xl font-bold text-neon-cyan">24hr</div>
              <div className="text-muted-foreground text-sm">Quick Turnaround</div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
