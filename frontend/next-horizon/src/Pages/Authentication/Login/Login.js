import React from "react";
import { Link } from "react-router-dom";
import "./Login.css";

function Login() {
  return (
    <div className="login-page">

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

        {/* Google Login */}
        <button className="google-btn">
          <img 
            src="https://www.svgrepo.com/show/475656/google-color.svg" 
            alt="google icon" 
          />
          Sign in by Google
        </button>

        {/* Register Link */}
        <p className="register-text">
          Don’t have an account? <Link to="/register">Register here</Link>
        </p>

      </div>

    </div>
  );
}

export default Login;
