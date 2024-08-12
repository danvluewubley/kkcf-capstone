import React, { useEffect } from "react";
import { useTypewriter, Cursor } from "react-simple-typewriter";

function Home() {
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

  useEffect(() => {
    document.title = "Home";
    const link =
      document.querySelector("link[rel*='icon']") ||
      document.createElement("link");
    link.rel = "icon";
    link.href = "/house-chimney.png";
    document.head.appendChild(link);
  }, []);

  return (
    <div className="flex relative max-h-screen">
      <section className="flex flex-col justify-center items-start w-full md:w-1/2 px-6 md:px-12 bg-gray-100 font-custom">
        <h1 className="text-7xl leading-normal mb-4">Hello, I'm Daniel</h1>
        <h2 className="text-5xl leading-normal">
          I'm a <span className="text-red-500">{text}</span>
          <Cursor />
        </h2>
        <h2 className="text-5xl leading-normal">Based in New York</h2>
        <p className="text-lg">
          A passionate tech enthusiast and high school student specializing in
          UI/UX design and backend development. With a strong interest in
          creating intuitive and engaging web applications, I love exploring new
          technologies and constantly seek opportunities to learn and grow in
          the tech field.
        </p>
      </section>
      <aside className="h-full flex flex-col justify-center items-center bg-gray-100 font-custom relative w-1/2">
        <img
          src="/coding-image.jpg"
          alt="placeholder"
          className="w-3/4 md:w-[90%] rounded-2xl"
        />
      </aside>
    </div>
  );
}

export default Home;
