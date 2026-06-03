import type { Metadata } from "next";
import { Inter, Space_Grotesk } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SmoothScroller from "@/components/SmoothScroller";
import CustomCursor from "@/components/CustomCursor";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://kauantakeshi.dev"),
  title: "Kauan Takeshi | Software Engineer",
  description: "Portfólio de Kauan Takeshi. Desenvolvimento de software focado em performance, conversão e design premium.",
  openGraph: {
    title: "Kauan Takeshi | Software Engineer",
    description: "Desenvolvimento de software focado em performance e design premium.",
    url: "https://kauantakeshi.dev",
    siteName: "Kauan Takeshi",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
      },
    ],
    locale: "pt_BR",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="pt-BR"
      className={`${inter.variable} ${spaceGrotesk.variable} antialiased scroll-smooth`}
      suppressHydrationWarning
    >
      <body className="min-h-screen flex flex-col bg-[#050505] text-[#EDEDED] font-sans overflow-x-hidden selection:bg-lime-500 selection:text-black pt-20 relative">
        {/* Grain / Noise Analógico de altíssima performance gerado em base64 SVG */}
        <div 
          className="fixed inset-0 z-50 pointer-events-none opacity-[0.03] mix-blend-overlay"
          style={{ backgroundImage: 'url("data:image/svg+xml,%3Csvg viewBox=%220 0 200 200%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cfilter id=%22noiseFilter%22%3E%3CfeTurbulence type=%22fractalNoise%22 baseFrequency=%220.65%22 numOctaves=%223%22 stitchTiles=%22stitch%22/%3E%3C/filter%3E%3Crect width=%22100%25%22 height=%22100%25%22 filter=%22url(%23noiseFilter)%22/%3E%3C/svg%3E")' }}
        />
        
        <CustomCursor />

        <SmoothScroller>
          <Navbar />
          <main className="flex-grow">
            {children}
          </main>
          <Footer />
        </SmoothScroller>
      </body>
    </html>
  );
}
