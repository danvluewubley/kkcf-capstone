import React from "react";
import SocialIcon from "../components/SocialIcon";
import DarkModeToggleButton from "../components/DarkModeToggleButton";
import { useDarkMode } from "./DarkModeContext";
import "../styles/slide.css";

function AboutContent() {
  const { darkMode } = useDarkMode();

  const socialLinks = [
    {
      src: "linkedin.png",
      alt: "LinkedIn profile",
      link: "https://www.linkedin.com/in/daniel-wu-b1a64929a/",
    },
    {
      src: darkMode ? "github-dark.png" : "github-light.png",
      alt: "GitHub profile",
      link: "https://github.com/danvluewubley",
    },
    {
      src: "gmail.png",
      alt: "Email Daniel",
      link: "mailto:danielw72908@gmail.com",
    },
  ];

  return (
    <div className={`${darkMode && "dark"}`}>
      <div className="w-screen h-[calc(100vh-4rem)] flex bg-gray-100 overflow-hidden dark:bg-[#121212]">
        <section className="w-1/2 h-full flex flex-col justify-center items-center slide-from-left">
          <h1 className="text-5xl font-custom font-bold pb-4 dark:text-gray-300">
            About
          </h1>
          <p className="font-custom text-2xl text-center w-[90%] mx-auto dark:text-gray-300">
            I'm Daniel, a passionate tech enthusiast with a strong interest in
            finance. As a high school student at QHSS @ York College, I
            specialize in UI/UX design and backend development, constantly
            exploring new technologies and innovative solutions. Based in New
            York, I strive to create intuitive and engaging web applications
            while seeking opportunities to grow in the tech and finance fields.
            My journey is driven by curiosity and a desire to inspire others
            through my work.
          </p>
          <h2 className="text-5xl font-custom font-bold pt-10 pb-5 dark:text-gray-300">
            Contact
          </h2>
          <div className="grid grid-flow-col gap-4 w-1/2 justify-around">
            {socialLinks.map((social, index) => (
              <SocialIcon key={index} {...social} />
            ))}
          </div>
        </section>
        <aside className="w-1/2 flex justify-center items-center slide-from-right">
          <img
            src="/headshot.jpg"
            alt="headshot"
            className="h-1/2 w-1/2 rounded-full border-4 border-gray-300 object-cover"
          />
        </aside>
        <DarkModeToggleButton />
      </div>
    </div>
  );
}

export default AboutContent;
