import React from "react";
import Timeline from "./Timeline";
import { useDarkMode } from "../context/DarkModeContext";
import DarkModeToggleButton from "../components/DarkModeToggleButton";

function ExperienceContent() {
  const { darkMode } = useDarkMode();
  return (
    <div
      className={`${
        darkMode && "dark"
      } min-h-screen max-w-screen`}
    >
      <div className="dark:bg-[#121212] w-full h-full flex justify-center">
        <Timeline />
        <DarkModeToggleButton />
      </div>
    </div>
  );
}

export default ExperienceContent;
