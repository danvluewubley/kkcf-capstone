import React from "react";
import SkillList from "../components/SkillList";

function SkillsContent() {
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
    { src: "github.png", alt: "github icon", text: "GitHub Pages" },
    { src: "figma.png", alt: "figma icon", text: "Figma" },
    { src: "github.png", alt: "github icon", text: "GitHub" },
    { src: "git.png", alt: "git icon", text: "Git" },
    { src: "postman.png", alt: "postman icon", text: "Postman" },
    {
      src: "stack overflow.png",
      alt: "stack overflow icon",
      text: "Stack Overflow",
    },
  ];

  return (
    <section className="flex relative w-screen max-h-screen bg-gray-100">
      <div className="flex justify-center items-center w-1/3">
        <div className="flex flex-col justify-center items-center w-[90%] h-[80%] bg-gray-300 rounded-lg transform hover:-translate-y-[1px] hover:scale-[1.03] transition-transform">
          <h2 className="text-4xl font-custom text-center pb-5 font-bold">
            Technical Skills
          </h2>
          <ul className="text-2xl font-custom text-center">
            {technicalSkills.map((skill, index) => (
              <SkillList key={index} {...skill} />
            ))}
          </ul>
        </div>
      </div>
      <div className="flex justify-center items-center w-1/3">
        <div className="flex flex-col justify-center items-center w-[90%] h-[80%] bg-gray-300 rounded-lg transform hover:-translate-y-[1px] hover:scale-[1.03] transition-transform">
          <h2 className="text-4xl font-custom text-center pb-5 font-bold">
            Other Skills
          </h2>
          <ul className="text-2xl font-custom text-center">
            {otherSkills.map((skill, index) => (
              <SkillList key={index} {...skill} />
            ))}
          </ul>
        </div>
      </div>
      <div className="flex justify-center items-center w-1/3">
        <div className="flex flex-col justify-center items-center w-[90%] h-[80%] bg-gray-300 rounded-lg transform hover:-translate-y-[1px] hover:scale-[1.03] transition-transform">
          <h2 className="text-4xl font-custom text-center pb-5 font-bold">
            Programming Tools
          </h2>
          <ul className="text-2xl font-custom text-center">
            {tools.map((skill, index) => (
              <SkillList key={index} {...skill} />
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}

export default SkillsContent;
