import React, { useState } from "react";
import { Link } from "react-scroll";
import "./navbar.css";

export const Navbar = ({ translate, i18n }) => {

  const [active, setActive] = useState(false);

  const closeMenu = () => {
    setActive(!active);
  };

  const [inEnglish, setInEnglish] = useState(true);

  const changeLanguage = (language) => {
    i18n.changeLanguage(language);
    setInEnglish(!inEnglish);
  };
  
  return (
    <div className={active ? "nav-open" : ""}>
      <header id="header">
        <div className="smalllogo">
          <a href="/" className="logolink">
            <h2>
              <i className="fas fa-code"></i>
              {translate("navbar.logo")}
            </h2>
          </a>
        </div>
        <button className="nav-toggle" onClick={closeMenu}>
          <span className="hamburger"></span>
        </button>
        <nav className="nav" id="navbar">
          <div className="logo">
            <a id="logo" href="/">
              <i className="fas fa-code"></i>
              {translate("navbar.logo")}
            </a>
          </div>

          <ul className="nav__list" id="navlinkitems">
            <li className="nav__item">
              <Link
                className="nav__link"
                activeClass="active"
                to="home"
                offset={-500}
                onClick={closeMenu}
              >
                {translate("navbar.home")}
              </Link>
            </li>
            <li className="nav__item">
              <Link
                className="nav__link"
                activeClass="active"
                to="section second"
                offset={0}
                onClick={closeMenu}
              >
                {translate("navbar.aboutMe")}
              </Link>
            </li>
            <li className="nav__item">
              <Link
                className="nav__link"
                activeClass="active"
                to="section third"
                offset={0}
                onClick={closeMenu}
              >
                {translate("navbar.skills")}
              </Link>
            </li>
            <li className="nav__item">
              <Link
                className="nav__link"
                activeClass="active"
                to="section quarter"
                offset={0}
                onClick={closeMenu}
              >
                {translate("navbar.projects")}
              </Link>
            </li>

            <li className="nav__item">
              <Link
                className="nav__link"
                activeClass="active"
                to="section fifth"
                offset={0}
                onClick={closeMenu}
              >
                {translate("navbar.contactMe")}
              </Link>
            </li>
            <li className="nav__item">
              <Link
                className="nav__link last"
                activeClass="active"
                to="nav"
                onClick={
                  inEnglish
                    ? () => changeLanguage("en")
                    : () => changeLanguage("es")
                }
              >
                {translate("navbar.translate")}
              </Link>
            </li>
          </ul>
        </nav>
      </header>
    </div>
  );
};
