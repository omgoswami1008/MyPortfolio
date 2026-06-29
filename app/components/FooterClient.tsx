"use client";

import { motion } from "framer-motion";
import { Heart } from "lucide-react";
import { socialIcons } from "./icons";
import type { SocialLink, NavLink } from "../portfolioData";

interface FooterClientProps {
  socialLinks: SocialLink[];
  footerSection: { tagline: string; buildText: string; buildTools: string };
  navLinks: NavLink[];
  name: string;
  initials: string;
}

export default function FooterClient({ socialLinks, footerSection, navLinks, name, initials }: FooterClientProps) {
  return (
    <footer className="py-12 px-6 border-t border-border-subtle relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-t from-bg-primary to-transparent" />
      
      <div className="max-w-6xl mx-auto relative">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8 mb-8">
          <div className="text-center md:text-left">
            <a href="#" className="text-2xl font-bold text-gradient">
              {initials}
            </a>
            <p className="text-text-muted text-sm mt-2">
              {footerSection.tagline}
            </p>
          </div>

          <nav className="flex flex-wrap justify-center gap-6">
            {navLinks.map((link, i) => (
              <motion.a
                key={link.href}
                href={link.href}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
                className="text-text-muted hover:text-neon-cyan text-sm transition-colors"
              >
                {link.label}
              </motion.a>
            ))}
          </nav>

          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex gap-3"
          >
            {socialLinks.map((link, i) => (
              <motion.a
                key={link.name}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                whileHover={{ y: -4 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="relative p-3 glass rounded-xl group"
                title={link.name}
              >
                <motion.div
                  className="absolute inset-0 rounded-xl bg-gradient-to-br from-neon-cyan/20 to-neon-blue/20 opacity-0 group-hover:opacity-100 transition-opacity"
                  initial={{ scale: 0.8 }}
                  whileHover={{ scale: 1 }}
                />
                <motion.div
                  className="relative z-10 text-text-muted group-hover:text-neon-cyan transition-colors"
                  whileHover={{ scale: 1.1 }}
                >
                  {socialIcons[link.iconType]}
                </motion.div>
                <motion.div
                  className="absolute -bottom-1 left-1/2 h-0.5 bg-gradient-to-r from-neon-cyan to-neon-blue rounded-full"
                  initial={{ width: 0, x: "-50%" }}
                  whileHover={{ width: "60%" }}
                  transition={{ duration: 0.2 }}
                />
              </motion.a>
            ))}
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="pt-8 border-t border-border-subtle flex flex-col md:flex-row items-center justify-between gap-4"
        >
          <p className="text-text-muted text-sm">
            © {new Date().getFullYear()} {name} Portfolio. All rights reserved.
          </p>
          
          <motion.p
            initial={{ opacity: 0, x: -10 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="text-text-muted text-sm flex items-center gap-2"
          >
            {footerSection.buildText}{" "}
            <motion.span
              animate={{ scale: [1, 1.2, 1] }}
              transition={{ duration: 1, repeat: Infinity }}
            >
              <Heart size={14} className="text-red-400 fill-current" />
            </motion.span>
            , {footerSection.buildTools}
          </motion.p>
        </motion.div>
      </div>
    </footer>
  );
}
