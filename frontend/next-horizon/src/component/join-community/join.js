import React from "react";
import "./join.css";
import { FaStar } from "react-icons/fa6";
import { Link } from "react-router-dom";

function Join() {
    return (
        <section className="join-section">
            <div className="join-container">
                {/* Badge */}
                <div className="join-badge">
                    <FaStar className="join-star-icon" />
                    <span>Join Our Community</span>
                </div>

                {/* Title */}
                <h1 className="join-title">
                    Ready to Transform Your Learning Journey?
                </h1>

                {/* Description */}
                <p className="join-description">
                    Join hundreds of students who are already excelling with Next Horizon’s
                    comprehensive resources and support
                </p>

                {/* Buttons */}
                <div className="join-buttons">
                    <Link to="/courses" className="join-btn primary-btn">
                        Start Learning Today <span className="arrow">→</span>
                    </Link>
                </div>

                {/* Footer Note */}
                <p className="join-note">
                    No credit card required • Free tier available • Cancel anytime
                </p>
            </div>
        </section>
    );
}

export default Join;
