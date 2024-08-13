import React from "react";
import { useDarkMode } from "../context/DarkModeContext";

function DarkModeToggleButton() {
  const { darkMode, toggleDarkMode } = useDarkMode();

  return (
    <button
      className="fixed md:bottom-16 md:right-16 md:w-16 md:h-16 bg-gray-500 rounded-full dark:bg-gray-200 bottom-4 right-4 w-6 h-6 text-[12px] flex items-center justify-center md:text-2xl"
      onClick={toggleDarkMode}
    >
      {darkMode ? "☀️" : "🌙"}
    </button>
  );
}

export default DarkModeToggleButton;
