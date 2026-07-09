"use client";

import React, { useState } from "react";
import { resumeData } from "@/data/resumeData";
import ThemeToggle from "@/components/ThemeToggle";

export default function Hero() {
  const handlePrint = () => {
    window.print();
  };
  const [avatarError, setAvatarError] = useState(false);
  const { personalInfo } = resumeData;

  return (
    <>
      {/* FLOAT ACTION CONTROLS (no-print) */}
      <div className="fixed bottom-6 right-6 z-50 flex items-center gap-2.5 no-print">
        <button
          onClick={handlePrint}
          className="p-3.5 bg-indigo-600 hover:bg-indigo-700 text-white rounded-2xl shadow-lg transition-all duration-200 hover:-translate-y-0.5 cursor-pointer flex items-center justify-center"
          title="Print Resume"
        >
          <i className="fas fa-print text-base"></i>
        </button>
        <ThemeToggle />
      </div>

      {/* HERO SECTION - Premium Centered & Spacious */}
      <header className="mb-10 reveal active">
        <div className="bg-white dark:bg-slate-900 border border-slate-200/80 dark:border-slate-800 rounded-3xl p-6 md:p-10 relative overflow-hidden shadow-sm hover:shadow-xl hover:shadow-slate-900/5 dark:hover:shadow-black/40 hover:border-slate-300 dark:hover:border-slate-700 hover:-translate-y-1 transition-all duration-300 print-card">
          {/* Top Color Accent Bar */}
          <div className="absolute top-0 left-0 right-0 h-[5px] bg-gradient-to-r from-indigo-500 via-purple-500 to-sky-500"></div>
          {/* Grid pattern */}
          <div className="absolute inset-0 bg-[radial-gradient(#cbd5e1_1.5px,transparent_1.5px)] dark:bg-[radial-gradient(#334155_1.5px,transparent_1.5px)] [background-size:24px_24px] opacity-15 pointer-events-none"></div>

          <div className="relative z-10 flex flex-col-reverse lg:flex-row lg:items-center lg:justify-between gap-8">
            <div className="flex-1 space-y-5">

              {/* Hello Hand Wave Badge */}
              <div className="flex items-center gap-2.5 py-2 px-5 w-fit rounded-full dark:bg-slate-800 bg-slate-50 border dark:border-slate-700 border-slate-200 shadow-sm no-print">
                <span className="text-xl animate-bounce">👋</span>
                <span className="text-xs sm:text-sm font-extrabold text-slate-800 dark:text-slate-200 tracking-wide font-display">
                  Hello! I am <span className="text-indigo-600 dark:text-cyan-400 font-black">{personalInfo.name}</span>
                </span>
              </div>

              {/* Main Title */}
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-slate-900 dark:text-white tracking-tight leading-[1.1] font-display">
                {personalInfo.title.split("&").map((part, pIdx) => (
                  <span key={pIdx} className="block last:text-indigo-600 dark:last:text-cyan-400">
                    {pIdx > 0 && " & "}
                    {part.trim()}
                  </span>
                ))}
              </h1>

              {/* Sub-description with Experience Badge */}
              <p className="text-slate-700 dark:text-slate-300 max-w-3xl leading-relaxed text-base md:text-lg lg:text-xl font-light">
                I am an <span className="font-bold text-slate-900 dark:text-slate-100">Expert full-stack developer</span> with{" "}
                <span className="font-extrabold text-indigo-600 dark:text-cyan-400 px-3.5 py-1 rounded-full bg-indigo-50 dark:bg-indigo-950/40 border border-indigo-100/50 dark:border-indigo-900/30 text-sm md:text-base inline-block align-middle no-print">
                  5+ Years Experience
                </span>{" "}
                crafting responsive, user-centric web applications and SaaS/eCommerce platforms.
              </p>

              {/* Action Buttons */}
              <div className="flex items-center gap-3.5 pt-3.5 no-print flex-wrap">
                <button
                  onClick={handlePrint}
                  className="inline-flex items-center justify-center gap-2 px-6 py-3.5 bg-indigo-600 hover:bg-indigo-700 text-white text-sm font-bold rounded-2xl transition-all duration-200 shadow-md shadow-indigo-600/10 cursor-pointer"
                >
                  <i className="fas fa-file-pdf text-xl"></i>
                  <span>Download CV / Print</span>
                </button>
                <a
                  href="#contact"
                  className="inline-flex items-center justify-center gap-2 px-6 py-3.5 bg-slate-100 hover:bg-slate-200 dark:bg-slate-800 dark:hover:bg-slate-700 text-slate-800 dark:text-slate-200 text-base font-bold rounded-2xl transition-all duration-200 border border-slate-200/50 dark:border-slate-700 cursor-pointer"
                >
                  <i className="fas fa-paper-plane text-xl"></i>
                  <span>Hire Me</span>
                </a>
              </div>

            </div>

            {/* Avatar block */}
            <div className="flex-shrink-0 flex justify-center lg:justify-end">
              <div className="relative">
                <div className="relative w-64 h-64 rounded-[28px] sm:rounded-[36px] lg:rounded-[48px] bg-gradient-to-tr from-indigo-600 to-purple-600 flex items-center justify-center text-white text-4xl sm:text-5xl lg:text-7xl font-black shadow-lg shadow-indigo-500/20 border-2 border-white/20 transition-all duration-300 hover:scale-105 hover:rotate-3 overflow-hidden group">
                  {/* Shine Overlay Reflection */}
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/25 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-in-out"></div>
                  {!avatarError ? (
                    <img
                      src={`${personalInfo.github}.png`}
                      alt={personalInfo.name}
                      onError={() => setAvatarError(true)}
                      className="w-full h-full object-cover"
                      fetchPriority="high"
                    />
                  ) : (
                    <span>DA</span>
                  )}
                </div>
                {/* Pulsing Status Dot */}
                <span className="absolute bottom-1 right-1 lg:bottom-2 lg:right-2 w-6 h-6 lg:w-8 lg:h-8 bg-emerald-500 border-[3.5px] lg:border-[5px] border-white dark:border-slate-900 rounded-full flex items-center justify-center shadow-md no-print animate-pulse" title="Available for Work / Online">
                  <span className="w-2 h-2 lg:w-3 lg:h-3 rounded-full bg-emerald-500 animate-ping absolute"></span>
                </span>
              </div>
            </div>
          </div>

          {/* Visual Stats Grid */}
          <div className="grid grid-cols-3 gap-6 mt-10 pt-8 border-t border-slate-200/60 dark:border-slate-800/80">
            {personalInfo.stats.map((stat, sIdx) => (
              <div key={sIdx} className="text-center">
                <span className="block text-2xl md:text-3xl font-black text-indigo-600 dark:text-cyan-400 tracking-tight font-display">
                  {stat.value}
                </span>
                <span className="block text-[10px] md:text-base font-bold text-slate-600 dark:text-slate-400 uppercase tracking-wider mt-1">
                  {stat.label}
                </span>
              </div>
            ))}
          </div>
        </div>
      </header>
    </>
  );
}
