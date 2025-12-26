import React from "react";
import "./features.css";

const Features = () => {
  const featuresList = [
    {
      img: "/icons/recorded.png",
      title: "Recorded Lectures",
      desc: "Access recorded lectures by doctors covering all subject courses in both English and French",
    },
    {
      img: "/icons/admin.png",
      title: "Free Admin Sessions",
      desc: "Join free exam solving sessions and relevant webinars for the community",
    },
    {
      img: "/icons/meeting.png",
      title: "Schedule Meetings",
      desc: "Book one-on-one sessions with admins for personalized help with any subject",
    },
    {
      img: "/icons/summary.png",
      title: "Subject summaries",
      desc: "Comprehensive summaries for all subjects available in both English and French",
    },
    {
      img: "/icons/exams.png",
      title: "Past Exams & Solutions",
      desc: "Complete collection of finals and partials with detailed solutions in English and French",
    },
    {
      img: "/icons/paid.png",
      title: "Paid courses",
      desc: "Register and pay for instructor-led premium courses for in-depth subject mastery",
    },
  ];

  return (
    <section className="features-section" id="features">
      <div className="features-container">
        <h1 className="features-title">
          Everything You Need to <span>Excel</span>
        </h1>
        <p className="features-subtitle">
          Comprehensive resources and support designed to help you succeed in your journey
        </p>

        <div className="features-grid">
          {featuresList.map((service, index) => (
            <div className="features-card" key={index}>
              <img src={service.img} alt={service.title} className="features-icon" />
              <h3>{service.title}</h3>
              <p>{service.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
