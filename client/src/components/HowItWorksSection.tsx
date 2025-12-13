import { motion } from "framer-motion";
import { Lightbulb, MessageSquare, Package } from "lucide-react";

const steps = [
  {
    icon: Lightbulb,
    number: "01",
    title: "Share Your Idea",
    description: "Send us your design files, sketches, or just describe your vision. We accept STL, OBJ, and most 3D formats.",
    color: "from-neon-cyan to-cyan-400",
  },
  {
    icon: MessageSquare,
    number: "02",
    title: "Get Instant Quote",
    description: "Receive a detailed quote on WhatsApp within hours. We'll discuss materials, finishes, and delivery options.",
    color: "from-neon-blue to-blue-400",
  },
  {
    icon: Package,
    number: "03",
    title: "We Print & Deliver",
    description: "Your project is printed with precision and shipped directly to your doorstep with tracking.",
    color: "from-neon-purple to-purple-400",
  },
];

export function HowItWorksSection() {
  return (
    <section id="how-it-works" className="py-24 relative overflow-hidden" data-testid="section-how-it-works">
      <div className="absolute inset-0">
        <div className="absolute top-1/2 left-0 w-1/2 h-px bg-gradient-to-r from-transparent via-neon-cyan/30 to-transparent" />
        <div className="absolute top-1/2 right-0 w-1/2 h-px bg-gradient-to-l from-transparent via-neon-blue/30 to-transparent" />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-neon-cyan text-sm font-medium tracking-wider uppercase mb-4 block">
            Simple Process
          </span>
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold mb-6">
            How It{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-neon-cyan to-neon-blue">
              Works
            </span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Three simple steps from idea to reality. We've streamlined the process to make 3D printing accessible to everyone.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
          {steps.map((step, index) => {
            const Icon = step.icon;
            return (
              <motion.div
                key={step.number}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className="relative"
                data-testid={`step-${index + 1}`}
              >
                <div className="relative text-center">
                  <motion.div
                    initial={{ scale: 0.8, opacity: 0 }}
                    whileInView={{ scale: 1, opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.2 + index * 0.2 }}
                    className="relative inline-flex mb-6"
                  >
                    <div className={`w-20 h-20 rounded-2xl bg-gradient-to-br ${step.color} p-5 shadow-neon`}>
                      <Icon className="w-full h-full text-background" />
                    </div>
                    <div className="absolute -top-2 -right-2 w-8 h-8 rounded-full bg-background border-2 border-neon-cyan flex items-center justify-center">
                      <span className="text-xs font-bold text-neon-cyan">{step.number}</span>
                    </div>
                  </motion.div>

                  <h3 className="font-display text-xl font-semibold mb-3 text-foreground">
                    {step.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {step.description}
                  </p>
                </div>

                {index < steps.length - 1 && (
                  <motion.div
                    initial={{ scaleX: 0 }}
                    whileInView={{ scaleX: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, delay: 0.5 + index * 0.2 }}
                    className="hidden md:block absolute top-10 left-[60%] w-[80%] h-0.5 bg-gradient-to-r from-neon-cyan/50 to-neon-blue/20 origin-left"
                  />
                )}
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
