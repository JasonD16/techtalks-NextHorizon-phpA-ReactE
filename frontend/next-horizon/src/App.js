import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Navbar from './component/navbar/navbar';
import HeroSection from './component/heroSection/heroSection';
import About from './component/about/about';

import "./App.css";

function App() {
  return (
    <Router>
      <div className="app-container">

        <Routes>

          {/* Home page (using your components Navbar, Year, Courses, About) */}
          <Route path="/" element={
            <>
              <Navbar />
              <HeroSection />
              <About />
            </>
          } />

        </Routes>

      </div>
    </Router>
  );
}

export default App;