import React, { useState, useEffect } from "react";
import "./../styles/NavSide.css";
import { handleLinkClick, detectActiveSection } from "./../JS/script.js";

const NavSide = () => {
  const [activeSection, setActiveSection] = useState("home");
  const disabledSections = ["about", "projects"];

  useEffect(() => {
    const handleScroll = () => {
      setActiveSection(detectActiveSection());
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div>
      {/* Navigation Links */}
      <ul className="navSide-list">
        {["home", "about", "skills", "projects", "contact"].map((id) => (
          <li key={id}>
            <a
              href={`#${id}`}
              className={`${activeSection === id ? "active" : ""} ${disabledSections.includes(id) ? "disabled" : ""}`}
              style={disabledSections.includes(id) ? { pointerEvents: "none", opacity: 0.5 } : {}}
              onClick={(e) => !disabledSections.includes(id) && handleLinkClick(e, id)}
            >
              {id.charAt(0).toUpperCase() + id.slice(1)}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
  
}

export default NavSide;