import React from "react";
import { Link, useNavigate } from "react-router-dom";
import "./Login.css";

function Login() {
  const navigate = useNavigate();

  return (
    <div className="login-page">

      {/* Close Button */}
      <button className="close-btn" onClick={() => navigate('/')}>
        ×
      </button>

      <div className="login-card">

        <h2 className="login-title">SIGN IN</h2>

        <form className="login-form">

          <input
            type="text"
            placeholder="Full Name"
            className="input-field"
          />

          <input
            type="password"
            placeholder="Password"
            className="input-field"
          />

          <button type="submit" className="btn-login">
            SIGN IN
          </button>
        </form>

        {/* Divider */}
        <div className="divider">
          <span></span>
          <p>Or</p>
          <span></span>
        </div>



        {/* Register Link */}
        <p className="register-text">
          Don’t have an account? <Link to="/register">Register here</Link>
        </p>
         <p className="forgot-text">
          Forgot Password? <Link to="/forgot-password">Reset Password</Link>
        </p>

      </div>

    </div>
  );
}

export default Login;
