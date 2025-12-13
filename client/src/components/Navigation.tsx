import { motion, useScroll, useTransform } from "framer-motion";
import { Menu, X } from "lucide-react";
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";

const navLinks = [
  { href: "#services", label: "Services" },
  { href: "#how-it-works", label: "How It Works" },
  { href: "#gallery", label: "Gallery" },
  { href: "#why-choose", label: "Why Us" },
];

export function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const { scrollY } = useScroll();
  
  const navBackground = useTransform(
    scrollY,
    [0, 100],
    ["rgba(10, 12, 16, 0)", "rgba(10, 12, 16, 0.9)"]
  );

  const navBorder = useTransform(
    scrollY,
    [0, 100],
    ["rgba(0, 224, 224, 0)", "rgba(0, 224, 224, 0.1)"]
  );

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.header
      style={{
        backgroundColor: navBackground,
        borderColor: navBorder,
      }}
      className="fixed top-0 left-0 right-0 z-50 border-b backdrop-blur-md"
      data-testid="navigation"
    >
      <nav className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <motion.a
            href="#hero"
            className="font-display text-xl font-bold"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            data-testid="link-logo"
          >
            <span className="text-foreground">Spectra</span>{" "}
            <span className="text-neon-cyan">3D</span>
          </motion.a>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="hidden md:flex items-center gap-8"
          >
            {navLinks.map((link, index) => (
              <motion.a
                key={link.href}
                href={link.href}
                className="text-sm text-muted-foreground hover:text-neon-cyan transition-colors relative group"
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: 0.1 * index }}
                data-cursor="link"
                data-testid={`nav-${link.label.toLowerCase().replace(/\s+/g, '-')}`}
              >
                {link.label}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-neon-cyan transition-all duration-300 group-hover:w-full" />
              </motion.a>
            ))}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="hidden md:block"
          >
            <Button
              size="sm"
              className="magnetic-button bg-neon-cyan text-background font-medium"
              asChild
              data-testid="button-nav-quote"
            >
              <a
                href="#cta"
              >
                Get Quote
              </a>
            </Button>
          </motion.div>

          <Button
            variant="ghost"
            size="icon"
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            data-testid="button-mobile-menu"
          >
            {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </Button>
        </div>

        <motion.div
          initial={false}
          animate={{
            height: isMenuOpen ? "auto" : 0,
            opacity: isMenuOpen ? 1 : 0,
          }}
          className="md:hidden overflow-hidden"
        >
          <div className="py-4 flex flex-col gap-4">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-foreground hover:text-neon-cyan transition-colors py-2"
                onClick={() => setIsMenuOpen(false)}
                data-testid={`mobile-nav-${link.label.toLowerCase().replace(/\s+/g, '-')}`}
              >
                {link.label}
              </a>
            ))}
            <Button
              className="w-full bg-neon-cyan text-background font-medium mt-2"
              asChild
            >
              <a href="#cta" onClick={() => setIsMenuOpen(false)}>
                Get Quote
              </a>
            </Button>
          </div>
        </motion.div>
      </nav>
    </motion.header>
  );
}
