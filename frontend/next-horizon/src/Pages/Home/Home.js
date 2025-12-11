import React from "react";
import Navbar from "../../component/navbar/navbar";
import HeroSection from "../../component/heroSection/heroSection";
import About from "../../component/about/about";
import HowItWorks from "../../component/how-it-works/how-it-works"; 

import "./Home.css";

function Home() {
  return (
    <div className="home-container">
      <Navbar />
      <HeroSection />
      <About />
      <HowItWorks />
    </div>
  );
}

export default Home;
