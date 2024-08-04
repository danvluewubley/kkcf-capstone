import React from "react";
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

  return (
    <div className="flex">
      <section className="h-[100vh] flex flex-col justify-center items-center bg-gray-100 font-custom relative w-1/2">
        <h1 className="inline-block w-full text-7xl leading-normal pl-24">
          Hello, I'm Daniel
        </h1>
        <h2 className="inline-block w-full text-5xl leading-normal pl-24">
          I'm a <span className="text-red-500">{text}</span>
          <Cursor />
        </h2>
        <h2 className="inline-block w-full text-5xl leading-normal pl-24">
          Based in New York
        </h2>
        <p className="inline-block w-full pl-24">
          A passionate tech enthusiast and high school student specializing in
          UI/UX design and backend development. With a strong interest in
          creating intuitive and engaging web applications, I love exploring new
          technologies and constantly seek opportunities to learn and grow in
          the tech field.
        </p>
      </section>
      <aside className="h-[100vh] flex flex-col justify-center items-center bg-gray-100 font-custom relative w-1/2"></aside>
    </div>
  );
}

export default Home;
