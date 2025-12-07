import React from "react";
//import Navbar from "../../components/Navbar/Navbar";
//import Year from "../../components/Year/Year";
//import Courses from "../../components/Courses/Courses";
//import About from "../../components/About/About";

import "./Home.css";

function Home() {
  return (
    <div className="home-container">
     {/* <Navbar />*/}

      <div className="container">
        {/* <Year /> */}
       {/* <Courses />*/}
       {/* <About />*/}

        <div className="cta-wrapper">
          <a href="/login" className="btn btn-primary">
            Get Started
          </a>
        </div>
      </div>
    </div>
  );
}

export default Home;
