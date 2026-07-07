"use client";

import React from "react";
import { resumeData } from "@/data/resumeData";

export default function Contact() {
  const { personalInfo } = resumeData;

  return (
    <section id="contact" className="bg-white dark:bg-slate-900 border border-slate-200/80 dark:border-slate-800 rounded-3xl p-6 relative overflow-hidden shadow-sm hover:shadow-xl hover:shadow-slate-900/5 dark:hover:shadow-black/40 hover:border-slate-300 dark:hover:border-slate-700 hover:-translate-y-1 transition-all duration-300 print-card">
      {/* Top Color Accent Bar */}
      <div className="absolute top-0 left-0 right-0 h-[4px] bg-gradient-to-r from-sky-500 to-indigo-500"></div>
      <h2 className="text-lg md:text-xl font-bold text-slate-900 dark:text-white flex items-center gap-3.5 mb-6 font-display">
        <span className="w-14 h-14 rounded-2xl flex items-center justify-center text-xl text-white bg-gradient-to-tr from-sky-500 to-indigo-500 shadow-md shadow-sky-500/10 flex-shrink-0">
          <i className="fas fa-address-card"></i>
        </span>
        Contact Info
      </h2>

      <div className="space-y-4">
        {/* Phone */}
        <a
          href={`tel:${personalInfo.phone.replace(/\s+/g, "")}`}
          className="flex items-center gap-4 p-3.5 rounded-2xl bg-slate-50/50 dark:bg-slate-800/30 border border-slate-200 dark:border-slate-800 hover:bg-white dark:hover:bg-slate-800 hover:border-sky-400 dark:hover:border-sky-550 hover:shadow-md hover:translate-x-1.5 transition-all duration-250 group"
        >
          <div className="w-14 h-14 rounded-2xl flex items-center justify-center text-2xl text-white bg-gradient-to-tr from-sky-500 to-cyan-400 flex-shrink-0 shadow-sm shadow-sky-500/10">
            <i className="fas fa-phone"></i>
          </div>
          <div>
            <p className="text-[10px] md:text-xs font-bold text-slate-500 dark:text-slate-400 uppercase tracking-wider">Phone</p>
            <p className="text-sm md:text-base font-bold text-slate-800 dark:text-slate-200">{personalInfo.phone}</p>
          </div>
        </a>

        {/* WhatsApp */}
        <a
          href={`https://wa.me/${personalInfo.whatsapp.replace(/[^0-9]/g, "")}`}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-4 p-3.5 rounded-2xl bg-slate-50/50 dark:bg-slate-800/30 border border-slate-200 dark:border-slate-800 hover:bg-white dark:hover:bg-slate-800 hover:border-emerald-450 dark:hover:border-emerald-550 hover:shadow-md hover:translate-x-1.5 transition-all duration-250 group"
        >
          <div className="w-14 h-14 rounded-2xl flex items-center justify-center text-2xl text-white bg-gradient-to-tr from-emerald-500 to-green-400 flex-shrink-0 shadow-sm shadow-emerald-500/10">
            <i className="fab fa-whatsapp"></i>
          </div>
          <div>
            <p className="text-[10px] md:text-xs font-bold text-slate-500 dark:text-slate-400 uppercase tracking-wider">WhatsApp</p>
            <p className="text-sm md:text-base font-bold text-slate-800 dark:text-slate-200">{personalInfo.whatsapp}</p>
          </div>
        </a>

        {/* Email */}
        <a
          href={`mailto:${personalInfo.email}`}
          className="flex items-center gap-4 p-3.5 rounded-2xl bg-slate-50/50 dark:bg-slate-800/30 border border-slate-200 dark:border-slate-800 hover:bg-white dark:hover:bg-slate-800 hover:border-indigo-400 dark:hover:border-indigo-550 hover:shadow-md hover:translate-x-1.5 transition-all duration-255 group"
        >
          <div className="w-14 h-14 rounded-2xl flex items-center justify-center text-2xl text-white bg-gradient-to-tr from-indigo-500 to-purple-400 flex-shrink-0 shadow-sm shadow-indigo-500/10">
            <i className="fas fa-envelope"></i>
          </div>
          <div>
            <p className="text-[10px] md:text-xs font-bold text-slate-500 dark:text-slate-400 uppercase tracking-wider">Email</p>
            <p className="text-sm md:text-base font-bold text-slate-800 dark:text-slate-200">{personalInfo.email}</p>
          </div>
        </a>

        {/* LinkedIn */}
        <a
          href={personalInfo.linkedin}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-4 p-3.5 rounded-2xl bg-slate-50/50 dark:bg-slate-800/30 border border-slate-200 dark:border-slate-800 hover:bg-white dark:hover:bg-slate-800 hover:border-blue-400 dark:hover:border-blue-555 hover:shadow-md hover:translate-x-1.5 transition-all duration-255 group"
        >
          <div className="w-14 h-14 rounded-2xl flex items-center justify-center text-2xl text-white bg-gradient-to-tr from-blue-600 to-sky-400 flex-shrink-0 shadow-sm shadow-blue-500/10">
            <i className="fab fa-linkedin-in"></i>
          </div>
          <div>
            <p className="text-[10px] md:text-xs font-bold text-slate-500 dark:text-slate-400 uppercase tracking-wider">LinkedIn</p>
            <p className="text-sm md:text-base font-bold text-slate-800 dark:text-slate-200">{personalInfo.linkedinUsername}</p>
          </div>
        </a>

        {/* GitHub */}
        <a
          href={personalInfo.github}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-4 p-3.5 rounded-2xl bg-slate-50/50 dark:bg-slate-800/30 border border-slate-200 dark:border-slate-800 hover:bg-white dark:hover:bg-slate-800 hover:border-slate-800 dark:hover:border-slate-600 hover:shadow-md hover:translate-x-1.5 transition-all duration-255 group"
        >
          <div className="w-14 h-14 rounded-2xl flex items-center justify-center text-2xl text-white bg-gradient-to-tr from-slate-800 to-slate-600 flex-shrink-0 shadow-sm shadow-slate-800/10">
            <i className="fab fa-github"></i>
          </div>
          <div>
            <p className="text-[10px] md:text-xs font-bold text-slate-500 dark:text-slate-400 uppercase tracking-wider">GitHub</p>
            <p className="text-sm md:text-base font-bold text-slate-800 dark:text-slate-200">{personalInfo.githubUsername}</p>
          </div>
        </a>

        {/* Portfolio */}
        <a
          href={personalInfo.portfolioUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-4 p-3.5 rounded-2xl bg-slate-50/50 dark:bg-slate-800/30 border border-slate-200 dark:border-slate-800 hover:bg-white dark:hover:bg-slate-800 hover:border-purple-400 dark:hover:border-purple-550 hover:shadow-md hover:translate-x-1.5 transition-all duration-255 group"
        >
          <div className="w-14 h-14 rounded-2xl flex items-center justify-center text-2xl text-white bg-gradient-to-tr from-purple-600 to-fuchsia-400 flex-shrink-0 shadow-sm shadow-purple-500/10">
            <i className="fas fa-globe"></i>
          </div>
          <div>
            <p className="text-[10px] md:text-xs font-bold text-slate-500 dark:text-slate-400 uppercase tracking-wider">Portfolio</p>
            <p className="text-sm md:text-base font-bold text-slate-800 dark:text-slate-200">{personalInfo.portfolio}</p>
          </div>
        </a>

        {/* CodePen */}
        <a
          href={`https://codepen.io/${personalInfo.codepenUsername}/`}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-4 p-3.5 rounded-2xl bg-slate-50/50 dark:bg-slate-800/30 border border-slate-200 dark:border-slate-800 hover:bg-white dark:hover:bg-slate-800 hover:border-amber-400 dark:hover:border-amber-550 hover:shadow-md hover:translate-x-1.5 transition-all duration-255 group"
        >
          <div className="w-14 h-14 rounded-2xl flex items-center justify-center text-2xl text-white bg-gradient-to-tr from-amber-500 to-orange-400 flex-shrink-0 shadow-sm shadow-amber-500/10">
            <i className="fab fa-codepen"></i>
          </div>
          <div>
            <p className="text-[10px] md:text-xs font-bold text-slate-500 dark:text-slate-400 uppercase tracking-wider">CodePen</p>
            <p className="text-sm md:text-base font-bold text-slate-800 dark:text-slate-200">{personalInfo.codepen}</p>
          </div>
        </a>
      </div>
    </section>
  );
}
