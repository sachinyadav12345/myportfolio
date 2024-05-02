import React, { useState } from "react";

import { FaBars } from "react-icons/fa";

import { Link } from "react-router-dom";
function Navbar() {
  const [click, setClick] = useState(false);

  const closeMenu = () => setClick(click);
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-light my-navbar">
        <div className="container">
          <Link to="/" className="navbar-brand">
            <span style={{ fontSize: "15px", color: "white" }}>
          <span>S</span>achin<span>Y</span>aduwanshi
            </span>
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <FaBars className="text-white" />
          </button>
          <div className="collapse navbar-collapse my-toogle" id="navbarSupportedContent">
            <ul
              className={
                click
                  ? "navbar-nav ms-auto mb-2 mb-lg-0 mynavbar-toggle  active"
                  : "navbar-nav ms-auto mb-2 mb-lg-0 "
              }
            >
              <li className="nav-item">
                <a className="nav-link" aria-current="page" href="/">
                  Home
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#about" onClick={closeMenu}>
                  About
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link"
                  href="#Skill-Experience"
                  onClick={closeMenu}
                >
                  Skill & Experience
                </a>
              </li>

              <li className="nav-item">
                <a className="nav-link" href="#contact" onClick={closeMenu}>
                  Contact
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
