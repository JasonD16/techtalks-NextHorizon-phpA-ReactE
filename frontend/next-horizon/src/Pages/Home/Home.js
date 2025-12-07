import React from "react";
import Navbar from "../../component/navbar/navbar";
import HeroSection from "../../component/heroSection/heroSection";
import About from "../../component/about/about";

import "./Home.css";

function Home() {
  return (
    <div className="home-container">
      <Navbar />
      <HeroSection />
      <About />
    </div>
  );
}

export default Home;
