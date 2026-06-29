"use client";

import { motion } from "framer-motion";
import { skillsSection, skills } from "../portfolioData";
import { getIcon } from "./icons";

export default function Skills() {
  return (
    <section id={skillsSection.sectionId} className="py-24 md:py-32 px-6 bg-bg-secondary/50">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="mb-16 text-center"
        >
          <span className="text-neon-cyan font-mono text-sm tracking-wider uppercase">
            {skillsSection.subtitle}
          </span>
          <h2 className="text-4xl md:text-5xl font-bold mt-4">
            {skillsSection.title} <span className="text-gradient">{skillsSection.titleHighlight}</span>
          </h2>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {skills.map((skill, i) => {
            const Icon = getIcon(skill.icon);
            return (
              <motion.div
                key={skill.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: i * 0.1, ease: [0.16, 1, 0.3, 1] }}
                whileHover={{ y: -5, transition: { duration: 0.2 } }}
                className="group relative bg-bg-tertiary rounded-2xl p-6 border border-border-subtle hover:border-neon-cyan/50 transition-all duration-300"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-neon-cyan/5 to-transparent opacity-0 group-hover:opacity-100 rounded-2xl transition-opacity" />
                
                <div className="relative z-10">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="p-3 bg-bg-secondary rounded-xl group-hover:bg-neon-cyan/10 transition-colors">
                      <Icon 
                        size={28} 
                        className="text-neon-cyan group-hover:scale-110 transition-transform" 
                      />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold">{skill.name}</h3>
                      <p className="text-text-muted text-sm">{skill.description}</p>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <div className="flex justify-between text-sm">
                      <span className="text-text-muted">Proficiency</span>
                      <span className="text-neon-cyan font-mono">{skill.level}%</span>
                    </div>
                    <div className="h-2 bg-bg-secondary rounded-full overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        viewport={{ once: true }}
                        transition={{ duration: 1, delay: 0.3 + i * 0.1, ease: [0.16, 1, 0.3, 1] }}
                        className="h-full bg-gradient-to-r from-neon-cyan to-neon-blue rounded-full"
                      />
                    </div>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
