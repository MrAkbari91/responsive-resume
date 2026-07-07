"use client";

import { useEffect } from "react";
import Link from "next/link";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    // Log the error to an error reporting service
    console.error(error);
  }, [error]);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-6 text-center bg-[#fafaf9] text-slate-800 dark:bg-[#020617] dark:text-[#F8FAFC]">
      <div className="w-16 h-16 rounded-2xl flex items-center justify-center bg-rose-50 text-rose-600 dark:bg-rose-950/20 dark:text-rose-400 mb-6 shadow-sm">
        <i className="fas fa-triangle-exclamation text-3xl"></i>
      </div>
      <h1 className="text-2xl font-bold font-display">
        Something went wrong!
      </h1>
      <p className="text-slate-500 dark:text-slate-400 text-sm max-w-md mt-2">
        An unexpected error occurred while rendering the resume.
      </p>
      <div className="flex items-center gap-4 mt-8">
        <button
          onClick={() => reset()}
          className="px-6 py-3 bg-indigo-600 hover:bg-indigo-700 text-white text-xs font-bold uppercase tracking-wider rounded-xl transition-all duration-200 shadow-md shadow-indigo-600/10 cursor-pointer"
        >
          Try Again
        </button>
        <Link
          href="/"
          className="px-6 py-3 bg-slate-100 hover:bg-slate-200 dark:bg-slate-800 dark:hover:bg-slate-700 text-slate-700 dark:text-slate-300 text-xs font-bold uppercase tracking-wider rounded-xl transition-all duration-200 cursor-pointer"
        >
          Home
        </Link>
      </div>
    </div>
  );
}
