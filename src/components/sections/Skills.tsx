"use client";

import React from "react";
import { resumeData } from "@/data/resumeData";
import SkillBadge from "@/components/ui/SkillBadge";

export default function Skills() {
  const { skills } = resumeData;

  return (
    <section id="skills" className="bg-white dark:bg-slate-900 border border-slate-200/80 dark:border-slate-800 rounded-3xl p-6 relative overflow-hidden shadow-sm hover:shadow-xl hover:shadow-slate-900/5 dark:hover:shadow-black/40 hover:border-slate-300 dark:hover:border-slate-700 hover:-translate-y-1 transition-all duration-300 print-card">
      {/* Top Color Accent Bar */}
      <div className="absolute top-0 left-0 right-0 h-[4px] bg-gradient-to-r from-violet-500 to-purple-500"></div>
      <h2 className="text-lg md:text-xl font-bold text-slate-900 dark:text-white flex items-center gap-3.5 mb-5 font-display">
        <span className="w-14 h-14 rounded-2xl flex items-center justify-center text-xl text-white bg-gradient-to-tr from-violet-500 to-purple-500 shadow-md shadow-violet-500/10 flex-shrink-0">
          <i className="fas fa-layer-group"></i>
        </span>
        Skills
      </h2>

      <div className="space-y-5">
        {skills.map((group) => (
          <div key={group.category}>
            <p className="text-[11px] md:text-xs font-bold text-slate-500 dark:text-slate-400 uppercase tracking-wider mb-2.5">{group.category}</p>
            <div className="flex flex-wrap gap-2.5">
              {group.skills.map((skill) => (
                <SkillBadge
                  key={skill.name}
                  name={skill.name}
                  iconClass={skill.iconClass}
                />
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
