"use client";

import { useState, useEffect } from "react";
import dynamic from "next/dynamic";
import { navLinks, personalInfo, socialLinks, footerSection, heroSection } from "../portfolioData";

const NavigationClient = dynamic(() => import("./NavigationClient"), { ssr: false });
const FooterClient = dynamic(() => import("./FooterClient"), { ssr: false });
const Hero = dynamic(() => import("./Hero"), { ssr: false });
const About = dynamic(() => import("./About"), { ssr: false });
const Skills = dynamic(() => import("./Skills"), { ssr: false });
const Projects = dynamic(() => import("./Projects"), { ssr: false });
const Timeline = dynamic(() => import("./Timeline"), { ssr: false });
const Contact = dynamic(() => import("./Contact"), { ssr: false });

export default function ClientLayout() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <>
      <NavigationClient navLinks={navLinks} initials={personalInfo.initials} resumeUrl={heroSection.ctaResume.resumeUrl} />
      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Timeline />
        <Contact />
      </main>
      <FooterClient
        socialLinks={socialLinks}
        footerSection={footerSection}
        navLinks={navLinks}
        name={personalInfo.name}
        initials={personalInfo.initials}
      />
    </>
  );
}
