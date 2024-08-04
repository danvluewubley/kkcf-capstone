import React from "react";
import { Link } from "react-router-dom";

function Nav() {
  return (
    <header className="fixed top-0 left-0 w-full z-10 h-[10%]">
      <nav className="flex bg-slate-800 text-white w-full h-full">
        <ul className="flex list-none p-0 m-0 justify-around align-middle w-full h-full">
          <li className="flex">
            <Link
              to="/"
              className="text-white self-center font-custom text-3xl "
            >
              <span className="underline-animation">Home</span>
            </Link>
          </li>
          <li className="flex">
            <Link
              to="/projects"
              className="text-white self-center font-custom text-3xl"
            >
              <span className="underline-animation">Projects</span>
            </Link>
          </li>
          <li className="flex">
            <Link
              to="/skills"
              className="text-white self-center font-custom text-3xl"
            >
              <span className="underline-animation">Skills</span>
            </Link>
          </li>
          <li className="flex">
            <Link
              to="/contact"
              className="text-white self-center font-custom text-3xl"
            >
              <span className="underline-animation">Contact</span>
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Nav;
