import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { RiArrowDownSLine } from "react-icons/ri";
import "./navbar.css";
import logo from "./NextHorizon-logo.png";

const Navbar = ({ simple, showProfile, userName = "User" }) => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);
    const [isProfileOpen, setIsProfileOpen] = useState(false);
    const navigate = useNavigate();

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    const toggleProfileDropdown = () => {
        setIsProfileOpen(!isProfileOpen);
    };

    // Scroll Effect
    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 20) {
                setIsScrolled(true);
            } else {
                setIsScrolled(false);
            }
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    // Close dropdown when clicking outside
    useEffect(() => {
        const closeMenu = (e) => {
            if (isProfileOpen && !e.target.closest('.user-profile-wrapper')) {
                setIsProfileOpen(false);
            }
        };
        document.addEventListener('click', closeMenu);
        return () => document.removeEventListener('click', closeMenu);
    }, [isProfileOpen]);

    return (
        <nav className={`navbar ${isScrolled ? "scrolled" : ""}`}>
            <div className={`navbar-container ${simple ? "simple-navbar" : ""}`}>
                {/* Logo Section - Left */}
                <div className="navbar-logo" onClick={() => navigate("/")} style={{ cursor: "pointer" }}>
                    <img src={logo} alt="Next Horizon Logo" className="logo-image" />
                    <div className="logo-text">
                        <span className="logo-title">Next Horizon</span>
                        <span className="logo-subtitle">Educational Community</span>
                    </div>
                </div>

                {/* Right Section - Main Navigation (Default) */}
                {!simple && !showProfile && (
                    <div className="navbar-right">
                        {/* Navigation Links - Desktop */}
                        <div className="navbar-links">
                            <a href="#features" className="nav-link">Features</a>
                            <a href="#years" className="nav-link">Years</a>
                            <a href="#courses" className="nav-link">Courses</a>
                            <a href="#about" className="nav-link">About</a>
                        </div>

                        {/* Get Started Button */}
                        <button className="navbar-cta-button" onClick={() => navigate("/login")}>
                            Get Started
                        </button>

                        {/* Hamburger Menu Icon */}
                        <div className="hamburger-icon" onClick={toggleMenu}>
                            <span className={`bar ${isMenuOpen ? "open" : ""}`}></span>
                            <span className={`bar ${isMenuOpen ? "open" : ""}`}></span>
                            <span className={`bar ${isMenuOpen ? "open" : ""}`}></span>
                        </div>
                    </div>
                )}

                {/* Right Section - Profile View (For Courses/Dashboard) */}
                {showProfile && (
                    <div className="navbar-right profile-view">
                        {/* Wrapper for relative positioning of dropdown */}
                        <div className="user-profile-wrapper" style={{ position: 'relative' }} onClick={toggleProfileDropdown}>
                            <div className="user-profile-layout">
                                <div className="user-profile-icon">
                                    <img src={`https://ui-avatars.com/api/?name=${userName}&background=random`} alt="User" className="avatar-image" />
                                </div>
                                <RiArrowDownSLine className={`profile-arrow ${isProfileOpen ? 'open' : ''}`} />
                            </div>

                            {/* Dropdown Menu */}
                            {isProfileOpen && (
                                <div className="profile-dropdown-menu">
                                    <div className="dropdown-item" onClick={() => alert("Navigate to Profile")}>My Profile</div>
                                    <div className="dropdown-item" onClick={() => alert("Navigate to Settings")}>Settings</div>
                                    <div className="dropdown-divider"></div>
                                    <div className="dropdown-item logout" onClick={() => navigate("/login")}>Logout</div>
                                </div>
                            )}
                        </div>
                    </div>
                )}
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
