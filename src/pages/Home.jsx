import React from 'react';
import {Link} from "react-router-dom";
import {Container,Row,Col,Button} from "react-bootstrap";
import BannerImg from "../assets/pizza.jpeg";
import "../styles/Home.css";

function Home() {

  return (
    <div className="home" style={{ backgroundImage: `url(${BannerImg})` }}>
      <div className="headerContainer">
        <h1> Ted's Pizzeria </h1>
        <p> Mouth Watering TASTE</p>
        <Link to="/menu">
          <button> ORDER NOW </button>
        </Link>
      </div>
    </div>
  );
}

export default Home;