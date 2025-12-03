import React, { useState } from "react";
import "./navbar.css";
import logo from "./NextHorizon-logo.png";

const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <nav className="navbar">
            <div className="navbar-container">
                {/* Logo Section - Left */}
                <div className="navbar-logo">
                    <img src={logo} alt="Next Horizon Logo" className="logo-image" />
                    <div className="logo-text">
                        <span className="logo-title">Next Horizon</span>
                        <span className="logo-subtitle">Educational Community</span>
                    </div>
                </div>

                {/* Right Section - Links and Button */}
                <div className="navbar-right">
                    {/* Navigation Links - Desktop */}
                    <div className="navbar-links">
                        <a href="#features" className="nav-link">Features</a>
                        <a href="#years" className="nav-link">Years</a>
                        <a href="#courses" className="nav-link">Courses</a>
                        <a href="#about" className="nav-link">About</a>
                    </div>

                    {/* Get Started Button */}
                    <button className="navbar-cta-button">
                        Get Started
                    </button>

                    {/* Hamburger Menu Icon */}
                    <div className="hamburger-icon" onClick={toggleMenu}>
                        <span className={`bar ${isMenuOpen ? "open" : ""}`}></span>
                        <span className={`bar ${isMenuOpen ? "open" : ""}`}></span>
                        <span className={`bar ${isMenuOpen ? "open" : ""}`}></span>
                    </div>
                </div>
            </div>

            {/* Mobile Menu Backdrop */}
            <div
                className={`mobile-backdrop ${isMenuOpen ? "active" : ""}`}
                onClick={toggleMenu}
            ></div>

            {/* Mobile Menu Dropdown */}
            <div className={`mobile-menu ${isMenuOpen ? "active" : ""}`}>
                <a href="#features" className="mobile-nav-link" onClick={toggleMenu}>Features</a>
                <a href="#years" className="mobile-nav-link" onClick={toggleMenu}>Years</a>
                <a href="#courses" className="mobile-nav-link" onClick={toggleMenu}>Courses</a>
                <a href="#about" className="mobile-nav-link" onClick={toggleMenu}>About</a>
            </div>
        </nav>
    );
};

export default Navbar;
