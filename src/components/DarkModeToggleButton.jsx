import React from "react";
import { useDarkMode } from "./DarkModeContext";

function DarkModeToggleButton() {
  const { darkMode, toggleDarkMode } = useDarkMode();

  return (
    <button
      className="absolute bottom-16 right-16 w-16 h-16 bg-gray-500 rounded-full dark:bg-gray-200"
      onClick={toggleDarkMode}
    >
      {darkMode ? "☀️" : "🌙"}
    </button>
  );
}

export default DarkModeToggleButton;
