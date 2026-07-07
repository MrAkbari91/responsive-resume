"use client";

import React from "react";
import { resumeData } from "@/data/resumeData";

export default function Partnerships() {
  const { partnerships } = resumeData;

  return (
    <section id="partnerships" className="bg-white dark:bg-slate-900 border border-slate-200/80 dark:border-slate-800 rounded-3xl p-6 md:p-8 relative overflow-hidden shadow-sm hover:shadow-xl hover:shadow-slate-900/5 dark:hover:shadow-black/40 hover:border-slate-300 dark:hover:border-slate-700 hover:-translate-y-1 transition-all duration-300 print-card">
      {/* Top Color Accent Bar */}
      <div className="absolute top-0 left-0 right-0 h-[4px] bg-gradient-to-r from-emerald-500 to-sky-500"></div>
      <h2 className="text-lg md:text-xl font-bold text-slate-900 dark:text-white flex items-center gap-3.5 mb-6 font-display">
        <span className="w-14 h-14 rounded-2xl flex items-center justify-center text-2xl text-white bg-gradient-to-tr from-emerald-500 to-sky-500 shadow-md shadow-emerald-500/10 flex-shrink-0">
          <i className="fas fa-handshake"></i>
        </span>
        Professional Partnerships & Ecosystem
      </h2>

      <div className="flex flex-wrap gap-3.5">
        {partnerships.map((partner) => (
          <a
            key={partner.name}
            href={partner.url}
            target="_blank"
            rel="noopener noreferrer"
            className={`group inline-flex items-center gap-2.5 bg-slate-50 border border-slate-200/85 dark:bg-slate-800/60 dark:border-slate-700 rounded-full px-5 py-3 text-base md:text-lg font-bold text-slate-700 dark:text-slate-300 shadow-sm transition-all duration-250 ${partner.hoverBg} hover:text-white hover:border-transparent hover:-translate-y-0.5`}
          >
            <i className={`${partner.iconClass} ${partner.hoverTextClass} transition-colors duration-200 text-lg md:text-xl`}></i>
            <span>{partner.name}</span>
          </a>
        ))}
      </div>
    </section>
  );
}
