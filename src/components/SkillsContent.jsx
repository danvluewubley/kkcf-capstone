import React from "react";
import "../styles/drop.css";
import SkillsListCard from "./SkillsListCard";
import { useDarkMode } from "../context/DarkModeContext";
import DarkModeToggleButton from "./DarkModeToggleButton";

function SkillsContent() {
  const { darkMode } = useDarkMode();

  const technicalSkills = [
    { src: "html-5.png", alt: "html 5 icon", text: "HTML5" },
    { src: "css-3.png", alt: "css 3 icon", text: "CSS3" },
    { src: "js.png", alt: "js icon", text: "JavaScript" },
    { src: "python.png", alt: "py icon", text: "Python" },
    { src: "node.png", alt: "node icon", text: "Node" },
    { src: "jest.png", alt: "jest icon", text: "Jest" },
    { src: "react.png", alt: "react icon", text: "React" },
    { src: "flask.png", alt: "flask icon", text: "Flask" },
    { src: "numpy.png", alt: "numpy icon", text: "NumPy" },
    { src: "pandas.png", alt: "pandas icon", text: "Pandas" },
  ];

  const otherSkills = [
    { src: "tailwind.png", alt: "tailwind icon", text: "Tailwind CSS" },
    { src: "bootstrap.png", alt: "bootstrap icon", text: "Bootstrap" },
    { src: "vite.png", alt: "vite icon", text: "Vite" },
    { src: "mysql.png", alt: "mysql icon", text: "MySQL" },
    { src: "sequelize.png", alt: "sequelize icon", text: "Sequelize" },
    { src: "sqlite.png", alt: "sqlite icon", text: "SQLite" },
    { src: "postgresql.png", alt: "postgresql icon", text: "PostgreSQL" },
  ];

  const tools = [
    { src: "vscode.png", alt: "vscode icon", text: "VSCode" },
    {
      src: "illustrator.png",
      alt: "illustrator icon",
      text: "Adobe Illustrator",
    },
    {
      src: darkMode ? "github-dark.png" : "github-light.png",
      alt: "github icon",
      text: "GitHub Pages",
    },
    { src: "figma.png", alt: "figma icon", text: "Figma" },
    {
      src: darkMode ? "github-dark.png" : "github-light.png",
      alt: "github icon",
      text: "GitHub",
    },
    { src: "git.png", alt: "git icon", text: "Git" },
    { src: "postman.png", alt: "postman icon", text: "Postman" },
    {
      src: "stack overflow.png",
      alt: "stack overflow icon",
      text: "Stack Overflow",
    },
  ];

  return (
    <div className={`${darkMode && "dark"}`}>
      <section className="w-screen h-[calc(100vh-4rem)] flex bg-gray-100 dark:bg-[#121212] flex-col md:flex-row">
        <SkillsListCard
          cardName={"Technical Skills"}
          skillsList={technicalSkills}
        />
        <SkillsListCard cardName={"Other Skills"} skillsList={otherSkills} />
        <SkillsListCard cardName={"Programming Tools"} skillsList={tools} />
      </section>
      <DarkModeToggleButton />
    </div>
  );
}

export default SkillsContent;
