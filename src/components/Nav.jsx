import React from "react";
import { Link } from "react-router-dom";

function Nav() {
  const navbarStyle = {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: "#333",
    color: "white",
    padding: "10px 20px",
  };

  const logoStyle = {
    fontSize: "24px",
  };

  const navLinksStyle = {
    listStyleType: "none",
    padding: 0,
    display: "flex",
    margin: 0,
  };

  const linkStyle = {
    color: "white",
    textDecoration: "none",
    margin: "0 15px",
  };

  const linkHoverStyle = {
    textDecoration: "underline",
  };

  return (
    <header>
      <nav style={navbarStyle}>
        <h1 style={logoStyle}>My Portfolio</h1>
        <ul style={navLinksStyle}>
          <li>
            <Link style={linkStyle} to="/">
              Home
            </Link>
          </li>
          <li>
            <Link style={linkStyle} to="/projects">
              Projects
            </Link>
          </li>
          <li>
            <Link style={linkStyle} to="/skills">
              Skills
            </Link>
          </li>
          <li>
            <Link style={linkStyle} to="/contact">
              Contact
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Nav;
