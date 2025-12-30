import React from "react";
import { Link, useNavigate } from "react-router-dom";
import "./forgotpass.css";

function ForgotPass() {
    const navigate = useNavigate();

    return (
        <div className="forgotpass">
            <button className="close-btn" onClick={() => navigate('/')}>×</button>
            <div className="auth-card">
                <h1>Forgot Password</h1>
                <p>Enter your email address associated with your account to receive a reset link.</p>
                <form>
                    <label htmlFor="email">Email:</label>
                    <input type="email" placeholder="example@university.edu" />
                    <button type="submit">Send Reset Link</button>
                </form>
                <div className="auth-links">
                    <Link to="/login"><b>Back to Sign In</b></Link>
                </div>
            </div>
        </div>
    );
}

export default ForgotPass;
