import React from "react";
import { RiBookReadLine, RiGraduationCapLine, RiCheckLine } from "react-icons/ri";
import "./Years.css";

const Years = () => {
    const years = [
        {
            id: 1,
            title: "First Year",
            subtitle: "Foundation courses and essential subjects",
            icon: <RiBookReadLine size={32} />,
            features: [
                "Complete video lecture library",
                "Past exams with solutions",
                "Comprehensive study summaries",
                "Access to tutoring and sessions",
            ],
            buttonText: "Explore First Year",
            link: "/year-1" // Placeholder link
        },
        {
            id: 2,
            title: "Second Year",
            subtitle: "Advanced topics and specialized subjects",
            icon: <RiGraduationCapLine size={32} />,
            features: [
                "second year video lectures",
                "Past exams with solutions",
                "In-depth study summaries",
                "Access to tutoring and sessions",
            ],
            buttonText: "Explore second Year",
            link: "/year-2" // Placeholder link
        },
    ];

    return (
        <section className="years-section" id="years">
            <div className="years-container">
                {/* Header */}
                <div className="years-header">
                    <h2 className="years-title">
                        Choose your <span className="highlight">Academic year</span>
                    </h2>
                    <p className="years-subtitle">
                        Tailored resources and materials specifically organized for first and second
                        year students
                    </p>
                </div>

                {/* Cards Grid */}
                <div className="years-grid">
                    {years.map((year) => (
                        <div key={year.id} className="year-card">
                            {/* Icon Circle */}
                            <div className="year-icon-wrapper">
                                {year.icon}
                            </div>

                            <h3 className="year-card-title">{year.title}</h3>
                            <p className="year-card-subtitle">{year.subtitle}</p>

                            {/* Features List */}
                            <ul className="year-features-list">
                                {year.features.map((feature, index) => (
                                    <li key={index}>
                                        <span className="check-icon"><RiCheckLine /></span>
                                        {feature}
                                    </li>
                                ))}
                            </ul>

                            {/* Action Button */}
                            <button className="year-button">
                                {year.buttonText} <span>→</span>
                            </button>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Years;
