import React from "react";
import useUpdateTitle from "../hooks/useUpdateTitle";
import AboutContent from "../components/AboutContent";

function About() {
  useUpdateTitle("About", "info.png");

  return <AboutContent />;
}

export default About;
