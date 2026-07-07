"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";

export default function NotFound() {
  const [mounted, setMounted] = useState(false);
  const [pathname, setPathname] = useState("");
  const [typedText, setTypedText] = useState("");

  useEffect(() => {
    const timer = setTimeout(() => {
      setMounted(true);
      if (typeof window !== "undefined") {
        setPathname(window.location.pathname);
      }
    }, 0);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (!mounted) return;
    const fullText = `$ next-dev-server resolve-route "${pathname || "/unknown-path"}"\n\n[INFO] Initializing route check...\n[WARN] Route resolution failed.\n[ERROR] 404 - Page Not Found.\n\nPossible resolutions:\n  * Redirect to / (Home Resume)\n  * Open sitemap.xml\n\n$ ping -c 1 dhruv-akbari\n64 bytes from surat.gujarat.in: icmp_seq=1 ttl=64 time=5.30ms\nStatus: Active & Available for work.\n\n$ _`;

    let currentIndex = 0;
    let timer: NodeJS.Timeout;

    const type = () => {
      if (currentIndex < fullText.length) {
        setTypedText(fullText.slice(0, currentIndex + 1));
        currentIndex++;
        timer = setTimeout(type, 12);
      }
    };

    type();

    return () => clearTimeout(timer);
  }, [mounted, pathname]);

  if (!mounted) {
    return (
      <div className="flex-1 w-full flex items-center justify-center bg-[#fafaf9] dark:bg-[#020617] py-16">
        <div className="w-8 h-8 border-4 border-indigo-600 border-t-transparent rounded-full animate-spin"></div>
      </div>
    );
  }

  return (
    <div className="relative flex-1 w-full flex flex-col items-center justify-center bg-[#fafaf9] dark:bg-[#020617] text-slate-800 dark:text-slate-100 p-6 overflow-hidden transition-colors duration-300 font-sans">
      
      {/* Background Glows */}
      <div className="absolute inset-0 z-[-1] pointer-events-none">
        <div className="absolute top-[20%] right-[10%] w-[350px] h-[350px] bg-indigo-500/10 dark:bg-indigo-500/20 rounded-full blur-[100px]"></div>
        <div className="absolute bottom-[20%] left-[10%] w-[300px] h-[300px] bg-rose-500/5 dark:bg-rose-500/10 rounded-full blur-[90px]"></div>
      </div>

      <div className="max-w-2xl w-full space-y-8 text-center py-8">
        {/* Glowing 404 tag */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-rose-50 border border-rose-200/60 dark:bg-rose-950/20 dark:border-rose-900/30 text-rose-600 dark:text-rose-400 text-xs md:text-sm font-extrabold tracking-wide uppercase">
          <span className="w-2.5 h-2.5 rounded-full bg-rose-500 animate-pulse"></span>
          Error Code: 404
        </div>

        <h1 className="text-4xl sm:text-5xl font-black tracking-tight text-slate-900 dark:text-white font-display">
          Route Compilation Failed
        </h1>
        <p className="text-slate-500 dark:text-slate-400 text-base md:text-lg max-w-lg mx-auto font-light leading-relaxed">
          The requested URL path <code className="bg-slate-100 dark:bg-slate-800 text-rose-600 dark:text-rose-400 px-2 py-0.5 rounded text-sm font-mono font-bold break-all">{pathname}</code> is not registered.
        </p>

        {/* Mac OS Style Terminal Simulator */}
        <div className="w-full bg-[#0b0f19] border border-slate-800 rounded-2xl shadow-2xl text-left overflow-hidden font-mono text-xs md:text-sm text-emerald-400/90 leading-relaxed max-w-xl mx-auto">
          {/* Header Bar */}
          <div className="bg-[#161b26] px-4 py-3 flex items-center justify-between border-b border-[#1f2533]">
            <div className="flex items-center gap-2">
              <span className="w-3 h-3 rounded-full bg-[#ff5f56] inline-block shadow-sm"></span>
              <span className="w-3 h-3 rounded-full bg-[#ffbd2e] inline-block shadow-sm"></span>
              <span className="w-3 h-3 rounded-full bg-[#27c93f] inline-block shadow-sm"></span>
            </div>
            <span className="text-[10px] font-bold text-slate-500 uppercase tracking-wider select-none">
              zsh — session error
            </span>
            <div className="w-12"></div> {/* spacer */}
          </div>

          {/* Terminal Console */}
          <div className="p-5 md:p-6 min-h-[220px] whitespace-pre-wrap selection:bg-indigo-900 selection:text-white font-mono">
            {typedText}
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-3.5">
          <Link
            href="/"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-7 py-4 bg-indigo-600 hover:bg-indigo-700 text-white text-sm font-bold rounded-2xl transition-all duration-200 shadow-md shadow-indigo-600/10 cursor-pointer font-display"
          >
            <i className="fas fa-arrow-left"></i>
            <span>Return to Resume</span>
          </Link>
          <a
            href="https://dhruvakbarigitfolio.netlify.app"
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-7 py-4 bg-slate-100 hover:bg-slate-200 dark:bg-slate-800 dark:hover:bg-slate-700 text-slate-800 dark:text-slate-200 text-sm font-bold rounded-2xl transition-all duration-200 border border-slate-200/50 dark:border-slate-700 cursor-pointer font-display"
          >
            <i className="fas fa-globe"></i>
            <span>Visit Gitfolio</span>
          </a>
        </div>
      </div>
    </div>
  );
}
