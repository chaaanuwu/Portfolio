import React, { useState, useEffect } from "react";
import "./../styles/NavBar.css";
import { handleLinkClick } from "./../JS/script.js";

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isAboutDisabled, setIsAboutDisabled] = useState(true);

  useEffect(() => {
    const hamburger = document.querySelector(".hamburger");

    const handleScroll = () => {
      if (window.scrollY > 0) {
        hamburger.style.backgroundColor = "transparent";
      } else {
        hamburger.style.backgroundColor = "transparent";
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // Function to close the mobile menu
  const closeMenu = () => setIsOpen(false);

  return (
    <nav className="navbar">
      {/* Hamburger Button */}
      <div className="hamburger" onClick={() => setIsOpen(!isOpen)}>
        <svg width="40" height="40" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M3.5625 6C3.5625 5.58579 3.89829 5.25 4.3125 5.25H20.3125C20.7267 5.25 21.0625 5.58579 21.0625 6C21.0625 6.41421 20.7267 6.75 20.3125 6.75L4.3125 6.75C3.89829 6.75 3.5625 6.41422 3.5625 6Z" fill="#ffffff" />
          <path d="M3.5625 18C3.5625 17.5858 3.89829 17.25 4.3125 17.25L20.3125 17.25C20.7267 17.25 21.0625 17.5858 21.0625 18C21.0625 18.4142 20.7267 18.75 20.3125 18.75L4.3125 18.75C3.89829 18.75 3.5625 18.4142 3.5625 18Z" fill="#ffffff" />
          <path d="M4.3125 11.25C3.89829 11.25 3.5625 11.5858 3.5625 12C3.5625 12.4142 3.89829 12.75 4.3125 12.75L20.3125 12.75C20.7267 12.75 21.0625 12.4142 21.0625 12C21.0625 11.5858 20.7267 11.25 20.3125 11.25L4.3125 11.25Z" fill="#ffffff" />
        </svg>
      </div>

      {/* Navigation Bar */}
      <div className={`nav-links ${isOpen ? "active" : ""}`}>
        {/* Close Button */}
        <div className="close-btn" onClick={closeMenu}>
          <svg width="40" height="40" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M6.21967 7.28033C5.92678 6.98744 5.92678 6.51256 6.21967 6.21967C6.51256 5.92678 6.98744 5.92678 7.28033 6.21967L11.999 10.9384L16.7176 6.2198C17.0105 5.92691 17.4854 5.92691 17.7782 6.2198C18.0711 6.51269 18.0711 6.98757 17.7782 7.28046L13.0597 11.999L17.7782 16.7176C18.0711 17.0105 18.0711 17.4854 17.7782 17.7782C17.4854 18.0711 17.0105 18.0711 16.7176 17.7782L11.999 13.0597L7.28033 17.7784C6.98744 18.0713 6.51256 18.0713 6.21967 17.7784C5.92678 17.4855 5.92678 17.0106 6.21967 16.7177L10.9384 11.999L6.21967 7.28033Z" fill="#ffffff" />
          </svg>
        </div>

        {/* Navigation Links */}
        <ul className="nav-list">
          <li><a href="#home" onClick={(e) => handleLinkClick(e, "home", closeMenu)}>Home</a></li>
          <li><a href="#about" className={isAboutDisabled ? "disabled" : ""} onClick={(e) => !isAboutDisabled && handleLinkClick(e, "about", closeMenu)}>About</a></li>
          <li><a href="#skills" onClick={(e) => handleLinkClick(e, "skills", closeMenu)}>Skills</a></li>
          <li><a href="#about" className={isAboutDisabled ? "disabled" : ""} onClick={(e) => !isAboutDisabled && handleLinkClick(e, "about", closeMenu)}>Projects</a></li>
          <li><a href="#contact" onClick={(e) => handleLinkClick(e, "contact", closeMenu)}>Contact</a></li>
        </ul>
      </div>
    </nav>
  );
}

export default NavBar;