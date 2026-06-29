import type { Metadata, Viewport } from "next";
import { Space_Grotesk, Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import ClientLayout from "./components/ClientLayout";
import InteractiveParticleBackground from "./components/InteractiveParticleBackground";
import CustomCursor from "./components/CustomCursor";

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
  preload: false,
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  display: "swap",
  preload: false,
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains",
  subsets: ["latin"],
  weight: ["400", "500"],
  display: "swap",
  preload: false,
});

export const viewport: Viewport = {
  themeColor: "#0a0a0f",
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

export const metadata: Metadata = {
  title: "GOSWAMI OMGIRI | Data Scientist & MERN Developer",
  description: "Portfolio of a Data Scientist and MERN Developer specializing in machine learning, data analysis, and full-stack web development. Transforming complex data into actionable insights.",
  keywords: [
    "Data Science",
    "Machine Learning",
    "MERN Developer",
    "Full Stack Developer",
    "Python",
    "React",
    "Next.js",
    "Portfolio",
    "Data Analyst",
    "Web Developer",
  ],
  authors: [{ name: "Goswami Omgiri" }],
  creator: "Goswami Omgiri",
  publisher: "Goswami Omgiri",
  metadataBase: new URL("https://goswamiomgiri.dev"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://goswamiomgiri.dev",
    siteName: "Goswami Omgiri Portfolio",
    title: "GOSWAMI OMGIRI | Data Scientist & MERN Developer",
    description: "Data Scientist & MERN Developer specializing in machine learning, data analysis, and full-stack web development. Transforming complex data into actionable insights.",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Goswami Omgiri - Data Scientist & MERN Developer Portfolio",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@goswamiomgiri",
    creator: "@goswamiomgiri",
    title: "GOSWAMI OMGIRI | Data Scientist & MERN Developer",
    description: "Data Scientist & MERN Developer specializing in machine learning, data analysis, and full-stack web development.",
    images: ["/og-image.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/icon.svg", type: "image/svg+xml" },
    ],
    apple: "/apple-touch-icon.png",
  },
  verification: {
    google: "your-google-verification-code",
    yandex: "your-yandex-verification-code",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${spaceGrotesk.variable} ${inter.variable} ${jetbrainsMono.variable}`} suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      </head>
      <body className="min-h-screen bg-bg-primary text-text-primary antialiased" suppressHydrationWarning>
        <InteractiveParticleBackground />
        <CustomCursor />
        <div className="noise-overlay" aria-hidden="true" />
        <ClientLayout />
      </body>
    </html>
  );
}
