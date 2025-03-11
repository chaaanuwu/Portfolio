import React, { useState } from 'react';
import './../styles/Footer.css';
import { handleLinkClick } from "./../JS/script.js";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebook, faInstagram, faDiscord, faGithub } from '@fortawesome/free-brands-svg-icons'

const Footer = ({ name, socials }) => {
    const [isAboutDisabled, setIsAboutDisabled] = useState(true);
    const currentYear = new Date().getFullYear();

    return (
        <footer className="footer">
            {/* Main Footer Content */}
            <div className="footer-content">
                <div className="footer-sections">
                    {/* Left Side - Name and Brief */}
                    <div className="footer-section">
                        <a href="./" className="footer-title">{name}</a>
                        <p className="footer-description">
                            Specialized in creating elegant, user-friendly digital experiences
                            that combine aesthetics with functionality.
                        </p>
                    </div>

                    {/* Middle - Quick Links */}
                    <div className="footer-section">
                        <h4 className="footer-subtitle">Quick Links</h4>
                        <ul className="footer-links">
                            <li>
                                <a
                                    href="#projects"
                                    className={isAboutDisabled ? "disabled" : ""}
                                    onClick={(e) => !isAboutDisabled && handleLinkClick(e, "projects")}
                                >
                                    Projects
                                </a>
                            </li>
                            <li>
                                <a
                                    href="#about"
                                    className={isAboutDisabled ? "disabled" : ""}
                                    onClick={(e) => !isAboutDisabled && handleLinkClick(e, "about")}
                                >
                                    About Me
                                </a>
                            </li>
                            <li>
                                <a
                                    href="#skills"
                                    onClick={(e) => handleLinkClick(e, "skills")}
                                >
                                    Skills
                                </a>
                            </li>
                            <li>
                                <a
                                    href="#contact"
                                    onClick={(e) => handleLinkClick(e, "contact")}
                                >
                                    Contact
                                </a>
                            </li>
                            <li>
                                <a
                                    href="/resume.pdf"
                                    className={`external-link ${isAboutDisabled ? "disabled" : ""}`}
                                    onClick={(e) => !isAboutDisabled && handleLinkClick(e, "resume")}
                                >
                                    Resume <i className="fa-solid fa-arrow-up-right-from-square"></i>
                                </a>
                            </li>
                        </ul>
                    </div>

                    {/* Right Side - Contact */}
                    <div className="footer-section">
                        <h4 className="footer-subtitle">Get In Touch</h4>
                        <p className="footer-description">
                            I'm always open to new opportunities and collaborations.
                        </p>
                        <div className="footer-social">
                            <a target="_blank" href={socials.facebook} className="facebook">
                                <FontAwesomeIcon icon={faFacebook} />
                            </a>
                            <a target="_blank" href={socials.instagram} className="instagram">
                                <FontAwesomeIcon icon={faInstagram} />
                            </a>
                            <a target="_blank" href={socials.discord} className="discord">
                                <FontAwesomeIcon icon={faDiscord} />
                            </a>
                            <a target="_blank" href={socials.github} className="github">
                                <FontAwesomeIcon icon={faGithub} />
                            </a>
                        </div>
                    </div>
                </div>
            </div>

            {/* Copyright Bar */}
            <div className="copyright-bar">
                <div className="copyright-content">
                    <p>© {currentYear} {name}. All rights reserved.</p>
                    <div className="legal-links">
                        <a
                            href="/privacy"
                            className={isAboutDisabled ? "disabled" : ""}
                            onClick={(e) => !isAboutDisabled && handleLinkClick(e, "privacy")}
                        >
                            Privacy Policy
                        </a>
                        <a
                            href="/terms"
                            className={isAboutDisabled ? "disabled" : ""}
                            onClick={(e) => !isAboutDisabled && handleLinkClick(e, "terms")}
                        >
                            Terms of Service
                        </a>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;