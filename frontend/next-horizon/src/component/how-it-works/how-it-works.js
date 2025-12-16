import React from "react";
import "./how-it-works.css";
import { FaUserPlus, FaMagnifyingGlass, FaBookOpen, FaAward } from "react-icons/fa6";

function HowItWorks() {
    const steps = [
        {
            id: 1,
            icon: <FaUserPlus />,
            title: "Sign Up Free",
            description: "Create your account in seconds and join the Next horizon community",
            badge: "01"
        },
        {
            id: 2,
            icon: <FaMagnifyingGlass />,
            title: "Browse resources",
            description: "Explore video lectures, exams and summaries for your year and subjects",
            badge: "02"
        },
        {
            id: 3,
            icon: <FaBookOpen />,
            title: "Start learning",
            description: "Access quality content, schedule meetings, and attend free sessions",
            badge: "03"
        },
        {
            id: 4,
            icon: <FaAward />,
            title: "Excel in Exams",
            description: "Practice with past Exams and achieve academic excellence",
            badge: "04"
        }
    ];

    return (
        <div className="how-it-works">
            <h1 className="how-it-works-title">How it <span>Works</span></h1>
            <p className="how-it-works-description">Get started with Next Horizon in four simple steps</p>

            <div className="how-it-works-container">
                <div className="how-it-works-line"></div>
                <div className="how-it-works-steps">
                    {steps.map((step) => (
                        <div key={step.id} className="how-it-works-step-card">
                            <div className="how-it-works-icon-box">
                                {step.icon}
                                <div className="how-it-works-badge">{step.badge}</div>
                            </div>
                            <h3 className="how-it-works-step-title">{step.title}</h3>
                            <p className="how-it-works-step-description">{step.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
export default HowItWorks;
