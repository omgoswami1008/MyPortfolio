"use client";

import dynamic from "next/dynamic";
import { socialLinks, footerSection, navLinks, personalInfo } from "../portfolioData";

const FooterClient = dynamic(() => import("./FooterClient"), { ssr: false });

export default function Footer() {
  return (
    <FooterClient
      socialLinks={socialLinks}
      footerSection={footerSection}
      navLinks={navLinks}
      name={personalInfo.name}
      initials={personalInfo.initials}
    />
  );
}
