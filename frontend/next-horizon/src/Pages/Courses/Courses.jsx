import React, { useState } from "react";
import { RiArrowDownSLine, RiArrowUpSLine } from "react-icons/ri";
import { useNavigate } from "react-router-dom";
import Navbar from "../../component/navbar/navbar";
import "./Courses.css";
import courseImage from "../../assets/data-science-v2.png";

const Courses = () => {
    const navigate = useNavigate();

    // Mock Data for the course shown in the picture
    const course = {
        name: "Advanced Python for Data Science",
        instructor: "Dr. Anya Sharma",
        description: "Master data analysis, visualization, and machine learning using Python. This comprehensive course covers all essential libraries and practical applications.",
        price: "50.00",
        image: courseImage,
        modules: [
            {
                id: 1,
                title: "Module 1: Introduction to Data Science",
                details: "3 Topics, 1.5 Hours",
                isOpen: true
            },
            {
                id: 2,
                title: "Module 2: NumPy & Pandas Essentials",
                details: "5 Topics, 2.5 Hours",
                isOpen: false
            },
            {
                id: 3,
                title: "Module 3: Data Visualization with Matplotlib",
                details: "4 Topics, 2 Hours",
                isOpen: false
            },
            {
                id: 4,
                title: "Module 4: Machine Learning Basics",
                details: "6 Topics, 3.5 Hours",
                isOpen: false
            }
        ]
    };

    const [modules, setModules] = useState(course.modules);

    const toggleModule = (id) => {
        setModules(modules.map(mod =>
            mod.id === id ? { ...mod, isOpen: !mod.isOpen } : mod
        ));
    };

    return (
        <div className="courses-page">
            <Navbar showProfile={true} />

            <div className="courses-content">
                <div className="course-card">
                    {/* Top Section: Image and Info */}
                    <div className="course-header-section">
                        <div className="course-image-container">
                            <img src={course.image} alt={course.name} className="course-image" />
                        </div>

                        <div className="course-info-container">
                            <h1 className="course-title">{course.name}</h1>
                            <p className="course-instructor">Instructor: <span className="instructor-name">{course.instructor}</span></p>
                            <p className="course-description">{course.description}</p>

                            <div className="course-action-row">
                                <span className="course-price">${course.price}</span>
                                <button className="enroll-button" onClick={() => navigate("/payment")}>Enroll Now</button>
                            </div>
                        </div>
                    </div>

                    {/* Modules Section */}
                    <div className="course-modules-section">
                        <h2 className="modules-title">Course Chapters & Modules</h2>

                        <div className="modules-list">
                            {modules.map((module) => (
                                <div key={module.id} className="module-item">
                                    <div
                                        className="module-header"
                                        onClick={() => toggleModule(module.id)}
                                    >
                                        <div className="module-title-row">
                                            <span className="module-name">{module.title}</span>
                                            <span className="module-meta">({module.details})</span>
                                        </div>
                                        <div className="module-icon">
                                            {module.isOpen ? <RiArrowUpSLine /> : <RiArrowDownSLine />}
                                        </div>
                                    </div>

                                    {/* Collapsible Content (Optional placeholder if needed) */}
                                    {/*In the picture, it shows just the headers, but usually they expand. 
                                      The pic shows arrows, implying expandability. I'm implementing the toggle state.*/}
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Courses;
