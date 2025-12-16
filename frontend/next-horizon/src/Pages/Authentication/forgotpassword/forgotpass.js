import React from "react";
import { Link } from "react-router-dom";
import "./forgotpass.css";

function ForgotPass() {
    return (
        <div className="forgotpass">
            <div className="auth-card">
                <h1>Forgot Password</h1>
                <p>Enter your email address associated with your account to receive a reset link.</p>
                <form>
                    <label htmlFor="email">Email:</label>
                    <input type="email" placeholder="example@university.edu" />
                    <button type="submit">Send Reset Link</button>
                </form>
                <div className="auth-links">
                    <Link to="/reset-password"><b>Reset Password</b></Link>
                    <Link to="/Login"><b>Back to Sign In</b></Link>
                </div>
            </div>
        </div>
    );
}

export default ForgotPass;
