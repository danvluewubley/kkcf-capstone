import React from "react";
import { CarouselWithContent } from "./CarouselWithContent";
import { useEffect } from "react";

function Projects() {
  useEffect(() => {
    document.title = "Projects";
    const link =
      document.querySelector("link[rel*='icon']") ||
      document.createElement("link");
    link.rel = "icon";
    link.href = "/diagram-project.png";
    document.head.appendChild(link);    
  }, []);

  return (
    <>
      <CarouselWithContent />
    </>
  );
}

export default Projects;
