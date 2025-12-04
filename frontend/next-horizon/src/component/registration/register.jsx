import React from 'react'
import { useState } from 'react'
import './register_signin.css'
<style>
@import url('https://fonts.googleapis.com/css2?family=Alegreya:ital,wght@0,400..900;1,400..900&display=swap');
</style>

export default function Register() {  

  return (
    
          <div className="container2">
            <div className="form2">
              <h1 style={{fontFamily: "Alegreya", fontWeight: "bold"}}>REGISTER</h1>
              <form action="">
                <input type="text" placeholder="Full Name" /> <br />
                <input type="email" placeholder="Email" /> <br />
                <input type="password" placeholder="Password" /> <br />
                <input type="password" placeholder="Confirm Password" /> <br />
                <select name="academic-year" id="academic-year" style={{width: "80%"}} >
                    <option value="" disabled selected hidden>Academic Year</option>
                    <option value="">1st Year</option>
                    <option value="">2nd Year</option>
                    <option value="">3rd Year</option>
                    <option value="">4th Year</option>
                </select><br /><br />
                <select name="uni" id="uni" style={{width: "50%"}}>
                    <option value="" disabled selected hidden>Choose you University</option>
                    <option value="">LU Hadath University</option>
                    <option value="">LU Unisco University</option>
                    <option value="">LU Nabatieh University</option>
                    <option value="">LU Zahle University</option>
                    <option value="">LU Tripoli University</option>
                </select> &nbsp; &nbsp;
                <select name="role" id="role" style={{width: "25%"}}>
                    <option value="" disabled selected hidden>Role</option>
                    <option value="">Student</option>
                    <option value="">Teacher</option>
                </select><br /><br />
                <button className="register-button" type="submit">REGISTER</button>
              </form>
              <div className="google-sign-in-container">
                <div className="separator-container">
                  <div className="line"></div>
                  <span className="text">Or</span>
                  <div className="line"></div>
                </div>

                <button className="google-button">
                  <svg viewBox="0 0 48 48" className="google-icon">
                    <path fill="#EA4335" d="M24 9.5c3.54 0 6.71 1.22 9.21 3.6l6.85-6.85C35.91 3.57 30.29 1 24 1 14.88 1 7.18 5.76 3.19 13.52l7.19 5.66C12.39 12.01 17.72 9.5 24 9.5z" />
                    <path fill="#4285F4" d="M46.7 24.5c0-1.77-.14-3.52-.42-5.24H24v10.16h13.3c-.67 2.47-2.09 4.67-4.04 6.14l7.19 5.66C44.75 39.08 46.7 32.2 46.7 24.5z" />
                    <path fill="#FBBC05" d="M10.38 29.56c-.52-1.55-.83-3.23-.83-4.96s.31-3.41.82-4.96l-7.19-5.66C3.54 14.54 1 18.5 1 24s2.54 9.46 6.19 14.12l7.19-5.66z" />
                    <path fill="#34A853" d="M24 47c6.29 0 11.75-2.05 15.68-5.74l-7.19-5.66c-2.45 1.74-5.54 2.76-8.49 2.76-6.27 0-11.69-4.22-13.62-9.91l-7.19 5.66C7.18 42.24 14.88 47 24 47z" />
                    <path fill="none" d="M0 0h48v48H0z" />
                  </svg>
                  <b></b>Sign up by Google
                </button>
              </div>
              <p><b>Already have an acount?</b> <a href="/signin" style={{ color: "blue" }}>Sign In</a></p> <br />
            </div>
          </div> 
  )
}