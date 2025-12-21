import React from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "../../component/navbar/navbar";
import { RiWhatsappLine } from "react-icons/ri";
import "./payment.css";

const Payment = () => {
    const navigate = useNavigate();

    // Placeholder data - in a real app, this would come from props or context/location state
    const courseDetails = {
        name: "Advanced Python for Data Science",
        price: "$50.00",
    };

    const [userDetails, setUserDetails] = React.useState({
        name: "",
        phone: "",
        email: "",
        academicYear: "",
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setUserDetails((prev) => ({
            ...prev,
            [name]: value
        }));
    };

    const handleContactTutor = () => {
        // Placeholder for WhatsApp redirect
        // In real implementation, this would open a whatsapp link with a pre-filled message
        window.open("https://wa.me/1234567890?text=Hello, I would like to enroll in " + courseDetails.name + ". My name is " + (userDetails.name || "Student"), "_blank");
    };

    return (
        <div className="payment-page">
            <Navbar simple={true} />

            <div className="payment-content">
                <div className="payment-card">
                    <h1 className="payment-title">Complete Your Enrollment</h1>

                    <div className="course-info-box">
                        <div className="info-row">
                            <span className="info-label">Course:</span>
                            <span className="info-value">{courseDetails.name}</span>
                        </div>
                        <div className="info-row">
                            <span className="info-label">Price:</span>
                            <span className="info-value">{courseDetails.price}</span>
                        </div>
                    </div>

                    <h2 className="section-title">Your Details (Confirmation)</h2>

                    <div className="form-group">
                        <input
                            type="text"
                            name="name"
                            value={userDetails.name}
                            onChange={handleChange}
                            className="form-input"
                            placeholder="Alex Johnson"
                        />
                    </div>
                    <div className="form-group">
                        <input
                            type="text"
                            name="phone"
                            value={userDetails.phone}
                            onChange={handleChange}
                            className="form-input"
                            placeholder="+961 3 123456"
                        />
                    </div>
                    <div className="form-group">
                        <input
                            type="email"
                            name="email"
                            value={userDetails.email}
                            onChange={handleChange}
                            className="form-input"
                            placeholder="alex.j@university.edu"
                        />
                    </div>
                    <div className="form-group">
                        <input
                            type="text"
                            name="academicYear"
                            value={userDetails.academicYear}
                            onChange={handleChange}
                            className="form-input"
                            placeholder="3rd Year - Computer Science"
                        />
                    </div>

                    <div className="payment-instructions">
                        To finalize your enrollment, please contact the course tutor directly via WhatsApp to arrange payment. Access will be granted once payment is confirmed.
                    </div>

                    <button className="whatsapp-button" onClick={handleContactTutor}>
                        <RiWhatsappLine size={24} className="whatsapp-icon" /> Contact Tutor on WhatsApp for payment
                    </button>

                    <div className="cancel-link" onClick={() => navigate(-1)}>
                        Cancel and return to course
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Payment;
