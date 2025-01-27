import React from 'react';
import { Container, Image } from 'react-bootstrap';
import logo from "../assets/logo2.png"
import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa";
const Footer = () => {
  return (
    <footer className="text-center py-4 footer">
      <Container>
        <Image  src={logo} alt="Restaurant Logo" width="100" className="mb-3" />
        <p>&copy; 2025 Green Bites. All rights reserved.</p>
        <div>
          <span className='me-2' ><FaFacebook style={{width:"30px", height:"30px"}}/></span>
          <span className='me-2' ><FaInstagram style={{width:"30px", height:"30px"}}/></span>  
          <span className='me-2' ><FaWhatsapp style={{width:"30px", height:"30px"}}/></span>        
          </div>
      </Container>
    </footer>
  );
};

export default Footer;