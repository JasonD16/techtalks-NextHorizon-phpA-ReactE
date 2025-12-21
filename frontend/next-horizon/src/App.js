import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Home from "./Pages/Home/Home";
import Courses from "./Pages/Courses/Courses";
import Login from "./Pages/Authentication/Login/Login";
import Register from "./Pages/Authentication/Login/Register/Register";
import Payment from "./Pages/Payment/payment";

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
          <Route path="/payment" element={<Payment />} />

          {/* Main App Pages */}
          <Route path="/courses" element={<Courses />} />

        </Routes>

      </div>
    </Router>
  );
}

export default App;