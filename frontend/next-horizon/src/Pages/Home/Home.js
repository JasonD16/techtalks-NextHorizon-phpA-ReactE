import React from "react";
import Navbar from "../../component/navbar/navbar";
import HeroSection from "../../component/heroSection/heroSection";
import Features from "../../component/features/features";
import Years from "../../component/years/Years";
import HowItWorks from "../../component/how-it-works/how-it-works";
import About from "../../component/about/about";
import Join from "../../component/join-community/join";
import Footer from "../../component/footer/footer";

import "./Home.css";

function Home() {
  return (
    <div className="home-container">
      <Navbar />
      <HeroSection />
      <Features />
      <HowItWorks />
      <Years />
      <About />
      <Join />
      <Footer />
    </div>
  );
}

export default Home;
