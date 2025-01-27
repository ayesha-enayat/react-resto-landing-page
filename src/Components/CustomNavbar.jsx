import React from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';
import logo from "../assets/logo2.png"

const CustomNavbar = () => {
  return (
    <Navbar expand="lg" className='navbar-dark'>
      <Container>
        <Navbar.Brand href="#home"><img src={logo} alt="logo" style={{width:"80px"}}/> Green Bites</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link href="#home" className='nav-link'>Home</Nav.Link>
            <Nav.Link href="#menu" className='nav-link'>Menu</Nav.Link>
            <Nav.Link href="#about" className='nav-link'>About</Nav.Link>
            <Nav.Link href="#testimonials" className='nav-link'>Testimonials</Nav.Link>
            <Nav.Link href="#contact" className='nav-link'>Contact</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default CustomNavbar;