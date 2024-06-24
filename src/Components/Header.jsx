import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "../Styling/Header.css";

const Header = () => {
  const [isMenuActive, setIsMenuActive] = useState(false);

  const toggleMenu = () => {
    setIsMenuActive(!isMenuActive);
  };

  const closeMenu = () => {
    setIsMenuActive(false);
  };

  useEffect(() => {
    const handleScroll = () => {
      // Get all sections
      const sections = document.querySelectorAll(".section");
      let activeButton = "about";

      // Check which section is currently in view
      sections.forEach((section) => {
        const sectionTop = section.offsetTop;
        const sectionBottom = sectionTop + section.clientHeight;
        const scrollPosition = window.scrollY;

        if (scrollPosition >= sectionTop && scrollPosition < sectionBottom) {
          activeButton = section.getAttribute("data-nav");
        }
      });

      // Update active button
      const navLinks = document.querySelectorAll(".menu button");
      navLinks.forEach((link) => {
        link.classList.remove("active");
        if (link.getAttribute("data-nav") === activeButton) {
          link.classList.add("active");
        }
      });
    };

    // Add event listener for scroll
    window.addEventListener("scroll", handleScroll);

    // Cleanup
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header>
      <div className="header">
        <div className="logo">
          <div>
            <Link style={{ textDecoration: "none" }} to="/">
              <button>
                <img src="LM.jpg" alt="" />
              </button>
            </Link>
          </div>
        </div>
        <div className={`menu ${isMenuActive ? "" : "hidden"}`}>
          <div>
            <Link to="/about">
              <button className="active" data-nav="about">
                About
              </button>
            </Link>
          </div>
          <div>
            <Link style={{ textDecoration: "none" }} to="/projects">
              <button data-nav="projects">Projects</button>
            </Link>
          </div>
          <div>
            <Link style={{ textDecoration: "none" }} to="/cv">
              <button data-nav="cv">CV</button>
            </Link>
          </div>
          <div>
            <Link style={{ textDecoration: "none" }} to="/contact">
              <button data-nav="projects">Contact</button>
            </Link>
          </div>
        </div>
        <div className="hamburger" onClick={toggleMenu}>
          &#9776;
        </div>{" "}
        {isMenuActive && (
          <div className="fullscreen-menu">
            <div className="fullscreen-img"></div>
            <div className="close-button" onClick={closeMenu}>
              &times;
            </div>
            <div className="links">
              <Link to="/about">
                <button>About</button>
              </Link>
              <Link to="/contact">
                <button>Contact</button>
              </Link>
              <Link to="/cv">
                <button>CV</button>
              </Link>
              <Link to="/projects">
                <button>Project</button>
              </Link>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
