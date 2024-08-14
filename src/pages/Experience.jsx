import React from "react";
import usePageTitleAndFavicon from "../hooks/useUpdateTitle";
import ExperienceContent from "../components/ExperienceContent";

function Experience() {
  usePageTitleAndFavicon("Experience", "rating.png");

  return <ExperienceContent />;
}

export default Experience;
