"use client";

import React from "react";
import { resumeData } from "@/data/resumeData";

export default function Summary() {
  const { personalInfo } = resumeData;

  return (
    <section id="summary" className="bg-white dark:bg-slate-900 border border-slate-200/80 dark:border-slate-800 rounded-3xl p-6 md:p-8 relative overflow-hidden shadow-sm hover:shadow-xl hover:shadow-slate-900/5 dark:hover:shadow-black/40 hover:border-slate-300 dark:hover:border-slate-700 hover:-translate-y-1 transition-all duration-300 print-card">
      <div className="absolute top-0 left-0 right-0 h-[4px] bg-gradient-to-r from-rose-500 to-pink-500"></div>
      <h2 className="text-lg md:text-xl font-bold text-slate-900 dark:text-white flex items-center gap-3.5 mb-5 font-display">
        <span className="w-14 h-14 rounded-2xl flex items-center justify-center text-xl text-white bg-gradient-to-tr from-rose-500 to-pink-500 shadow-md shadow-rose-500/10 flex-shrink-0">
          <i className="fas fa-user"></i>
        </span>
        About Me
      </h2>
      <p className="text-slate-700 dark:text-slate-300 leading-relaxed text-base md:text-lg">
        {personalInfo.summary}
      </p>
    </section>
  );
}
