import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Home from "./Pages/Home/Home";
import Courses from "./Pages/Courses/Courses";
import Login from "./Pages/Authentication/Login/Login";
import Register from "./Pages/Authentication/Login/Register/Register";
import ForgotPass from "./Pages/Authentication/forgotpassword/forgotpass";
import Payment from "./Pages/Payment/payment";
import ResetPass from "./Pages/Authentication/resetpassword/resetpass";
import Dashboard from "./Pages/student-dashboard/Dashboard";


import "./App.css";

function App() {
  return (
    <Router>
      <div className="app-container">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/forgot-password" element={<ForgotPass />} />
          <Route path="/reset-password" element={<ResetPass />} />
          <Route path="/courses" element={<Courses />} />
          <Route path="/payment" element={<Payment />} />

          {/* Student Dashboard Routes */}
          <Route path="/student-dashboard" element={<Dashboard />} />
        </Routes >
      </div >
    </Router >
  );
}

export default App;
