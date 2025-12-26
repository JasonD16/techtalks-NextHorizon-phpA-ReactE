import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Home from "./Pages/Home/Home";
import Courses from "./Pages/Courses/Courses";
import Login from "./Pages/Authentication/Login/Login";
import Register from "./Pages/Authentication/Login/Register/Register";
import ForgotPass from "./Pages/Authentication/forgotpassword/forgotpass";
<<<<<<< HEAD
import Payment from "./Pages/Payment/payment";
=======
import ResetPass from "./Pages/Authentication/resetpassword/resetpass";
>>>>>>> b6ecf58ee487ae3ed8f0643c89ee75e9f2fb6d64

import "./App.css";

function App() {
  return (
    <Router>
      <div className="app-container">

        <Routes>

          {/* Home page (using your components Navbar, Year, Courses, About) */}
          <Route path="/" element={<Home />} />

          {/* Auth Pages */}
<<<<<<< HEAD
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/register" element={<Register />} />
          <Route path="/forgot-password" element={<ForgotPass />} />
          <Route path="/payment" element={<Payment />} />

          {/* Main App Pages */}
          <Route path="/courses" element={<Courses />} />
=======
          <Route path="/Login" element={<Login />} />
          <Route path="/Register" element={<Register />} />
          <Route path="/forgot-password" element={<ForgotPass />} />
          <Route path="/reset-password" element={<ResetPass />} />
>>>>>>> b6ecf58ee487ae3ed8f0643c89ee75e9f2fb6d64

        </Routes>

      </div>
    </Router>
  );
}

export default App;