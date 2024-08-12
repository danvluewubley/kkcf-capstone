import React from "react";
import { CarouselWithContent } from "../components/CarouselWithContent";
import usePageTitleAndFavicon from "../hooks/useUpdateTitle";

function Projects() {
  usePageTitleAndFavicon("Projects", "diagram-project.png");

  return <CarouselWithContent />;
}

export default Projects;
