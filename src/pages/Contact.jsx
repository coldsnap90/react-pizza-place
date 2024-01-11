import React from 'react';
import PizzaLeft from "../assets/pizzaLeft.jpg";
import "../styles/Contact.css";

import ContactForm from "../forms/ContactForm"

function Contact() {
  return (
    <div className="contact">
        <div className="leftSide" style={{ backgroundImage: `url(${PizzaLeft})` }}></div>
        <div className="rightSide">
          <h1> Contact Us </h1>
            <ContactForm />
        </div>
        
        
    </div>
  )
}

export default Contact