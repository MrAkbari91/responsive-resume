"use client";

import React from "react";
import { resumeData } from "@/data/resumeData";
import CalendarBadge from "@/components/ui/CalendarBadge";

export default function Education() {
  const { education } = resumeData;

  return (
    <section className="bg-white dark:bg-slate-900 border border-slate-200/80 dark:border-slate-800 rounded-3xl p-6 relative overflow-hidden shadow-sm hover:shadow-xl hover:shadow-slate-900/5 dark:hover:shadow-black/40 hover:border-slate-300 dark:hover:border-slate-700 hover:-translate-y-1 transition-all duration-300 print-card">
      {/* Top Color Accent Bar */}
      <div className="absolute top-0 left-0 right-0 h-[4px] bg-gradient-to-r from-emerald-500 to-teal-500"></div>
      <h2 className="text-lg md:text-xl font-bold text-slate-900 dark:text-white flex items-center gap-3.5 mb-6 font-display">
        <span className="w-14 h-14 rounded-2xl flex items-center justify-center text-2xl text-white bg-gradient-to-tr from-emerald-500 to-teal-500 shadow-md shadow-emerald-500/10 flex-shrink-0">
          <i className="fas fa-graduation-cap"></i>
        </span>
        Education
      </h2>

      <div className="space-y-6 relative pl-1">
        {education.map((edu, idx) => (
          <div key={edu.degree} className="relative pl-10 pb-6 group/edu last:pb-0">
            {/* Connector Line */}
            {idx < education.length - 1 && (
              <div className="absolute left-[9px] top-8 bottom-0 w-[2px] bg-slate-200/60 dark:bg-slate-800"></div>
            )}
            {/* Dot */}
            <div className="absolute left-0 top-3 w-5 h-5 rounded-full border-[3.5px] border-emerald-500 bg-white dark:bg-slate-900 ring-4 ring-emerald-50 dark:ring-emerald-950/20 z-10"></div>

            {/* Degree */}
            <h3 className="text-lg md:text-xl font-bold text-slate-900 dark:text-slate-100 flex items-center gap-2.5 font-display">
              <i className="fas fa-graduation-cap text-emerald-500 text-lg md:text-xl"></i>
              <span>{edu.degree}</span>
            </h3>
            {/* Institution */}
            <p className="text-sm md:text-base font-semibold text-slate-600 dark:text-slate-400 flex items-center gap-2 mt-1.5">
              <i className="fas fa-university text-slate-400"></i>
              <span>{edu.school}</span>
            </p>
            {/* Time Duration */}
            <div className="mt-3">
              <CalendarBadge
                duration={edu.duration}
                accentClass="emerald"
              />
            </div>

            {/* Coursework tags */}
            <div className="flex flex-wrap gap-2 mt-3.5">
              {edu.tags.map((tag) => (
                <span key={tag} className="bg-slate-100 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-xs md:text-base text-slate-600 dark:text-slate-400 font-bold px-3 py-1.5 rounded-lg">
                  {tag}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
