"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence, LayoutGroup } from "framer-motion";
import {
  X,
  ExternalLink,
  TrendingUp,
  Crosshair,
  Sparkles,
  Globe,
} from "lucide-react";
import {
  projects,
  projectCategories,
  projectsSection,
  type Project,
  type ProjectCategory,
} from "../portfolioData";
import { getIcon } from "./icons";

function AnimatedChart({ type, color }: { type: string; color: string }) {
  const [animated, setAnimated] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setAnimated(true), 300);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="h-36 relative overflow-hidden rounded-xl bg-bg-secondary/50">
      <div className="absolute inset-0 bg-gradient-to-br from-transparent to-bg-primary/50" />
      
      <svg viewBox="0 0 200 120" className="w-full h-full">
        <defs>
          <linearGradient id={`grad-${color.replace("#", "")}`} x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor={color} stopOpacity="0.8" />
            <stop offset="100%" stopColor={color} stopOpacity="0.4" />
          </linearGradient>
          <linearGradient id={`fill-${color.replace("#", "")}`} x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor={color} stopOpacity="0.3" />
            <stop offset="100%" stopColor={color} stopOpacity="0" />
          </linearGradient>
        </defs>

        {type === "bar" && (
          <>
            {[20, 45, 35, 60, 50, 75, 65, 85].map((h, i) => (
              <motion.rect
                key={i}
                x={10 + i * 22}
                y={animated ? 100 - h : 100}
                width="16"
                height={animated ? h : 0}
                rx="3"
                fill={color}
                opacity={0.7 + (i % 3) * 0.1}
                transition={{ duration: 0.6, delay: i * 0.08, ease: [0.16, 1, 0.3, 1] }}
              />
            ))}
          </>
        )}

        {type === "line" && (
          <>
            <motion.path
              d="M 10 90 Q 30 70 50 75 T 90 55 T 130 40 T 170 25 L 190 15"
              fill="none"
              stroke={color}
              strokeWidth="3"
              strokeLinecap="round"
              initial={{ pathLength: 0 }}
              animate={{ pathLength: animated ? 1 : 0 }}
              transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
            />
            <motion.path
              d="M 10 90 Q 30 70 50 75 T 90 55 T 130 40 T 170 25 L 190 15 L 190 110 L 10 110 Z"
              fill={`url(#fill-${color.replace("#", "")})`}
              initial={{ opacity: 0 }}
              animate={{ opacity: animated ? 1 : 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
            />
            {[[10, 90], [50, 75], [90, 55], [130, 40], [170, 25], [190, 15]].map(([x, y], i) => (
              <motion.circle
                key={i}
                cx={x}
                cy={y}
                r="4"
                fill={color}
                initial={{ scale: 0, opacity: 0 }}
                animate={{ scale: animated ? 1 : 0, opacity: animated ? 1 : 0 }}
                transition={{ duration: 0.3, delay: 0.6 + i * 0.1 }}
              />
            ))}
          </>
        )}

        {type === "scatter" && (
          <>
            {[
              [25, 85, 5],
              [40, 70, 8],
              [55, 90, 6],
              [75, 55, 10],
              [95, 40, 7],
              [115, 65, 9],
              [140, 30, 11],
              [160, 50, 6],
              [180, 25, 8],
            ].map(([x, y, r], i) => (
              <motion.circle
                key={i}
                cx={x}
                cy={y}
                r={r}
                fill={color}
                opacity={0.5 + (i % 3) * 0.15}
                initial={{ scale: 0, opacity: 0 }}
                animate={{ scale: animated ? 1 : 0, opacity: animated ? 1 : 0 }}
                transition={{ duration: 0.4, delay: i * 0.06, ease: [0.16, 1, 0.3, 1] }}
              />
            ))}
          </>
        )}

        {type === "area" && (
          <>
            <motion.path
              d="M 10 100 L 10 80 Q 40 60 60 70 T 100 50 T 140 35 T 180 20 L 190 15 L 190 100 Z"
              fill={`url(#fill-${color.replace("#", "")})`}
              initial={{ opacity: 0 }}
              animate={{ opacity: animated ? 1 : 0 }}
              transition={{ duration: 1, delay: 0.3 }}
            />
            <motion.path
              d="M 10 80 Q 40 60 60 70 T 100 50 T 140 35 T 180 20 L 190 15"
              fill="none"
              stroke={color}
              strokeWidth="2.5"
              initial={{ pathLength: 0 }}
              animate={{ pathLength: animated ? 1 : 0 }}
              transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
            />
          </>
        )}

        {type === "pie" && (
          <>
            {[0, 72, 144, 216, 288].map((angle, i) => (
              <motion.path
                key={i}
                d={`M 100 60 L 100 10 A 50 50 0 0 1 ${100 + 50 * Math.cos((angle - 30) * Math.PI / 180)} ${60 + 50 * Math.sin((angle - 30) * Math.PI / 180)} Z`}
                fill={color}
                opacity={0.4 + i * 0.15}
                initial={{ scale: 0, rotate: -90 }}
                animate={{ scale: animated ? 1 : 0, rotate: animated ? 0 : -90 }}
                transition={{ duration: 0.5, delay: i * 0.1, ease: [0.16, 1, 0.3, 1] }}
                style={{ transformOrigin: "100px 60px" }}
              />
            ))}
            <circle cx="100" cy="60" r="25" fill="var(--color-bg-secondary)" />
          </>
        )}
      </svg>

      <motion.div
        className="absolute bottom-3 right-3 text-xs font-mono"
        style={{ color }}
        initial={{ opacity: 0 }}
        animate={{ opacity: animated ? 0.6 : 0 }}
        transition={{ delay: 1 }}
      >
        LIVE
      </motion.div>
    </div>
  );
}

function ProjectCard({
  project,
  onClick,
}: {
  project: Project;
  onClick: () => void;
}) {
  const [tagsVisible, setTagsVisible] = useState(false);

  return (
    <motion.article
      layout
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.9 }}
      transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
      whileHover={{ y: -6, transition: { duration: 0.2 } }}
      onHoverStart={() => setTagsVisible(true)}
      onHoverEnd={() => setTagsVisible(false)}
      onClick={onClick}
      className="group relative cursor-pointer"
    >
      <div className="relative rounded-2xl overflow-hidden">
        <div
          className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"
          style={{
            background: `radial-gradient(circle at 50% 0%, ${project.color}20 0%, transparent 50%)`,
          }}
        />
        
        <div
          className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"
          style={{
            boxShadow: `inset 0 0 0 1px ${project.color}40`,
          }}
        />

        <div className="glass rounded-2xl p-5 h-full">
          <div className="relative">
            <AnimatedChart type={project.vizType} color={project.color} />
            
            <AnimatePresence>
              {tagsVisible && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 10 }}
                  className="absolute -top-2 left-4 flex flex-wrap gap-1.5"
                >
                  {project.dataTags.slice(0, 2).map((tag, i) => (
                    <motion.span
                      key={tag}
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 0.8 }}
                      transition={{ delay: i * 0.05 }}
                      className="px-2 py-0.5 text-[10px] font-medium rounded-full backdrop-blur-md"
                      style={{
                        backgroundColor: `${project.color}30`,
                        color: project.color,
                        border: `1px solid ${project.color}50`,
                      }}
                    >
                      {tag}
                    </motion.span>
                  ))}
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          <div className="mt-4">
            <div className="flex items-start justify-between gap-2 mb-2">
              <h3 className="text-lg font-semibold leading-tight group-hover:text-white transition-colors">
                {project.title}
              </h3>
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                whileHover={{ scale: 1.1 }}
                className="p-1.5 rounded-lg bg-bg-secondary/50 group-hover:bg-white/10 transition-colors"
              >
                <ExternalLink size={14} className="text-text-muted group-hover:text-white" />
              </motion.div>
            </div>

            <p className="text-text-muted text-sm leading-relaxed line-clamp-2 mb-4">
              {project.description}
            </p>

            <div className="flex items-center gap-3 mb-4">
              <div
                className="text-2xl font-bold"
                style={{ color: project.color }}
              >
                {project.metric}
              </div>
              <div className="text-sm text-text-muted">{project.metricLabel}</div>
            </div>

            <div className="flex gap-1.5">
              {project.tools.slice(0, 3).map((tool) => {
                const Icon = getIcon(tool.icon);
                return (
                  <div
                    key={tool.name}
                    className="p-2 rounded-lg bg-bg-secondary/50 group-hover:bg-white/5 transition-colors"
                    title={tool.name}
                  >
                    <Icon size={14} className="text-text-muted" />
                  </div>
                );
              })}
              {project.tools.length > 3 && (
                <div className="p-2 rounded-lg bg-bg-secondary/50 text-text-muted text-xs flex items-center">
                  +{project.tools.length - 3}
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </motion.article>
  );
}

function ProjectModal({
  project,
  onClose,
}: {
  project: Project;
  onClose: () => void;
}) {
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    document.addEventListener("keydown", handleEscape);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", handleEscape);
      document.body.style.overflow = "";
    };
  }, [onClose]);

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={onClose}
        className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-bg-primary/80 backdrop-blur-sm"
      >
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
          onClick={(e) => e.stopPropagation()}
          className="w-full max-w-2xl max-h-[90vh] overflow-y-auto glass rounded-3xl"
        >
          <div className="sticky top-0 z-10 flex items-center justify-between p-6 border-b border-border-subtle bg-bg-secondary/80 backdrop-blur-xl rounded-t-3xl">
            <h2 className="text-xl font-bold">{project.title}</h2>
            <motion.button
              whileHover={{ scale: 1.1, rotate: 90 }}
              whileTap={{ scale: 0.9 }}
              onClick={onClose}
              className="p-2 rounded-lg hover:bg-white/10 transition-colors"
              aria-label="Close modal"
            >
              <X size={20} />
            </motion.button>
          </div>

          <div className="p-6 space-y-6">
            <AnimatedChart type={project.vizType} color={project.color} />

            <div className="flex flex-wrap gap-2">
              {project.dataTags.map((tag) => (
                <span
                  key={tag}
                  className="px-3 py-1 text-xs font-medium rounded-full"
                  style={{
                    backgroundColor: `${project.color}20`,
                    color: project.color,
                    border: `1px solid ${project.color}40`,
                  }}
                >
                  {tag}
                </span>
              ))}
            </div>

            <div className="grid md:grid-cols-2 gap-4">
              <div className="p-4 rounded-xl bg-bg-tertiary/50 border border-border-subtle">
                <div className="flex items-center gap-2 mb-2">
                  <Crosshair size={16} style={{ color: project.color }} />
                  <h4 className="font-semibold text-sm">The Problem</h4>
                </div>
                <p className="text-sm text-text-secondary leading-relaxed">
                  {project.problem}
                </p>
              </div>

              <div className="p-4 rounded-xl bg-bg-tertiary/50 border border-border-subtle">
                <div className="flex items-center gap-2 mb-2">
                  <Sparkles size={16} style={{ color: project.color }} />
                  <h4 className="font-semibold text-sm">The Solution</h4>
                </div>
                <p className="text-sm text-text-secondary leading-relaxed">
                  {project.solution}
                </p>
              </div>
            </div>

            <div>
              <h4 className="font-semibold text-sm mb-3 flex items-center gap-2">
                <Globe size={14} className="text-neon-cyan" />
                Tools & Technologies
              </h4>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                {project.tools.map((tool) => {
                  const Icon = getIcon(tool.icon);
                  return (
                    <div
                      key={tool.name}
                      className="flex items-center gap-2 p-3 rounded-xl bg-bg-tertiary/50 border border-border-subtle hover:border-white/20 transition-colors"
                    >
                      <div
                        className="p-1.5 rounded-lg"
                        style={{ backgroundColor: `${project.color}20` }}
                      >
                        <Icon size={14} style={{ color: project.color }} />
                      </div>
                      <span className="text-sm font-medium">{tool.name}</span>
                    </div>
                  );
                })}
              </div>
            </div>

            <div className="flex items-center justify-between pt-4 border-t border-border-subtle">
              <div className="flex items-center gap-3">
                <TrendingUp size={18} style={{ color: project.color }} />
                <div>
                  <div className="text-2xl font-bold" style={{ color: project.color }}>
                    {project.metric}
                  </div>
                  <div className="text-xs text-text-muted">{project.metricLabel}</div>
                </div>
              </div>

              {project.githubUrl && (
                <motion.a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="flex items-center gap-2 px-5 py-2.5 rounded-xl font-medium text-sm transition-colors"
                  style={{
                    backgroundColor: project.color,
                    color: "#0a0a0f",
                  }}
                >
                  <Globe size={16} />
                  View on GitHub
                </motion.a>
              )}
            </div>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}

export default function Projects() {
  const [activeCategory, setActiveCategory] = useState<ProjectCategory>("all");
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const filteredProjects =
    activeCategory === "all"
      ? projects
      : projects.filter((p) => p.category === activeCategory);

  return (
    <section id={projectsSection.sectionId} className="py-24 md:py-32 px-6">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="mb-12"
        >
          <span className="text-neon-cyan font-mono text-sm tracking-wider uppercase">
            {projectsSection.subtitle}
          </span>
          <h2 className="text-4xl md:text-5xl font-bold mt-4">
            {projectsSection.title} <span className="text-gradient">{projectsSection.titleHighlight}</span>
          </h2>
          <p className="text-text-secondary mt-4 max-w-2xl">
            {projectsSection.description}
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mb-8"
        >
          <div className="flex flex-wrap gap-2 p-1.5 glass rounded-xl w-fit">
            {projectCategories.map((cat) => (
              <motion.button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`relative px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                  activeCategory === cat.id
                    ? "text-bg-primary"
                    : "text-text-muted hover:text-text-primary"
                }`}
                whileTap={{ scale: 0.95 }}
              >
                {activeCategory === cat.id && (
                  <motion.div
                    layoutId="activeCategory"
                    className="absolute inset-0 rounded-lg"
                    style={{ backgroundColor: "#00d4ff" }}
                    transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                  />
                )}
                <span className="relative z-10">{cat.label}</span>
              </motion.button>
            ))}
          </div>
        </motion.div>

        <LayoutGroup>
          <motion.div
            layout
            className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            <AnimatePresence mode="popLayout">
              {filteredProjects.map((project) => (
                <ProjectCard
                  key={project.id}
                  project={project}
                  onClick={() => setSelectedProject(project)}
                />
              ))}
            </AnimatePresence>
          </motion.div>
        </LayoutGroup>

        {filteredProjects.length === 0 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center py-20"
          >
            <p className="text-text-muted">
              No projects in this category yet.
            </p>
          </motion.div>
        )}
      </div>

      <AnimatePresence>
        {selectedProject && (
          <ProjectModal
            project={selectedProject}
            onClose={() => setSelectedProject(null)}
          />
        )}
      </AnimatePresence>
    </section>
  );
}
