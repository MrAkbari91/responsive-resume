"use client";

import React from "react";

type CalendarAccent = "indigo" | "sky" | "rose" | "amber" | "emerald";

interface CalendarBadgeProps {
  duration: string;
  accentClass?: CalendarAccent;
}

const badgeStyles: Record<CalendarAccent, string> = {
  indigo: "text-indigo-700 bg-indigo-50 border-indigo-100 dark:text-indigo-300 dark:bg-indigo-950/40 dark:border-indigo-900/30",
  sky: "text-sky-700 bg-sky-50 border-sky-100 dark:text-sky-300 dark:bg-sky-950/40 dark:border-sky-900/30",
  rose: "text-rose-700 bg-rose-50 border-rose-100 dark:text-rose-300 dark:bg-rose-950/40 dark:border-rose-900/30",
  amber: "text-amber-700 bg-amber-50 border-amber-100 dark:text-amber-300 dark:bg-amber-950/40 dark:border-amber-900/30",
  emerald: "text-emerald-700 bg-emerald-50 border-emerald-100 dark:text-emerald-450 dark:bg-emerald-950/20 dark:border-emerald-900/30",
};

export default function CalendarBadge({
  duration,
  accentClass = "indigo",
}: CalendarBadgeProps) {
  return (
    <div
      className={`flex items-center gap-2.5 text-sm md:text-base font-bold rounded-full px-4.5 py-2 border w-fit h-fit shadow-sm ${badgeStyles[accentClass]}`}
    >
      <i className="fa-regular fa-calendar-days text-lg md:text-xl"></i>
      <span>{duration}</span>
    </div>
  );
}
