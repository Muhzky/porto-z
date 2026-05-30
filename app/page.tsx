"use client";

import { useEffect, useState } from "react";
import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import ProjectsSection from "./components/ProjectsSection";
import StudiesSection from "./components/StudiesSection";
import CertificatesSection from "./components/CertificatesSection";
import FooterSection from "./components/FooterSection";

export default function Home() {
  const [activeSection, setActiveSection] = useState("introduction");

  // IntersectionObserver for scroll-spy navigation
  useEffect(() => {
    const sections = [
      "introduction",
      "work-experience",
      "studies",
      // "certificates" added if you want nav to highlight it too, otherwise keep as is
    ];
    
    // Note: Added 'certificates' to observer list if you want it active in navbar
    const allSections = [...sections, "certificates"];

    const observers = allSections.map((id) => {
      const el = document.getElementById(id);
      if (!el) return null;

      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setActiveSection(id);
          }
        },
        {
          rootMargin: "-25% 0px -55% 0px",
          threshold: 0.1,
        }
      );
      observer.observe(el);
      return { el, observer };
    });

    return () => {
      observers.forEach((obs) => {
        if (obs) obs.observer.unobserve(obs.el);
      });
    };
  }, []);

  const handleNavClick = (sectionId: string) => {
    const el = document.getElementById(sectionId);
    if (el) {
      const yOffset = -120;
      const y = el.getBoundingClientRect().top + window.scrollY + yOffset;
      window.scrollTo({ top: y, behavior: "smooth" });
      setActiveSection(sectionId);
    }
  };

  return (
    <div className="relative min-h-screen w-full flex flex-col font-sans transition-colors duration-500 bg-background text-foreground overflow-hidden">
      {/* Decorative blobs */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-[1400px] h-[600px] bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-purple-400/20 via-indigo-300/5 to-transparent pointer-events-none z-0" />
      <div className="absolute top-[25%] left-[-10%] w-[45%] h-[40%] rounded-full bg-purple-400/5 blur-[120px] pointer-events-none" />
      <div className="absolute top-[60%] right-[-10%] w-[40%] h-[45%] rounded-full bg-indigo-400/5 blur-[120px] pointer-events-none" />

      <Navbar activeSection={activeSection} onNavClick={handleNavClick} />

      {/* Main Layout Container */}
      <div className="w-full max-w-3xl mx-auto px-4 sm:px-8 md:px-12 pt-24 md:pt-32 pb-6">
        <main className="flex-1 flex flex-col gap-16 md:gap-20">
          
          <HeroSection />
          
          <ProjectsSection />
          
          <StudiesSection />
          
          <CertificatesSection />
          
        </main>

        <FooterSection />
      </div>
    </div>
  );
}