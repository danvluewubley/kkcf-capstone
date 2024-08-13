import React from "react";
import { CarouselWithContent } from "./CarouselWithContent";
import { useDarkMode } from "../context/DarkModeContext";
import DarkModeToggleButton from "./DarkModeToggleButton";

function ProjectContent() {
  const { darkMode } = useDarkMode();
  
  return (
    <div className={`${darkMode && "dark"}`}>
      <CarouselWithContent />
      <DarkModeToggleButton />
    </div>
  );
}

export default ProjectContent;
