import React from "react";
import ProjectContent from "../components/ProjectContent";
import usePageTitleAndFavicon from "../hooks/useUpdateTitle";

function Projects() {
  usePageTitleAndFavicon("Projects", "diagram-project.png");

  return <ProjectContent />;
}

export default Projects;
