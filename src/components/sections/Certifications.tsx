"use client";

import React, { useState } from "react";
import { resumeData } from "@/data/resumeData";

export default function Certifications() {
  const [activeCert, setActiveCert] = useState<string | null>(null);
  const { certifications, personalInfo } = resumeData;

  const toggleCertPreview = (id: string) => {
    setActiveCert(activeCert === id ? null : id);
  };

  return (
    <section id="certifications" className="bg-white dark:bg-slate-900 border border-slate-200/80 dark:border-slate-800 rounded-3xl p-6 md:p-8 relative overflow-hidden shadow-sm hover:shadow-xl hover:shadow-slate-900/5 dark:hover:shadow-black/40 hover:border-slate-300 dark:hover:border-slate-700 hover:-translate-y-1 transition-all duration-300 print-card">
      {/* Top Color Accent Bar */}
      <div className="absolute top-0 left-0 right-0 h-[4px] bg-gradient-to-r from-violet-500 via-indigo-500 to-purple-500"></div>

      <h2 className="text-lg md:text-xl font-bold text-slate-900 dark:text-white flex items-center gap-3.5 mb-6 font-display">
        <span className="w-14 h-14 rounded-2xl flex items-center justify-center text-2xl text-white bg-gradient-to-tr from-violet-500 to-indigo-500 shadow-md shadow-violet-500/10 flex-shrink-0">
          <i className="fas fa-award"></i>
        </span>
        Verified Certifications
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        {certifications.map((cert) => (
          <div key={cert.id} className="border border-slate-200 dark:border-slate-800 bg-slate-50/40 dark:bg-slate-900/40 rounded-2xl p-5 hover:border-indigo-400 dark:hover:border-indigo-600 hover:bg-white dark:hover:bg-slate-900 hover:shadow-md hover:-translate-y-0.5 transition-all duration-300 flex flex-col justify-between group/cert">
            <div>
              <div className="flex items-center justify-between gap-2.5 mb-3.5">
                <span className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-emerald-50 border border-emerald-200 text-emerald-700 text-xs md:text-sm font-extrabold rounded-full uppercase tracking-wider dark:bg-emerald-950/20 dark:border-emerald-900/30 dark:text-emerald-400">
                  <i className="fas fa-circle-check text-xs"></i> Verified
                </span>
                <span className="text-xs md:text-sm font-bold text-slate-600 dark:text-slate-400 uppercase tracking-wider">{cert.issuer}</span>
              </div>
              <h3 className="text-lg md:text-xl font-bold text-slate-800 dark:text-slate-200 group-hover/cert:text-indigo-600 dark:group-hover/cert:text-cyan-400 transition-colors duration-250 font-display">
                {cert.title}
              </h3>
              <p className="text-sm md:text-base text-slate-600 dark:text-slate-400 mt-2 leading-relaxed">
                {cert.description}
              </p>
            </div>

            <div className="mt-5 pt-4 border-t border-slate-100/80 dark:border-slate-800">
              <div className="flex items-center gap-2.5 no-print">
                <a
                  href={cert.verifyUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 inline-flex items-center justify-center gap-2 px-4 py-2.5 bg-indigo-600 hover:bg-indigo-700 text-white text-sm font-bold rounded-xl transition-all duration-200 shadow-sm shadow-indigo-600/10 cursor-pointer"
                >
                  <i className="fas fa-arrow-up-right-from-square text-xs md:text-sm"></i>
                  <span>Verify</span>
                </a>
                <button
                  onClick={() => toggleCertPreview(cert.id)}
                  className="inline-flex items-center justify-center gap-2 px-4 py-2.5 bg-slate-100 hover:bg-slate-200 dark:bg-slate-800 dark:hover:bg-slate-700 text-slate-700 dark:text-slate-300 text-sm font-bold rounded-xl transition-all duration-200 border border-slate-200/50 dark:border-slate-800 cursor-pointer"
                >
                  <i className={`fas ${activeCert === cert.id ? "fa-eye-slash" : "fa-eye"} text-xs md:text-sm`}></i>
                  <span>{activeCert === cert.id ? "Hide" : "Preview"}</span>
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Collapsible Preview Containers */}
      {certifications.map((cert) => (
        activeCert === cert.id && (
          <div key={`preview-${cert.id}`} className="mt-5 border border-slate-200 dark:border-slate-800 rounded-2xl overflow-hidden shadow-sm animate-fade-in no-print">
            <div className="bg-slate-50 dark:bg-slate-900 border-b border-slate-200 dark:border-slate-800 px-4 py-2 flex items-center justify-between">
              <span className="text-xs md:text-sm font-bold text-slate-500 dark:text-slate-400 flex items-center gap-1.5">
                <i className="fas fa-desktop text-slate-400"></i> Certificate Preview — {cert.title}
              </span>
              <button onClick={() => toggleCertPreview(cert.id)} className="text-slate-550 hover:text-slate-700 text-xs font-bold cursor-pointer font-display">Close ✕</button>
            </div>
            <iframe src={cert.iframeUrl} width="100%" height="450px" className="bg-white"></iframe>
          </div>
        )
      ))}

      {/* LinkedIn Card CTA */}
      <div className="mt-6 bg-gradient-to-br from-indigo-900 to-[#1d4ed8] text-white rounded-3xl p-5 md:p-6 flex flex-col sm:flex-row items-center justify-between gap-5 relative overflow-hidden group shadow-md shadow-indigo-900/10 no-print">
        <div className="absolute inset-0 bg-[radial-gradient(#ffffff_1.2px,transparent_1.2px)] [background-size:16px_16px] opacity-10 pointer-events-none"></div>
        <div className="flex items-center gap-4 relative z-10">
          <div className="w-14 h-14 rounded-2xl bg-white/10 flex items-center justify-center text-2xl text-white backdrop-blur-sm">
            <i className="fab fa-linkedin"></i>
          </div>
          <div>
            <h3 className="text-base md:text-lg lg:text-xl font-bold font-display">LinkedIn Certifications</h3>
            <p className="text-sm text-indigo-100/90 mt-1">Explore all of my certifications, including professional training and vendor partnerships.</p>
          </div>
        </div>
        <a
          href={`${personalInfo.linkedin}/details/certifications/`}
          target="_blank"
          rel="noopener noreferrer"
          className="relative z-10 w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-6 py-3 bg-white hover:bg-indigo-50 text-indigo-900 text-sm font-bold rounded-xl transition-all duration-200 shadow-lg shadow-black/10 hover:-translate-y-0.5 cursor-pointer font-display"
        >
          <span>View All Certifications</span>
          <i className="fas fa-arrow-right text-xs md:text-sm"></i>
        </a>
      </div>
    </section>
  );
}
