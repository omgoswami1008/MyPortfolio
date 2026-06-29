"use client";

import { memo } from "react";
import { motion } from "framer-motion";
import { aboutSection, heroSection } from "../portfolioData";
import { Download } from "lucide-react";

const fadeUpVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0 },
};

const DataVisualizationSVG = memo(function DataVisualizationSVG() {
  return (
    <svg viewBox="0 0 200 200" className="w-full h-full opacity-60" aria-hidden="true">
      <defs>
        <linearGradient id="aboutGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" style={{ stopColor: "#00d4ff", stopOpacity: 1 }} />
          <stop offset="100%" style={{ stopColor: "#0099ff", stopOpacity: 1 }} />
        </linearGradient>
      </defs>
      {[20, 60, 100, 140, 180].map((y, i) => (
        <rect
          key={`bar-${i}`}
          x="20"
          y={y}
          width="40"
          height={Math.max(0, 160 - y)}
          fill="url(#aboutGrad)"
          opacity={0.3 + i * 0.15}
          rx="4"
        />
      ))}
      {[20, 60, 100, 140, 180].map((y, i) => (
        <circle
          key={`dot-${i}`}
          cx="120"
          cy={180 - i * 35}
          r="15"
          fill="url(#aboutGrad)"
          opacity={0.4 + i * 0.1}
        />
      ))}
      <path
        d="M 60 140 Q 90 100 120 120 T 180 80"
        fill="none"
        stroke="url(#aboutGrad)"
        strokeWidth="3"
        opacity="0.8"
      />
    </svg>
  );
});

function About() {
  return (
    <section id={aboutSection.sectionId} className="py-24 md:py-32 px-6">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          variants={fadeUpVariants}
          className="mb-16"
        >
          <span className="text-neon-cyan font-mono text-sm tracking-wider uppercase">
            {aboutSection.subtitle}
          </span>
          <h2 className="text-4xl md:text-5xl font-bold mt-4">
            {aboutSection.title} <span className="text-gradient">{aboutSection.titleHighlight}</span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            variants={fadeUpVariants}
            className="space-y-6"
          >
            {aboutSection.paragraphs.map((paragraph, i) => (
              <p key={i} className="text-text-secondary text-lg leading-relaxed">
                {paragraph}
              </p>
            ))}

            <div className="flex flex-wrap gap-4 pt-4">
              {aboutSection.traits.map((trait) => (
                <span
                  key={trait}
                  className="px-4 py-2 bg-bg-tertiary rounded-full text-sm text-text-primary border border-border-subtle"
                >
                  {trait}
                </span>
              ))}
            </div>

            <motion.a
              href={heroSection.ctaResume.resumeUrl}
              download
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
              className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-neon-cyan to-neon-blue text-bg-primary font-semibold rounded-full shadow-lg shadow-neon-cyan/20 hover:shadow-neon-cyan/40 transition-shadow mt-6"
            >
              <Download size={18} />
              {heroSection.ctaResume.text}
            </motion.a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="relative"
          >
            <div className="aspect-square max-w-md mx-auto relative">
              <div className="absolute inset-0 bg-gradient-to-br from-neon-cyan/20 to-neon-blue/20 rounded-3xl blur-3xl" />
              <div className="relative w-full h-full bg-bg-secondary rounded-3xl border border-border-subtle p-8 flex items-center justify-center overflow-hidden">
                <DataVisualizationSVG />
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

export default memo(About);
