import React from "react";
import { Link, useLocation } from "react-router-dom";
import { useDarkMode } from "./DarkModeContext";
import DarkModeToggleButton from "../components/DarkModeToggleButton";

function Nav() {
  const { darkMode } = useDarkMode();

  const location = useLocation();

  return (
    <header className="w-full z-10 h-16">
      <nav className="flex items-center justify-between bg-blue-gray-800 text-white px-6 py-4">
        <div className="text-3xl font-custom">
          <Link to="/">My Portfolio</Link>
        </div>
        <ul className="flex list-none p-0 m-0 space-x-8">
          {["/", "/about", "/projects", "/skills"].map((path, index) => (
            <li key={index}>
              <Link
                to={path}
                className={`relative text-white font-custom text-2xl transition-all duration-300`}
              >
                {path === "/"
                  ? "Home"
                  : path.charAt(1).toUpperCase() + path.slice(2)}
                <span
                  className={`absolute left-0 right-0 bottom-0 h-0.5 bg-white transition-all duration-300 transform scale-x-0 group-hover:scale-x-100 ${
                    location.pathname === path ? "scale-x-100" : ""
                  }`}
                />
              </Link>
            </li>
          ))}
        </ul>
      </nav>
      <DarkModeToggleButton />
    </header>
  );
}

export default Nav;
