"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform, useInView } from "framer-motion";
import { GraduationCap, Briefcase, Award, Building2, Calendar } from "lucide-react";
import { timelineSection, timelineItems, timelineTypeConfig, type TimelineItemType } from "../portfolioData";

const typeIconMap: Record<TimelineItemType, typeof GraduationCap> = {
  education: GraduationCap,
  work: Briefcase,
  certification: Award,
};

function TimelineCard({
  item,
  index,
  isInView,
}: {
  item: typeof timelineItems[0];
  index: number;
  isInView: boolean;
}) {
  const config = timelineTypeConfig[item.type];
  const Icon = typeIconMap[item.type];
  const isLeft = index % 2 === 0;

  return (
    <motion.div
      className={`relative flex items-start gap-4 md:gap-8 ${
        isLeft ? "md:flex-row" : "md:flex-row-reverse"
      }`}
      initial={{ opacity: 0, x: isLeft ? -40 : 40 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5, delay: index * 0.1, ease: [0.16, 1, 0.3, 1] }}
    >
      <div className={`flex-1 ${isLeft ? "md:text-right md:pr-8" : "md:pl-8 md:text-left"}`}>
        <article
          className={`p-4 md:p-6 rounded-2xl border backdrop-blur-sm transition-all duration-300 hover:scale-[1.02] ${
            config.borderColor
          } bg-gradient-to-br ${config.gradient} hover:shadow-lg`}
          style={{
            boxShadow: isInView ? `0 0 30px ${config.color}10` : "none",
          }}
        >
          <div className="flex items-center gap-2 mb-3">
            <Icon size={16} style={{ color: config.color }} aria-hidden="true" />
            <span className="text-xs font-medium uppercase tracking-wider" style={{ color: config.color }}>
              {item.type}
            </span>
          </div>

          <h3 className="text-base md:text-lg font-bold mb-1">{item.title}</h3>

          <div className="flex items-center gap-2 mb-2">
            <Building2 size={14} className="text-text-muted" aria-hidden="true" />
            <span className="text-sm font-medium" style={{ color: config.color }}>
              {item.organization}
            </span>
          </div>

          <div className="flex flex-wrap items-center gap-2 text-text-muted text-xs mb-3">
            <div className="flex items-center gap-1">
              <Calendar size={12} aria-hidden="true" />
              <span>{item.period}</span>
            </div>
            {item.location && (
              <span className="hidden xs:inline">•</span>
            )}
            {item.location && (
              <span className="hidden xs:inline">{item.location}</span>
            )}
          </div>

          <p className="text-sm text-text-secondary leading-relaxed mb-3">
            {item.description}
          </p>

          {item.highlights && (
            <div className="flex flex-wrap gap-2">
              {item.highlights.map((highlight) => (
                <span
                  key={highlight}
                  className="px-2 py-1 text-[10px] font-medium rounded-full bg-bg-secondary/50"
                >
                  {highlight}
                </span>
              ))}
            </div>
          )}
        </article>
      </div>

      <div
        className="flex-shrink-0 w-8 h-8 md:w-10 md:h-10 rounded-full flex items-center justify-center z-10 border-2 border-bg-primary"
        style={{ backgroundColor: config.color }}
        aria-hidden="true"
      >
        <Icon size={14} className="text-bg-primary md:hidden" />
        <Icon size={16} className="hidden md:block text-bg-primary" />
      </div>

      <div className="hidden md:block flex-1" />
    </motion.div>
  );
}

export default function Timeline() {
  const containerRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(containerRef, { once: true, margin: "-100px" });

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start 0.8", "end 0.2"],
  });

  const lineHeight = useTransform(scrollYProgress, [0, 0.8], ["0%", "100%"]);

  return (
    <section
      id={timelineSection.sectionId}
      className="py-16 md:py-24 lg:py-32 px-4 md:px-6"
      style={{ position: "relative" }}
      aria-labelledby="timeline-heading"
    >
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-bg-secondary/30 to-transparent" style={{ position: "absolute" }} />

      <div className="max-w-4xl mx-auto relative" style={{ position: "relative" }}>
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="mb-12 md:mb-16 text-center"
        >
          <span className="text-neon-cyan font-mono text-sm tracking-wider uppercase">
            {timelineSection.subtitle}
          </span>
          <h2 id="timeline-heading" className="text-3xl md:text-4xl lg:text-5xl font-bold mt-4">
            {timelineSection.title} <span className="text-gradient">{timelineSection.titleHighlight}</span>
          </h2>
          <p className="text-text-secondary mt-4 max-w-xl mx-auto">
            {timelineSection.description}
          </p>
        </motion.div>

        <div ref={containerRef} className="relative min-h-[400px]" style={{ position: "relative" }}>
          <div
            className="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 md:-translate-x-1/2 bg-bg-tertiary overflow-hidden rounded-full"
            aria-hidden="true"
          >
            <motion.div
              className="w-full bg-gradient-to-b from-neon-cyan via-neon-blue to-success rounded-full"
              style={{ height: lineHeight }}
            />
          </div>

          <div className="space-y-8 md:space-y-12 pl-12 md:pl-0">
            {timelineItems.map((item, index) => (
              <TimelineCard
                key={item.title + item.period}
                item={item}
                index={index}
                isInView={isInView}
              />
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: timelineItems.length * 0.1 + 0.3 }}
            className="absolute -bottom-4 left-4 md:left-1/2 w-8 h-8 md:w-10 md:h-10 rounded-full bg-gradient-to-br from-neon-cyan to-success transform md:-translate-x-1/2 flex items-center justify-center"
            aria-hidden="true"
          >
            <div className="w-3 h-3 md:w-4 md:h-4 rounded-full bg-bg-primary" />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
