"use client";

import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { heroSection } from "../portfolioData";

export default function Hero() {
  const scrollToWork = () => {
    const targetId = heroSection.ctaPrimary.scrollTo || "projects";
    document.getElementById(targetId)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center px-6">
      <div className="max-w-4xl mx-auto text-center">
        <div className="overflow-hidden mb-6">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-neon-cyan font-mono text-sm tracking-widest uppercase"
          >
            {heroSection.words.length > 0 ? heroSection.words[0].split(" ").length > 1 
              ? heroSection.words.slice(0, 2).join(" ") 
              : "Welcome" : "Welcome"}
          </motion.p>
        </div>

        <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold mb-8 leading-tight">
          {heroSection.words.map((word, i) => (
            <span key={i} className="inline-block mr-4 overflow-hidden">
              <motion.span
                initial={{ y: "100%" }}
                animate={{ y: 0 }}
                transition={{
                  duration: 0.8,
                  delay: 0.4 + i * 0.15,
                  ease: [0.16, 1, 0.3, 1],
                }}
                className="inline-block"
              >
                {i === heroSection.highlightWordIndex ? (
                  <span className="text-gradient">{word}</span>
                ) : (
                  <span className="text-text-primary">{word}</span>
                )}
              </motion.span>
            </span>
          ))}
        </h1>

        <div className="overflow-hidden mb-12">
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1 }}
            className="text-text-secondary text-lg md:text-xl max-w-2xl mx-auto leading-relaxed"
          >
            {heroSection.words.length === 3 
              ? "Transforming complex data into actionable insights through machine learning, statistical analysis, and elegant code solutions."
              : "Building innovative solutions with data and code."}
          </motion.p>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1.2 }}
          className="flex flex-col sm:flex-row gap-4 justify-center items-center"
        >
          <motion.button
            onClick={scrollToWork}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.98 }}
            className="group relative px-8 py-4 bg-neon-cyan text-bg-primary font-semibold rounded-full glow-cyan transition-shadow hover:glow-cyan-strong"
          >
            <span className="relative z-10 flex items-center gap-2">
              {heroSection.ctaPrimary.text}
              <motion.span
                animate={{ y: [0, 4, 0] }}
                transition={{ duration: 1.5, repeat: Infinity }}
              >
                <ChevronDown size={20} />
              </motion.span>
            </span>
          </motion.button>

          <motion.a
            href={heroSection.ctaSecondary.href}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.98 }}
            className="px-8 py-4 border border-border-subtle rounded-full text-text-primary font-semibold hover:border-neon-cyan hover:text-neon-cyan transition-colors"
          >
            {heroSection.ctaSecondary.text}
          </motion.a>

          <motion.a
            href={heroSection.ctaResume.resumeUrl}
            download
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.98 }}
            className="px-8 py-4 border border-neon-cyan/30 rounded-full text-neon-cyan font-semibold hover:bg-neon-cyan/10 hover:border-neon-cyan transition-colors flex items-center gap-2"
          >
            {heroSection.ctaResume.text}
          </motion.a>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
        className="absolute bottom-12 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="w-6 h-10 border-2 border-border-subtle rounded-full flex justify-center"
        >
          <motion.div
            animate={{ height: [8, 16, 8] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="w-1.5 bg-neon-cyan rounded-full mt-2"
          />
        </motion.div>
      </motion.div>
    </section>
  );
}
