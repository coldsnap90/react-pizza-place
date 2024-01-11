import React from 'react';
import multiplePizzas from "../assets/multiplePizzas.jpeg";
import "../styles/About.css";

function About() {
  return (
    <div className="about">
      <div
        className="aboutTop"
        style={{ backgroundImage: `url(${multiplePizzas})` }}
      ></div>
      <div className="aboutBottom">
        <h1> ABOUT US</h1>
        <p>
            We at Ted's pizzeria have been making top qaulity pizza's for the last ten years. We start with
            the freshest ingredients source from local farmers that real give our pizza the freshest taste possible.
            Our artisan bakers have been cooking the best pizza possible since our inception. We offer 100% taste gaurantee or
            your money back and we'll buy you a pizza of your choice.
          
        </p>
      </div>
    </div>
  );
}

export default About;