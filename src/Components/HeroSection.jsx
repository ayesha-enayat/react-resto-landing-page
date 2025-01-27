import React from 'react'
import { Button, Container } from 'react-bootstrap';
import heroImage from '../assets/hero-image.jpg';



const Hero = () => {
  const heroStyle = {
    backgroundImage: `url(${heroImage})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    color: 'white',
    padding: '100px 0',
    textShadow: '2px 2px 4px rgba(0, 0, 0, 0.5)',
  };

  return (
    <div style={heroStyle}>
      <Container className='hero-section'>
        <h1 className="display-4">Welcome to Our Restaurant</h1>
        <p className="lead">Delicious food served with love</p>
        <Button variant="primary" size="lg">Order Now</Button>
      </Container>
    </div>
  );
};



export default Hero
