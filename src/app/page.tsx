"use client";

import React, { useEffect } from "react";

// Import Modular Components
import Hero from "@/components/sections/Hero";
import Summary from "@/components/sections/Summary";
import Experience from "@/components/sections/Experience";
import Certifications from "@/components/sections/Certifications";
import Partnerships from "@/components/sections/Partnerships";
import Contact from "@/components/sections/Contact";
import Skills from "@/components/sections/Skills";
import Education from "@/components/sections/Education";
import Languages from "@/components/sections/Languages";
import Footer from "@/components/sections/Footer";

export default function Home() {
  
  // Intersection Observer for scroll-reveal animations
  useEffect(() => {
    const reveals = document.querySelectorAll(".reveal");
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("active");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.05, rootMargin: "0px 0px -10px 0px" }
    );
    reveals.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  // Prevent page inspect & right-click (Code protection)
  // useEffect(() => {
  //   const handleContextMenu = (e: MouseEvent) => {
  //     e.preventDefault();
  //   };
  //   document.addEventListener("contextmenu", handleContextMenu);

  //   const handleKeyDown = (e: KeyboardEvent) => {
  //     if (
  //       e.key === "F12" ||
  //       (e.ctrlKey && e.shiftKey && (e.key === "I" || e.key === "i" || e.key === "J" || e.key === "j" || e.key === "C" || e.key === "c")) ||
  //       (e.ctrlKey && (e.key === "U" || e.key === "u")) ||
  //       (e.ctrlKey && (e.key === "S" || e.key === "s"))
  //     ) {
  //       e.preventDefault();
  //     }
  //   };
  //   document.addEventListener("keydown", handleKeyDown);

  //   return () => {
  //     document.removeEventListener("contextmenu", handleContextMenu);
  //     document.removeEventListener("keydown", handleKeyDown);
  //   };
  // }, []);

  const handlePrint = () => {
    window.print();
  };

  return (
    <main className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 pt-8 pb-16 w-full">
      
      {/* Background Ambient Glows */}
      <div className="fixed inset-0 z-[-1] pointer-events-none bg-[#fafaf9] dark:bg-[#020617] transition-colors duration-300">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_40%_at_85%_10%,rgba(99,102,241,0.08)_0%,transparent_60%)] dark:bg-[radial-gradient(ellipse_60%_40%_at_85%_10%,rgba(99,102,241,0.14)_0%,transparent_60%)]"></div>
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_50%_45%_at_10%_25%,rgba(14,165,233,0.07)_0%,transparent_55%)] dark:bg-[radial-gradient(ellipse_50%_45%_at_10%_25%,rgba(14,165,233,0.12)_0%,transparent_55%)]"></div>
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_55%_50%_at_50%_90%,rgba(244,63,94,0.06)_0%,transparent_55%)] dark:bg-[radial-gradient(ellipse_55%_50%_at_50%_90%,rgba(244,63,94,0.1)_0%,transparent_55%)]"></div>
      </div>

      {/* HERO SECTION */}
      <Hero handlePrint={handlePrint} />

      {/* MAIN LAYOUT WRAPPER (MOBILE FIRST: MAIN COL RENDERS FIRST) */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 print-layout">
        
        {/* MAIN COLUMN (col-span-8, starts at 5 on desktop) */}
        <div className="lg:col-span-8 lg:col-start-5 space-y-8">
          <Summary />
          <Experience />
          <Certifications />
          <Partnerships />
        </div>

        {/* LEFT COLUMN (Desktop col-span-4, sits on left on desktop, orders below main on mobile) */}
        <aside className="lg:col-span-4 lg:col-start-1 lg:row-start-1 space-y-8 print-aside">
          <Contact />
          <Skills />
          <Education />
          <Languages />
        </aside>

      </div>

      {/* FOOTER */}
      <Footer />
      
    </main>
  );
}
