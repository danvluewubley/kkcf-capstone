import React from "react";
import { useTypewriter, Cursor } from "react-simple-typewriter";
import { useDarkMode } from "./DarkModeContext";
import DarkModeToggleButton from "../components/DarkModeToggleButton";

function HomeContent() {
  const { darkMode } = useDarkMode();

  const [text] = useTypewriter({
    words: [
      "UI/UX Developer",
      "Backend Developer",
      "High School Student",
      "Tech Enthusiast",
    ],
    loop: true,
    deleteSpeed: 50,
  });

  return (
    <div className={`${darkMode && "dark"}`}>
      <div className="flex relative min-h-full bg-neutral-100 dark:bg-[#121212]">
        <section className="flex flex-col justify-center items-start w-full md:w-1/2 px-6 md:px-12 font-custom">
          <h1 className="text-7xl leading-normal mb-4 dark:text-gray-300">
            Hello, I'm Daniel
          </h1>
          <h2 className="text-5xl leading-normal dark:text-gray-300">
            I'm a <span className="text-red-500">{text}</span>
            <Cursor />
          </h2>
          <h2 className="text-5xl leading-normal dark:text-gray-300">
            Based in New York
          </h2>
          <p className="text-lg dark:text-gray-300">
            A passionate tech enthusiast and high school student specializing in
            UI/UX design and backend development. With a strong interest in
            creating intuitive and engaging web applications, I love exploring
            new technologies and constantly seek opportunities to learn and grow
            in the tech field.
          </p>
        </section>
        <aside className="h-full flex flex-col justify-center items-center font-custom relative w-1/2">
          <img
            src="undraw-icon.png"
            alt="placeholder"
            className="w-3/4 md:w-[90%] rounded-2xl"
          />
        </aside>
      </div>
      <DarkModeToggleButton />
    </div>
  );
}

export default HomeContent;
