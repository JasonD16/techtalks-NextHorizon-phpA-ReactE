import React from "react";
import { Link } from "react-router-dom";
import "./resetpass.css";

function ResetPass() {
    return (
        <div className="resetpass">
            <div className="auth-card">
                <h1>Reset Password</h1>
                <p>Please create a new password for your account.</p>
                <form>
                    <input type="password" placeholder="New Password" />
                    <input type="password" placeholder="Confirm Password" />
                    <button type="submit">Reset Password</button>
                </form>
            </div>
        </div>
    );
}

export default ResetPass;
