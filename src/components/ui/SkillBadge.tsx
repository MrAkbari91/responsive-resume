"use client";

import React from "react";

interface SkillBadgeProps {
  name: string;
  iconClass: string;
  hoverClass?: string;
}

export default function SkillBadge({
  name,
  iconClass,
  hoverClass = "hover:bg-indigo-600 hover:border-indigo-600 dark:hover:bg-indigo-600",
}: SkillBadgeProps) {
  return (
    <span
      className={`group inline-flex items-center gap-2 bg-slate-50 border border-slate-200/85 dark:bg-slate-800/60 dark:border-slate-700 dark:text-slate-300 rounded-full px-4 py-2 text-md font-bold text-slate-700 shadow-sm transition-all duration-200 hover:text-white hover:border-transparent hover:-translate-y-0.5 cursor-default ${hoverClass}`}
    >
      <i className={`${iconClass} group-hover:text-white transition-colors duration-200 text-xl`}></i>
      <span>{name}</span>
    </span>
  );
}
