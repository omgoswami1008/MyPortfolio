"use client";

import dynamic from "next/dynamic";
import { navLinks, personalInfo, heroSection } from "../portfolioData";

const NavigationClient = dynamic(() => import("./NavigationClient"), { ssr: false });

export default function Navigation() {
  return <NavigationClient navLinks={navLinks} initials={personalInfo.initials} resumeUrl={heroSection.ctaResume.resumeUrl} />;
}
