import React from "react";
import SkillsContent from "../components/SkillsContent";
import usePageTitleAndFavicon from "../hooks/useUpdateTitle";

function Skills() {
  usePageTitleAndFavicon("Skills", "user-skill-gear.png");

  return <SkillsContent />;
}

export default Skills;
