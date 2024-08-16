import React from "react";
import { useTypewriter, Cursor } from "react-simple-typewriter";
import { useDarkMode } from "../context/DarkModeContext";
import DarkModeToggleButton from "../components/DarkModeToggleButton";
import { Link } from "react-router-dom";

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
      <div className="flex relative min-h-full bg-gray-100 dark:bg-[#121212]">
        <section className="flex flex-col justify-center items-start w-full md:flex-grow px-6 md:px-12 font-custom">
          <h1 className="text-2xl leading-normal md:mb-4 mb-1 dark:text-gray-300 sm:text-7xl">
            Hello, I'm Daniel
          </h1>
          <h2 className="text-1xl leading-normal dark:text-gray-300 md:text-5xl">
            I'm a <span className="text-red-500">{text}</span>
            <Cursor />
          </h2>
          <h2 className="text-1xl leading-normal dark:text-gray-300 md:text-5xl">
            Based in New York
          </h2>
          <p className="md:text-lg dark:text-gray-300 text-sm">
            A passionate tech enthusiast and high school student specializing in
            UI/UX design and backend development. With a strong interest in
            creating intuitive and engaging web applications, I love exploring
            new technologies and constantly seek opportunities to learn and grow
            in the tech field.
          </p>
          <div className="grid grid-cols-2 gap-3">
            <button className="bg-red-500 hover:bg-red-600 dark:bg-red-600 dark:hover:bg-red-500 text-white font-bold py-2 px-4 rounded mt-4">
              <Link to="/contact">Contact Me</Link>
            </button>
            <button className="bg-blue-500 hover:bg-blue-600 dark:bg-blue-600 dark:hover:bg-blue-500 text-white font-bold py-2 px-4 rounded mt-4">
              <Link to="https://danielwuresume.tiiny.site/" target="_blank">
                Resume
              </Link>
            </button>
          </div>
        </section>
        <aside className="h-full md:flex flex-col justify-center items-center font-custom relative flex-grow hidden">
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
