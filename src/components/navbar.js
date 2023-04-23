import React, { useState, useRef, useEffect } from "react";
import "../css/navbar.css";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeLink, setActiveLink] = useState("Home");
  const navRef = useRef(null);
  const barRef = useRef(null);

  const handleMenuToggle = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleLinkClick = (link) => {
    setActiveLink(link);
    setIsMenuOpen(false);
  };

  useEffect(() => {
    const nav = navRef.current;
    const bar = barRef.current;
    const activeLinkElement = nav.querySelector(
      `.navbar-link[data-link="${activeLink}"]`
    );

    // Set initial position of the bar
    bar.style.width = `${activeLinkElement.offsetWidth}px`;
    bar.style.left = `${activeLinkElement.offsetLeft}px`;

    // Animate the bar on page load or link click
    const animateBar = () => {
      bar.style.width = `${activeLinkElement.offsetWidth}px`;
      bar.style.left = `${activeLinkElement.offsetLeft}px`;
    };

    animateBar();

    window.addEventListener("resize", animateBar);

    return () => {
      window.removeEventListener("resize", animateBar);
    };
  }, [activeLink]);

  return (
    <nav className="navbar" ref={navRef}>
      <div className="navbar-left">
        <a href="/" className="navbar-brand">
          Your Name
        </a>
      </div>
      <div className="navbar-middle">
        <button
          className="navbar-menu-button"
          onClick={handleMenuToggle}
          aria-label="Toggle Menu"
        >
          Menu
        </button>
        <div
          className={`navbar-menu ${isMenuOpen ? "open" : ""}`}
          onClick={handleMenuToggle}
        >
          <a
            href="/"
            className={`navbar-link ${activeLink === "Home" ? "active" : ""}`}
            data-link="Home"
            onClick={() => handleLinkClick("Home")}
          >
            Home
          </a>
          <a
            href="/portfolio"
            className={`navbar-link ${
              activeLink === "Portfolio" ? "active" : ""
            }`}
            data-link="Portfolio"
            onClick={() => handleLinkClick("Portfolio")}
          >
            Portfolio
          </a>
          <a
            href="/resume"
            className={`navbar-link ${activeLink === "Resume" ? "active" : ""}`}
            data-link="Resume"
            onClick={() => handleLinkClick("Resume")}
          >
            Resume
          </a>
        </div>
        <div className="navbar-bar" ref={barRef}></div>
      </div>
      <div className="navbar-right">
        <a href="/contact" className="navbar-button">
          Contact Me
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
