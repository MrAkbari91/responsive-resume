"use client";

import React from "react";
import { resumeData } from "@/data/resumeData";

export default function Footer() {
  const { personalInfo } = resumeData;

  return (
    <footer className="mt-12 text-center text-xs md:text-sm text-slate-600 dark:text-slate-400 border-t border-slate-200/85 dark:border-slate-800/80 pt-6 no-print">
      <p>
        {personalInfo.name} · {personalInfo.title} · {personalInfo.address} · References available upon request
      </p>
    </footer>
  );
}
