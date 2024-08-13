import React from "react";
import SocialIcon from "../components/SocialIcon";
import DarkModeToggleButton from "../components/DarkModeToggleButton";
import { useDarkMode } from "../context/DarkModeContext";
import "../styles/slide.css";
import "../styles/border.css";

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
      <div className="w-screen md:h-[calc(100vh-4rem)] flex bg-gray-100 overflow-hidden dark:bg-[#121212]">
        <section className="flex flex-col justify-center items-center w-1/2 h-full slide-from-left flex-grow">
          <h1 className="md:text-5xl text-2xl font-custom font-bold pb-4 dark:text-gray-300 pt-10">
            About
          </h1>
          <p className="font-custom md:text-2xl w-[90%] text-base text-center mx-auto dark:text-gray-300">
            I'm Daniel, a passionate tech enthusiast with a strong interest in
            finance. As a high school student at QHSS @ York College, I
            specialize in UI/UX design and backend development, constantly
            exploring new technologies and innovative solutions. Based in New
            York, I strive to create intuitive and engaging web applications
            while seeking opportunities to grow in the tech and finance fields.
            My journey is driven by curiosity and a desire to inspire others
            through my work.
          </p>
          <img
            src="/headshot.jpg"
            alt="headshot"
            className="md:h-1/2 md:w-1/2 h-[200px] rounded-full border-4 border-gray-300 object-cover mt-4 md:hidden"
          />
          <h2 className="md:text-5xl text-2xl font-custom font-bold pt-10 pb-5 dark:text-gray-300">
            Contact
          </h2>
          <div className="grid grid-flow-col gap-4 w-1/2 justify-around md:p-0 pb-10">
            {socialLinks.map((social, index) => (
              <SocialIcon key={index} {...social} />
            ))}
          </div>
        </section>

        <aside className="w-1/2 justify-center items-center slide-from-right hidden md:flex flex-grow">
          <div className="border-animation md:h-1/2">
            <img
              src="/headshot.jpg"
              alt="headshot"
              className="md:h-full h-[200px] object-cover"
            />
          </div>
        </aside>
        <DarkModeToggleButton />
      </div>
    </div>
  );
}

export default AboutContent;
