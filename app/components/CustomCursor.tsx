"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useSpring } from "framer-motion";

export default function CustomCursor() {
  const cursorRef = useRef<HTMLDivElement>(null);
  const [isHovering, setIsHovering] = useState(false);
  const [isClicking, setIsClicking] = useState(false);

  const springConfig = { damping: 25, stiffness: 400, mass: 0.5 };
  const cursorX = useSpring(0, springConfig);
  const cursorY = useSpring(0, springConfig);
  const dotX = useSpring(0, { damping: 50, stiffness: 500, mass: 0.3 });
  const dotY = useSpring(0, { damping: 50, stiffness: 500, mass: 0.3 });

  useEffect(() => {
    document.body.classList.add("cursor-none");

    const handleMouseMove = (e: MouseEvent) => {
      cursorX.set(e.clientX);
      cursorY.set(e.clientY);
      dotX.set(e.clientX);
      dotY.set(e.clientY);
    };

    const handleMouseDown = () => setIsClicking(true);
    const handleMouseUp = () => setIsClicking(false);

    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      const isInteractive =
        target.tagName === "BUTTON" ||
        target.tagName === "A" ||
        target.tagName === "INPUT" ||
        target.tagName === "TEXTAREA" ||
        target.closest("button") ||
        target.closest("a") ||
        target.closest("[role='button']") ||
        target.classList.contains("cursor-pointer");
      setIsHovering(!!isInteractive);
    };

    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("mousedown", handleMouseDown);
    window.addEventListener("mouseup", handleMouseUp);
    window.addEventListener("mouseover", handleMouseOver);

    return () => {
      document.body.classList.remove("cursor-none");
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mousedown", handleMouseDown);
      window.removeEventListener("mouseup", handleMouseUp);
      window.removeEventListener("mouseover", handleMouseOver);
    };
  }, [cursorX, cursorY, dotX, dotY]);

  return (
    <>
      <motion.div
        ref={cursorRef}
        className="fixed top-0 left-0 pointer-events-none z-[9999] hidden md:block"
        style={{ x: cursorX, y: cursorY }}
        animate={{
          scale: isClicking ? 0.8 : isHovering ? 1.5 : 1,
          opacity: isClicking ? 0.8 : 1,
        }}
        transition={{ duration: 0.15 }}
      >
        <div
          className="relative -translate-x-1/2 -translate-y-1/2"
          style={{
            width: isHovering ? "40px" : "12px",
            height: isHovering ? "40px" : "12px",
          }}
        >
          <div
            className={`absolute inset-0 rounded-full border-2 transition-all duration-150 ${
              isHovering
                ? "border-neon-cyan bg-neon-cyan/10"
                : "border-neon-cyan"
            }`}
            style={{
              transform: isHovering ? "scale(1)" : "scale(1)",
            }}
          />
          {isHovering && (
            <motion.div
              className="absolute inset-0 rounded-full"
              initial={{ scale: 0, opacity: 1 }}
              animate={{ scale: 2, opacity: 0 }}
              transition={{ duration: 0.5 }}
              style={{
                background: "radial-gradient(circle, rgba(0, 212, 255, 0.3) 0%, transparent 70%)",
              }}
            />
          )}
        </div>
      </motion.div>

      <motion.div
        className="fixed top-0 left-0 w-2 h-2 bg-neon-cyan rounded-full pointer-events-none z-[9999] hidden md:block"
        style={{ x: dotX, y: dotY }}
        animate={{
          scale: isClicking ? 0.5 : 1,
        }}
        transition={{ duration: 0.1 }}
      />
    </>
  );
}
