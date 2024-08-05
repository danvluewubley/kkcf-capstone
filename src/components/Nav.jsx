import React from "react";
import { Link, useLocation } from "react-router-dom";

function Nav() {
  const location = useLocation();

  return (
    <header className="fixed top-0 left-0 w-full z-10 h-[10%]">
      <nav className="flex items-center justify-between bg-blue-gray-800 text-white px-6 py-4">
        <div className="text-3xl font-custom">
          <Link to="/">My Portfolio</Link>
        </div>
        <ul className="flex list-none p-0 m-0 space-x-8">
          {["/", "/about", "/projects", "/skills"].map((path, index) => (
            <li key={index}>
              <Link
                to={path}
                className={`text-white font-custom text-2xl transition duration-300 ${
                  location.pathname === path ? "underline" : ""
                }`}
              >
                {path === "/"
                  ? "Home"
                  : path.charAt(1).toUpperCase() + path.slice(2)}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}

export default Nav;
