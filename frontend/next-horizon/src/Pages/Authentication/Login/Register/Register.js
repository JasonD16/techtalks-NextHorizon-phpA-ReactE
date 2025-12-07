import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./Register.css";

function Register() {
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
          <div className="register-select-row">
            <select className="input-field select-field">
              <option value="">Choose your University</option>
              {universities.map((uni, index) => (
                <option key={index}>{uni}</option>
              ))}
            </select>

            {/* Role */}
            <select className="input-field select-field">
              <option value="">Role</option>
              <option value="student">Student</option>
              <option value="tutor">Tutor</option>
            </select>
          </div>

          <button type="submit" className="btn-register">
            REGISTER
          </button>

        </form>

        {/* Divider */}
        <div className="divider">
          <span></span>
          <p>Or</p>
          <span></span>
        </div>

        {/* Google Sign Up */}
        <button className="google-btn">
          <img 
            src="https://www.svgrepo.com/show/475656/google-color.svg" 
            alt="google" 
          />
          Sign up by Google
        </button>

        <p className="signin-text">
          Already have an account? <Link to="/Login">Sign In</Link>
        </p>

      </div>

    </div>
  );
}

export default Register;
