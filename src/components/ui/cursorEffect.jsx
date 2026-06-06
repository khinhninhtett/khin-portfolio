import { useEffect, useState } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

export default function CursorEffect() {
  const [isHovered, setIsHovered] = useState(false);
  const [isMoving, setIsMoving] = useState(false);

  // Raw physical cursor coordinates
  const mouseX = useMotionValue(-100);
  const mouseY = useMotionValue(-100);

  // Smooth elastic spring curves for the ambient aura
  const glowX = useSpring(mouseX, { damping: 35, stiffness: 100, mass: 0.6 });
  const glowY = useSpring(mouseY, { damping: 35, stiffness: 100, mass: 0.6 });

  useEffect(() => {
    let moveTimeout;

    const moveCursor = (e) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
      
      // Trigger subtle movement shape morphing
      setIsMoving(true);
      clearTimeout(moveTimeout);
      moveTimeout = setTimeout(() => setIsMoving(false), 150);
    };

    // Global interactive state listener to scale up fields when hovering clickable tags
    const handleMouseOver = (e) => {
      const target = e.target;
      if (
        target.tagName === "A" || 
        target.tagName === "BUTTON" || 
        target.closest("button") || 
        target.closest("a") ||
        target.classList.contains("work__card") ||
        target.closest(".work__card") ||
        target.closest(".about__box")
      ) {
        setIsHovered(true);
      } else {
        setIsHovered(false);
      }
    };

    window.addEventListener("mousemove", moveCursor);
    window.addEventListener("mouseover", handleMouseOver);

    return () => {
      window.removeEventListener("mousemove", moveCursor);
      window.removeEventListener("mouseover", handleMouseOver);
      clearTimeout(moveTimeout);
    };
  }, [mouseX, mouseY]);

  return (
    <div className="pointer-events-none fixed inset-0 z-30 hidden md:block overflow-hidden">
      {/* CORE HIGH-INTENSITY LIGHT MATRIX */}
      <motion.div
        className="absolute top-0 left-0 w-[600px] h-[600px] mix-blend-screen opacity-85 will-change-transform"
        style={{
          x: glowX,
          y: glowY,
          translateX: "-50%",
          translateY: "-50%",
        }}
        animate={{
          scale: isHovered ? 1.25 : isMoving ? 1.1 : 1,
          // Fluid organic morphing effect based on behavior states
          borderRadius: isMoving ? "42% 58% 70% 30% / 45% 45% 55% 55%" : "50%",
          rotate: isMoving ? 45 : 0
        }}
        transition={{ 
          type: "spring", 
          stiffness: 120, 
          damping: 22,
          borderRadius: { duration: 0.5, ease: "easeInOut" },
          rotate: { duration: 0.8, ease: "easeOut" }
        }}
      >
        {/* Deep Multi-Layered Premium Aurora Gradient Blur */}
        <div 
          className="w-full h-full bg-[radial-gradient(circle,rgba(244,63,94,0.16)_0%,rgba(168,85,247,0.08)_25%,rgba(6,182,212,0.04)_50%,transparent_70%)] filter blur-3xl" 
        />
      </motion.div>

      {/* HIGHLIGHT CORE - Adds a micro neon color accent center right beneath the normal cursor position */}
      <motion.div
        className="absolute top-0 left-0 w-[150px] h-[150px] mix-blend-screen opacity-40"
        style={{
          x: glowX,
          y: glowY,
          translateX: "-50%",
          translateY: "-50%",
        }}
        animate={{
          scale: isHovered ? 1.5 : 1,
        }}
        transition={{ type: "spring", stiffness: 200, damping: 28 }}
      >
        <div 
          className="w-full h-full bg-[radial-gradient(circle,rgba(6,182,212,0.25)_0%,transparent_60%)] filter blur-xl" 
        />
      </motion.div>
    </div>
  );
}