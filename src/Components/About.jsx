
// export default About
import React from 'react';
import { Container, Row, Col, Image, Button } from 'react-bootstrap';

import aboutImage from '../assets/aboutImage.jpg'; // Import your image

const About = () => {
  return (
    <><Container className="my-5">
      <Row className="align-items-center">
        {/* Image Column */}
        <Col md={6} className="d-flex justify-content-center align-items-center">
          <Image
            src={aboutImage}
            fluid
            alt="About Us"
            className="rounded shadow"
            style={{ width: "70%", maxWidth: "400px" }}
          />
        </Col>

        {/* Text Column */}
        <Col md={6} className="mt-4 mt-md-0">
          <h2 className="mb-4">About Us</h2>
          <p>
            Welcome to <strong>Green Bites</strong>, where we believe in serving fresh, healthy, and delicious meals made from the finest ingredients. Our passion for food and sustainability drives us to create dishes that not only taste great but also nourish your body.
          </p>
          <p>
            Whether you're looking for a quick bite or a full-course meal, our menu has something for everyone. From hearty salads to wholesome grain bowls, every dish is crafted with care and love.
          </p>
          <Button variant="primary">Learn More</Button>
        </Col>
      </Row>
    </Container></>

  );
};

export default About;