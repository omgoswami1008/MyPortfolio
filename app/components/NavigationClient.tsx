"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Download } from "lucide-react";
import type { NavLink } from "../portfolioData";

interface NavigationClientProps {
  navLinks: NavLink[];
  initials: string;
  resumeUrl: string;
}

export default function NavigationClient({ navLinks, initials, resumeUrl }: NavigationClientProps) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "glass py-4" : "py-6 bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        <a href="#" className="text-2xl font-bold text-gradient">
          {initials}
        </a>

        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-text-secondary hover:text-neon-cyan transition-colors text-sm font-medium"
            >
              {link.label}
            </a>
          ))}
          <a
            href={resumeUrl}
            download
            className="flex items-center gap-2 px-4 py-2 rounded-full bg-neon-cyan text-bg-primary text-sm font-semibold hover:shadow-lg hover:shadow-neon-cyan/30 transition-all"
          >
            <Download size={14} />
            Resume
          </a>
        </div>

        <button
          onClick={() => setMobileOpen(true)}
          className="md:hidden text-text-primary p-2"
          aria-label="Open menu"
        >
          <Menu size={24} />
        </button>
      </div>

      <AnimatePresence>
        {mobileOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setMobileOpen(false)}
              className="fixed inset-0 bg-bg-primary/80 backdrop-blur-sm md:hidden"
            />
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 25, stiffness: 200 }}
              className="fixed top-0 right-0 bottom-0 w-72 bg-bg-secondary border-l border-border-subtle p-8 md:hidden"
            >
              <button
                onClick={() => setMobileOpen(false)}
                className="absolute top-6 right-6 text-text-primary"
                aria-label="Close menu"
              >
                <X size={24} />
              </button>

              <div className="flex flex-col gap-6 mt-16">
                {navLinks.map((link, i) => (
                  <motion.a
                    key={link.href}
                    href={link.href}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.1 }}
                    onClick={() => setMobileOpen(false)}
                    className="text-text-secondary hover:text-neon-cyan transition-colors text-lg font-medium"
                  >
                    {link.label}
                  </motion.a>
                ))}
                <motion.a
                  href={resumeUrl}
                  download
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: navLinks.length * 0.1 }}
                  className="flex items-center gap-2 px-4 py-3 rounded-full bg-neon-cyan text-bg-primary text-lg font-semibold mt-2"
                >
                  <Download size={18} />
                  Download Resume
                </motion.a>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
