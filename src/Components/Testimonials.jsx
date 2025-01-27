import React from 'react';
import { Card, Row, Col, Container, Image } from 'react-bootstrap';
import customer1 from '../assets/customer1.jpeg'; // Import images
import customer2 from '../assets/customer2.jpeg';
import customer3 from '../assets/customer3.jpeg';

const Testimonials = () => {
  const testimonials = [
    { id: 1, name: 'Maria Jhon', review: 'Amazing food and great service!', image: customer1 },
    { id: 2, name: 'Jane Smith', review: 'The best restaurant in town!', image: customer2 },
    { id: 3, name: 'Mike Johnson', review: 'Highly recommended!', image: customer3 },
  ];

  return (
    <Container className="my-5">
      <h2 className="text-center mb-4">What Our Customers Say</h2>
      <Row>
        {testimonials.map(testimonial => (
          <Col key={testimonial.id} md={4}>
            <Card className="mb-4">
              <Card.Body className="text-center">
                <Image src={testimonial.image} roundedCircle width="100" height="100" className="mb-3" alt={testimonial.name} />
                <Card.Text>{testimonial.review}</Card.Text>
                <Card.Text><strong>- {testimonial.name}</strong></Card.Text>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default Testimonials;