import React from "react";
import "./footer.css";
import { FaFacebook, FaInstagram, FaLinkedin } from "react-icons/fa6";
import { RiMailLine, RiPhoneLine } from "react-icons/ri";
import logo from "../navbar/NextHorizon-logo.png"; // Assuming logo is here based on Navbar

const Footer = () => {
    return (
        <footer className="footer fa-section">
            <div className="footer-container">
                <div className="footer-row">
                    {/* Column 1: Brand & Socials */}
                    <div className="footer-col brand-col">
                        <div className="footer-logo">
                            <img src={logo} alt="Next Horizon" className="footer-logo-img" />
                            <span className="footer-logo-text">Next <span className="highlight">Horizon</span></span>
                        </div>
                        <p className="footer-desc">
                            Empowering University students with comprehensive learning resources for academic excellence
                        </p>
                        <div className="footer-socials">
                            <a href="#" className="social-icon"><FaFacebook /></a>
                            <a href="#" className="social-icon"><FaInstagram /></a>
                            <a href="#" className="social-icon"><FaLinkedin /></a>
                        </div>
                    </div>

                    {/* Column 2: Quick Links */}
                    <div className="footer-col">
                        <h3 className="footer-title">Quick Links</h3>
                        <ul className="footer-links">
                            <li><a href="#features">Features</a></li>
                            <li><a href="#years">Academic Years</a></li>
                            <li><a href="#courses">Courses</a></li>
                            <li><a href="#about">About Us</a></li>
                        </ul>
                    </div>

                    {/* Column 3: Resources */}
                    <div className="footer-col">
                        <h3 className="footer-title">Resources</h3>
                        <ul className="footer-links">
                            <li><a href="#">Video Lectures</a></li>
                            <li><a href="#">Past Exams</a></li>
                            <li><a href="#">Study Summaries</a></li>
                            <li><a href="#">Schedule Meeting</a></li>
                        </ul>
                    </div>

                    {/* Column 4: Contact Us */}
                    <div className="footer-col">
                        <h3 className="footer-title">Contact Us</h3>
                        <ul className="footer-contact">
                            <li>
                                <RiMailLine className="contact-icon" />
                                <a href="mailto:info@nexthorizon.edu">info@nexthorizon.edu</a>
                            </li>
                            <li>
                                <RiPhoneLine className="contact-icon" />
                                <a href="tel:+9611234567">+961 1 234 567</a>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="footer-bottom">
                    <div className="footer-divider"></div>
                    <p className="copyright-text">
                        @2025 Next Horizon. All rights reserved.
                    </p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
