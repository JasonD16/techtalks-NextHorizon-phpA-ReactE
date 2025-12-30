import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./Register.css";

function Register() {
  const navigate = useNavigate();
  const [universities, setUniversities] = useState([]);

  // ===== FETCH UNIVERSITIES FROM BACKEND LATER =====
  useEffect(() => {
    // Example (Backend will replace this)
    // fetch("https://your-backend.com/api/universities")
    //   .then(res => res.json())
    //   .then(data => setUniversities(data));

    setUniversities([
      "Lebanese University",
      "USJ",
      "AUB",
      "LAU",
      "BAU",
      "LIU"
    ]);
  }, []);

  return (
    <div className="register-page">

      {/* Close Button */}
      <button className="close-btn" onClick={() => navigate('/')}>
        ×
      </button>

      <div className="register-card">

        <h2 className="register-title">REGISTER</h2>

        <form className="register-form">

          <input
            type="text"
            placeholder="Full Name"
            className="input-field"
          />

          <input
            type="email"
            placeholder="Email"
            className="input-field"
          />

          <input
            type="password"
            placeholder="Password"
            className="input-field"
          />

          <input
            type="password"
            placeholder="Confirm Password"
            className="input-field"
          />

          {/* Academic Year */}
          <select className="input-field select-field">
            <option value="">Academic Year</option>
            <option value="1">First Year</option>
            <option value="2">Second Year</option>
          </select>

          {/* University */}
          <select className="input-field select-field">
            <option value="">Choose your University</option>
            {universities.map((uni, index) => (
              <option key={index}>{uni}</option>
            ))}
          </select>

          <button type="submit" className="btn-register">
            REGISTER
          </button>

        </form>



        <p className="signin-text">
          Already have an account? <Link to="/login">Sign In</Link>
        </p>

      </div>

    </div>
  );
}

export default Register;
