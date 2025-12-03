import React from "react";
import "./heroSection.css";
import backgroundImage from "./Background-NextHorizon.png";

const HeroSection = () => {
    return (
        <div className="hero-container">
            <div className="hero-wrapper">
                <div className="hero-content">
                    {/* Hero Main Section */}
                    <main
                        className="hero-main"
                        style={{
                            backgroundImage: `url(${backgroundImage})`,
                        }}
                    >
                        {/* Hero Title */}
                        <div className="hero-title-wrapper">
                            <h1 className="hero-title">
                                Welcome to <span className="hero-title-highlight">Next Horizon</span>
                            </h1>
                        </div>

                        {/* Hero Subtitle */}
                        <div className="hero-subtitle-wrapper">
                            <p className="hero-subtitle">
                                Your Comprehensive learning platform with video lectures, past exams,
                                summaries, and expert guidance for academic excellence
                            </p>
                        </div>

                        {/* Call to Action Buttons */}
                        <div className="hero-cta-section">
                            <div className="hero-cta-buttons">
                                <button
                                    className="cta-primary-button"
                                    onClick={() => alert("Get Started clicked!")}
                                >
                                    <span className="cta-button-text">Get Started Free</span>
                                    <span className="cta-button-icon">→</span>
                                </button>

                                <button className="cta-secondary-button">
                                    <span className="cta-button-text">Explore courses</span>
                                </button>
                            </div>
                        </div>

                        {/* Statistics Section */}
                        <div className="hero-stats-section">
                            <div className="stats-container">
                                {/* Stat 1 */}
                                <div className="stat-item">
                                    <span className="stat-number">500+</span>
                                    <span className="stat-label">Recorded Lectures</span>
                                </div>

                                {/* Stat 2 */}
                                <div className="stat-item">
                                    <span className="stat-number">300+</span>
                                    <span className="stat-label">Past Exams</span>
                                </div>

                                {/* Stat 3 */}
                                <div className="stat-item">
                                    <span className="stat-number">1000+</span>
                                    <span className="stat-label">Students</span>
                                </div>
                            </div>

                            {/* Scroll Indicator */}
                            <div className="scroll-indicator">
                                <div className="scroll-icon"></div>
                            </div>
                        </div>
                    </main>
                </div>
            </div>
        </div>
    );
};

export default HeroSection;