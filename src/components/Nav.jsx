import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";

function Nav() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="w-full z-10 h-16 sticky top-0">
      <nav className="bg-gray-800 text-white px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="text-3xl font-custom">
            <Link to="/">My Portfolio</Link>
          </div>
          <button
            onClick={toggleMenu}
            type="button"
            className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
            aria-controls="navbar-default"
            aria-expanded={isMenuOpen}
          >
            <span className="sr-only">Open main menu</span>
            <svg
              className="w-5 h-5"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 17 14"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M1 1h15M1 7h15M1 13h15"
              />
            </svg>
          </button>
          {/* Desktop Menu */}
          <div className="hidden md:flex md:ml-auto">
            <ul className="flex list-none p-0 m-0 space-x-8">
              {["/", "/about", "/projects", "/skills", "/contact"].map(
                (path, index) => (
                  <li key={index}>
                    <Link
                      to={path}
                      className={`relative text-white font-custom text-2xl transition-all duration-300 ${
                        path === "/contact"
                          ? "bg-red-500 text-white px-4 py-2 rounded"
                          : ""
                      }`}
                    >
                      {path === "/"
                        ? "Home"
                        : path.charAt(1).toUpperCase() + path.slice(2)}
                      <span
                        className={`absolute left-0 right-0 bottom-0 h-0.5 bg-white transition-all duration-300 transform scale-x-0 ${
                          location.pathname === path && path !== "/contact"
                            ? "scale-x-100"
                            : ""
                        }`}
                      />
                    </Link>
                  </li>
                )
              )}
            </ul>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden mt-4">
            <ul className="flex flex-col list-none p-0 m-0 space-y-2">
              {["/", "/about", "/projects", "/skills", "/contact"].map(
                (path, index) => (
                  <li key={index}>
                    <Link
                      to={path}
                      className={`relative text-white font-custom text-2xl transition-all duration-300 ${
                        path === "/contact"
                          ? "bg-red-500 text-white px-4 py-1 rounded"
                          : ""
                      }`}
                    >
                      {path === "/"
                        ? "Home"
                        : path.charAt(1).toUpperCase() + path.slice(2)}
                      <span
                        className={`absolute left-0 right-0 bottom-0 h-0.5 bg-white transition-all duration-300 transform scale-x-0 ${
                          location.pathname === path && path !== "/contact"
                            ? "scale-x-100"
                            : ""
                        }`}
                      />
                    </Link>
                  </li>
                )
              )}
            </ul>
          </div>
        )}
      </nav>
    </header>
  );
}

export default Nav;
