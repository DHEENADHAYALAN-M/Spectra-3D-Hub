import { useEffect, useState, useRef } from "react";
import { motion, useSpring, useMotionValue } from "framer-motion";

export function CustomCursor() {
  const [isVisible, setIsVisible] = useState(false);
  const [isHoveringButton, setIsHoveringButton] = useState(false);
  const [isHoveringLink, setIsHoveringLink] = useState(false);
  const cursorX = useMotionValue(-100);
  const cursorY = useMotionValue(-100);
  const springConfig = { damping: 25, stiffness: 400 };
  const ringX = useSpring(cursorX, springConfig);
  const ringY = useSpring(cursorY, springConfig);
  const isMobileRef = useRef(false);

  useEffect(() => {
    isMobileRef.current = window.matchMedia("(max-width: 768px)").matches;
    if (isMobileRef.current) return;

    const moveCursor = (e: MouseEvent) => {
      cursorX.set(e.clientX);
      cursorY.set(e.clientY);
      setIsVisible(true);
    };

    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      const isButton = target.closest("button, [role='button'], .magnetic-button");
      const isLink = target.closest("a, [data-cursor='link']");
      
      setIsHoveringButton(!!isButton);
      setIsHoveringLink(!!isLink && !isButton);
    };

    const handleMouseLeave = () => {
      setIsVisible(false);
    };

    window.addEventListener("mousemove", moveCursor);
    window.addEventListener("mouseover", handleMouseOver);
    document.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      window.removeEventListener("mousemove", moveCursor);
      window.removeEventListener("mouseover", handleMouseOver);
      document.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, [cursorX, cursorY]);

  if (isMobileRef.current) return null;

  return (
    <>
      <motion.div
        className="fixed top-0 left-0 pointer-events-none z-[9999] mix-blend-difference"
        style={{
          x: cursorX,
          y: cursorY,
          translateX: "-50%",
          translateY: "-50%",
        }}
      >
        <motion.div
          className="rounded-full bg-neon-cyan"
          animate={{
            width: isHoveringButton ? 40 : isHoveringLink ? 20 : 8,
            height: isHoveringButton ? 40 : isHoveringLink ? 20 : 8,
            opacity: isVisible ? 1 : 0,
          }}
          transition={{ duration: 0.15 }}
          style={{
            boxShadow: "0 0 10px hsl(185 100% 50% / 0.8), 0 0 20px hsl(185 100% 50% / 0.4)",
          }}
        />
      </motion.div>
      <motion.div
        className="fixed top-0 left-0 pointer-events-none z-[9998]"
        style={{
          x: ringX,
          y: ringY,
          translateX: "-50%",
          translateY: "-50%",
        }}
      >
        <motion.div
          className="rounded-full border-2 border-neon-cyan/50"
          animate={{
            width: isHoveringButton ? 60 : isHoveringLink ? 40 : 32,
            height: isHoveringButton ? 60 : isHoveringLink ? 40 : 32,
            opacity: isVisible ? 0.6 : 0,
            borderColor: isHoveringLink 
              ? "hsl(210 100% 55% / 0.6)" 
              : "hsl(185 100% 50% / 0.5)",
          }}
          transition={{ duration: 0.2 }}
        />
      </motion.div>
    </>
  );
}
