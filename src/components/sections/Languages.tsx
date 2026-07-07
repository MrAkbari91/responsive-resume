"use client";

import React from "react";
import { resumeData } from "@/data/resumeData";

export default function Languages() {
  const { languages } = resumeData;

  return (
    <section className="bg-white dark:bg-slate-900 border border-slate-200/80 dark:border-slate-800 rounded-3xl p-6 relative overflow-hidden shadow-sm hover:shadow-xl hover:shadow-slate-900/5 dark:hover:shadow-black/40 hover:border-slate-300 dark:hover:border-slate-700 hover:-translate-y-1 transition-all duration-300 print-card">
      {/* Top Color Accent Bar */}
      <div className="absolute top-0 left-0 right-0 h-[4px] bg-gradient-to-r from-amber-500 to-orange-500"></div>
      <h2 className="text-lg md:text-xl font-bold text-slate-900 dark:text-white flex items-center gap-3.5 mb-5 font-display">
        <span className="w-14 h-14 rounded-2xl flex items-center justify-center text-2xl text-white bg-gradient-to-tr from-amber-500 to-orange-500 shadow-md shadow-amber-500/10 flex-shrink-0">
          <i className="fas fa-language"></i>
        </span>
        Languages
      </h2>

      <div className="space-y-3.5">
        {languages.map((lang) => (
          <div key={lang.name} className="flex items-center justify-between">
            <span className="text-base md:text-lg font-semibold text-slate-700 dark:text-slate-300">{lang.name}</span>
            <span className={`text-sm md:text-base font-bold px-3 py-1.5 rounded-full border ${
              lang.level === "Native"
                ? "text-emerald-700 bg-emerald-50 border-emerald-100 dark:text-emerald-400 dark:bg-emerald-950/20"
                : "text-amber-700 bg-amber-50 border-amber-100 dark:text-amber-400 dark:bg-amber-950/20"
            }`}>
              {lang.level}
            </span>
          </div>
        ))}
      </div>
    </section>
  );
}
