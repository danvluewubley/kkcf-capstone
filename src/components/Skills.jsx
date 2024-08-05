import { DefaultAccordion } from "./DefaultAccordion";
import { useEffect } from "react";

function Skills() {
  useEffect(() => {
    document.title = "Skills";
    const link =
      document.querySelector("link[rel*='icon']") ||
      document.createElement("link");
    link.rel = "icon";
    link.href = "/user-skill-gear.png";
    document.head.appendChild(link);
  }, []);
  return (
    <section className="fixed top-0 left-0 w-screen h-screen bg-gray-100">
      <h1 className="text-6xl text-black mt-[8%] ml-[92px] m-0 font-custom font-bold">Skills</h1>
      <DefaultAccordion />
    </section>
  );
}

export default Skills;
