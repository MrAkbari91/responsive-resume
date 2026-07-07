"use client";

import { useTheme } from "./ThemeProvider";
import { useEffect, useState } from "react";

export default function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return (
      <div className="w-11 h-11 rounded-2xl border border-slate-200/80 bg-white/70 dark:border-slate-800 dark:bg-slate-900/70 opacity-50 flex items-center justify-center">
        <i className="fa-solid fa-moon text-slate-400 text-sm"></i>
      </div>
    );
  }

  return (
    <button
      onClick={toggleTheme}
      className="w-11 h-11 rounded-2xl border border-slate-200/85 bg-white/70 dark:border-slate-800 dark:bg-slate-900/70 hover:bg-slate-50 dark:hover:bg-slate-800/80 text-slate-700 dark:text-slate-300 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-indigo-500/50 shadow-sm flex items-center justify-center cursor-pointer"
      aria-label="Toggle theme"
    >
      {theme === "light" ? (
        <i className="fa-solid fa-moon text-base transition-transform duration-200 rotate-0 hover:rotate-12"></i>
      ) : (
        <i className="fa-solid fa-sun text-base transition-transform duration-200 rotate-0 hover:rotate-45"></i>
      )}
    </button>
  );
}
