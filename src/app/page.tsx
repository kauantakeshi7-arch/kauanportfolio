import HeroSection from "@/components/HeroSection";
import MarqueeSection from "@/components/MarqueeSection";
import AboutSection from "@/components/AboutSection";
import ProjectsSection from "@/components/ProjectsSection";
import ContactSection from "@/components/ContactSection";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#050505] text-[#EDEDED]">
      <HeroSection />
      <MarqueeSection />
      <AboutSection />
      <ProjectsSection />
      <ContactSection />
    </main>
  );
}
