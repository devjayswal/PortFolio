"use client";

import { useTheme } from "@/context/theme-context";
import React from "react";
import { BsMoon, BsSun } from "react-icons/bs";

export default function ThemeSwitch() {
  const { theme, toggleTheme } = useTheme();

  return (
    <button
      className="fixed bottom-5 right-5 h-[3rem] w-[3rem] rounded-lg border border-black/10 bg-white/80 shadow-2xl backdrop-blur-[0.5rem] flex items-center justify-center hover:scale-[1.08] active:scale-95 transition-all dark:border-white/10 dark:bg-gray-950"
      onClick={toggleTheme}
    >
      {theme === "dark" ? <BsSun /> : <BsMoon />}
    </button>
  );
}
