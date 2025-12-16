import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Home from "./Pages/Home/Home";
import Login from "./Pages/Authentication/Login/Login";
import Register from "./Pages/Authentication/Login/Register/Register";
import ForgotPass from "./Pages/Authentication/forgotpassword/forgotpass";
import ResetPass from "./Pages/Authentication/resetpassword/resetpass";

import "./App.css";

function App() {
  return (
    <Router>
      <div className="app-container">

        <Routes>

          {/* Home page (using your components Navbar, Year, Courses, About) */}
          <Route path="/" element={<Home />} />

          {/* Auth Pages */}
          <Route path="/Login" element={<Login />} />
          <Route path="/Register" element={<Register />} />
          <Route path="/forgot-password" element={<ForgotPass />} />
          <Route path="/reset-password" element={<ResetPass />} />

        </Routes>

      </div>
    </Router>
  );
}

export default App;