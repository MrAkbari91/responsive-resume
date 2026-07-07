"use client";

import React from "react";
import { resumeData } from "@/data/resumeData";
import SkillBadge from "@/components/ui/SkillBadge";
import CalendarBadge from "@/components/ui/CalendarBadge";

type AccentClassType = "indigo" | "sky" | "rose" | "amber" | "emerald";

export default function Experience() {
  const { experiences } = resumeData;

  return (
    <section id="experience" className="bg-white dark:bg-slate-900 border border-slate-200/80 dark:border-slate-800 rounded-3xl p-6 md:p-8 relative overflow-hidden shadow-sm hover:shadow-xl hover:shadow-slate-900/5 dark:hover:shadow-black/40 hover:border-slate-300 dark:hover:border-slate-700 hover:-translate-y-1 transition-all duration-300 print-card">
      <div className="absolute top-0 left-0 right-0 h-[4px] bg-gradient-to-r from-sky-500 to-indigo-500"></div>
      <h2 className="text-lg md:text-xl font-bold text-slate-900 dark:text-white flex items-center gap-3.5 mb-8 font-display">
        <span className="w-14 h-14 rounded-2xl flex items-center justify-center text-xl text-white bg-gradient-to-tr from-sky-500 to-indigo-500 shadow-md shadow-sky-500/10 flex-shrink-0">
          <i className="fas fa-briefcase"></i>
        </span>
        Professional Experience
      </h2>

      {/* Experience Timeline */}
      <div className="space-y-8 relative pl-1">
        {experiences.map((exp, idx) => {
          // Determine styling based on exp.accentClass
          let dotBorder = "border-indigo-600 ring-indigo-100/80 group-hover/timeline:bg-indigo-600 dark:border-indigo-500 dark:ring-indigo-950/20";
          let dotPing = "bg-indigo-600 dark:bg-indigo-500";
          let topGradient = "from-indigo-500 to-purple-500";
          let cardBorder = "hover:border-indigo-400 dark:hover:border-indigo-600 hover:shadow-md hover:-translate-y-0.5";
          let cardIcon = "text-indigo-600 dark:text-indigo-400";
          let bulletPoint = "before:text-indigo-500 dark:before:text-indigo-400";
          let impactStyle = "from-indigo-50 to-purple-50/50 border-indigo-100 text-indigo-900 dark:from-indigo-950/20 dark:to-purple-950/20 dark:border-indigo-900/40 dark:text-indigo-300";
          let impactIcon = "text-indigo-600 bg-indigo-500/10 dark:bg-indigo-500/20 dark:text-indigo-400";
          let timelineConnector = "bg-gradient-to-b from-indigo-500 to-sky-500";
          let tagHoverBg = "hover:bg-indigo-600 hover:border-indigo-600 dark:hover:bg-indigo-500";

          if (exp.accentClass === "sky") {
            dotBorder = "border-sky-500 ring-sky-50 group-hover/timeline:bg-sky-500 dark:border-sky-400 dark:ring-sky-950/20";
            dotPing = "bg-sky-500 dark:bg-sky-400";
            topGradient = "from-sky-400 to-indigo-500";
            cardBorder = "hover:border-sky-400 dark:hover:border-sky-600 hover:shadow-md hover:-translate-y-0.5";
            cardIcon = "text-sky-600 dark:text-sky-400";
            bulletPoint = "before:text-sky-550 dark:before:text-sky-400";
            impactStyle = "from-sky-50 to-indigo-50/50 border-sky-100 text-sky-900 dark:from-sky-950/20 dark:to-indigo-950/20 dark:border-sky-900/40 dark:text-sky-300";
            impactIcon = "text-sky-600 bg-sky-500/10 dark:bg-sky-500/20 dark:text-sky-400";
            timelineConnector = "bg-gradient-to-b from-sky-500 to-rose-500";
            tagHoverBg = "hover:bg-sky-600 hover:border-sky-600 dark:hover:bg-sky-500";
          } else if (exp.accentClass === "rose") {
            dotBorder = "border-rose-500 ring-rose-50 group-hover/timeline:bg-rose-500 dark:border-rose-400 dark:ring-rose-950/20";
            dotPing = "bg-rose-500 dark:bg-rose-400";
            topGradient = "from-rose-400 to-orange-500";
            cardBorder = "hover:border-rose-400 dark:hover:border-rose-600 hover:shadow-md hover:-translate-y-0.5";
            cardIcon = "text-rose-600 dark:text-rose-400";
            bulletPoint = "before:text-rose-550 dark:before:text-rose-400";
            impactStyle = "from-rose-50 to-amber-50/50 border-rose-100 text-rose-900 dark:from-rose-950/20 dark:to-amber-950/20 dark:border-rose-900/40 dark:text-rose-300";
            impactIcon = "text-rose-600 bg-rose-500/10 dark:bg-rose-500/20 dark:text-rose-400";
            timelineConnector = "bg-gradient-to-b from-rose-500 to-amber-500";
            tagHoverBg = "hover:bg-rose-600 hover:border-rose-600 dark:hover:bg-rose-500";
          } else if (exp.accentClass === "amber") {
            dotBorder = "border-amber-500 ring-amber-50 group-hover/timeline:bg-amber-500 dark:border-amber-400 dark:ring-amber-950/20";
            dotPing = "bg-amber-500 dark:bg-amber-400";
            topGradient = "from-amber-400 to-yellow-500";
            cardBorder = "hover:border-amber-400 dark:hover:border-amber-600 hover:shadow-md hover:-translate-y-0.5";
            cardIcon = "text-amber-600 dark:text-amber-400";
            bulletPoint = "before:text-amber-550 dark:before:text-amber-400";
            impactStyle = "from-amber-50 to-orange-50/50 border-amber-100 text-amber-900 dark:from-amber-950/20 dark:to-orange-950/20 dark:border-amber-900/40 dark:text-rose-300";
            impactIcon = "text-amber-600 bg-amber-500/10 dark:bg-amber-500/20 dark:text-amber-400";
            timelineConnector = "bg-gradient-to-b from-amber-500 to-emerald-500";
            tagHoverBg = "hover:bg-amber-600 hover:border-amber-600 dark:hover:bg-amber-500";
          } else if (exp.accentClass === "emerald") {
            dotBorder = "border-emerald-500 ring-emerald-50 group-hover/timeline:bg-emerald-500 dark:border-emerald-400 dark:ring-emerald-950/20";
            dotPing = "bg-emerald-500 dark:bg-emerald-400";
            topGradient = "from-emerald-400 to-teal-500";
            cardBorder = "hover:border-emerald-400 dark:hover:border-emerald-600 hover:shadow-md hover:-translate-y-0.5";
            cardIcon = "text-emerald-600 dark:text-emerald-400";
            bulletPoint = "before:text-emerald-550 dark:before:text-emerald-400";
            impactStyle = "from-emerald-50 to-teal-50/50 border-emerald-100 text-emerald-900 dark:from-emerald-950/20 dark:to-teal-950/20 dark:border-emerald-900/40 dark:text-emerald-300";
            impactIcon = "text-emerald-600 bg-emerald-500/10 dark:bg-emerald-500/20 dark:text-emerald-400";
            timelineConnector = "";
            tagHoverBg = "hover:bg-emerald-600 hover:border-emerald-600 dark:hover:bg-emerald-500";
          }

          return (
            <div key={exp.company} className="relative pl-10 pb-8 group/timeline last:pb-0">
              {/* Connector line */}
              {idx < experiences.length - 1 && (
                <div className={`absolute left-[9px] top-8 bottom-0 w-[2px] ${timelineConnector}`}></div>
              )}
              {/* Timeline dot */}
              <div className={`absolute left-0 top-3 w-5 h-5 rounded-full border-[3.5px] bg-white dark:bg-slate-900 ring-4 z-10 flex items-center justify-center transition-all duration-300 group-hover/timeline:scale-125 ${dotBorder}`}>
                <span className={`w-2 h-2 rounded-full animate-ping group-hover/timeline:bg-white ${dotPing}`}></span>
              </div>

              {/* Position Card */}
              <div className={`bg-white/60 hover:bg-white dark:bg-slate-900/40 dark:hover:bg-slate-900 border border-slate-200/80 dark:border-slate-800 rounded-3xl p-6 md:p-7 transition-all duration-300 relative overflow-hidden group/card ${cardBorder}`}>
                {/* Top border glow accent */}
                <div className={`absolute top-0 left-0 w-full h-[3px] bg-gradient-to-r ${topGradient} opacity-0 group-hover/card:opacity-100 transition-opacity duration-300`}></div>

                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-5">
                  <div>
                    <h3 className="text-lg md:text-xl font-bold text-slate-900 dark:text-slate-100 flex items-center gap-2.5 font-display">
                      <i className={`${exp.iconClass} ${cardIcon} text-base md:text-lg transition-transform duration-300 group-hover/card:rotate-12`}></i>
                      <span>{exp.position}</span>
                    </h3>
                    {/* Company */}
                    <p className="text-sm md:text-base font-semibold text-slate-500 dark:text-slate-400 flex items-center gap-2 mt-1.5">
                      <i className="fas fa-building text-slate-400"></i>
                      <span>{exp.company}</span>
                    </p>
                  </div>
                  {/* Time duration */}
                  <CalendarBadge
                    duration={exp.duration}
                    accentClass={exp.accentClass as AccentClassType}
                  />
                </div>

                {/* Bullet Points */}
                <ul className="space-y-2.5 text-sm md:text-base text-slate-700 dark:text-slate-300 leading-relaxed list-none pl-0">
                  {exp.responsibilities.map((resp, rIdx) => (
                    <li
                      key={rIdx}
                      className={`relative pl-4 before:content-['›'] before:absolute before:left-0 before:font-bold before:text-xl before:-top-0.5 ${bulletPoint}`}
                      dangerouslySetInnerHTML={{ __html: resp }}
                    />
                  ))}
                </ul>

                {/* Key Impact Highlight Box */}
                <div className={`mt-6 p-4 border rounded-2xl flex items-start gap-3.5 dark:bg-slate-800/40 dark:border-slate-700/60 bg-gradient-to-r ${impactStyle}`}>
                  <div className={`w-9 h-9 rounded-xl flex items-center justify-center flex-shrink-0 font-bold text-base ${impactIcon}`}>
                    {idx === 0 ? "🚀" : idx === 1 ? "⚡" : idx === 2 ? "📈" : idx === 3 ? "🛠️" : "⚙️"}
                  </div>
                  <div>
                    <h4 className="text-xs md:text-sm font-extrabold uppercase tracking-wider dark:text-slate-350">Key Impact</h4>
                    <p className="text-xs md:text-base mt-1 font-medium" dangerouslySetInnerHTML={{ __html: exp.achievements }}></p>
                  </div>
                </div>

                {/* Tags */}
                <div className="flex flex-wrap gap-2.5 mt-6 pt-5 border-t border-slate-100 dark:border-slate-800/80">
                  {exp.tech.map((tech) => (
                    <SkillBadge
                      key={tech.name}
                      name={tech.name}
                      iconClass={tech.iconClass}
                      hoverClass={tagHoverBg}
                    />
                  ))}
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
