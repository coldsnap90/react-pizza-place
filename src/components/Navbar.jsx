import React, { useState } from 'react';
import {Container,Row,Col,Button} from "react-bootstrap";
import {Link} from "react-router-dom";
import Logo from '../assets/pizzaLogo.png';
import "../styles/Navbar.css";
import { Icon } from '@iconify/react';

function NavigationBar() {
    const [openLinks, setOpenLinks] = useState(false);

    const toggleNavbar = () => {
        if (window.innerWidth<757) {
            
            setOpenLinks(!openLinks);
        }
        
    };

  return (

            <div className ='navbar'>
                <div className ='leftSide' id={openLinks ? "open" : "close"}>
                    <img src={Logo} alt='text'/>
                    <div className="hiddenLinks">
                        <Link to="/"> Home </Link>
                        <Link to="/menu/"> Menu </Link>
                        <Link to="/about/"> About </Link>
                        <Link to="/contact/"> Contact </Link>
                    </div>
                   
                </div>
                   
                <div className = 'rightSide'>
                    <Link to="/"> Home </Link>
                    <Link to="/menu/"> Menu </Link>
                    <Link to="/about/"> About </Link>
                    <Link to="/contact/"> Contact </Link> 
                    <Button onClick={toggleNavbar} >
                    <Icon icon="dashicons:menu" />
                    </Button>
                </div>

            </div>

  );
}

export default NavigationBar;