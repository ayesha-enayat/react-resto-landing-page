import React from 'react';
import { Card, Row, Col, Container } from 'react-bootstrap';
import pizzaImage from '../assets/pizza.avif'; // Import images
import burgerImage from '../assets/burger.avif';
import pastaImage from '../assets/pasta.avif';

const MenuSection = () => {
  const menuItems = [
    { id: 1, name: 'Pizza', description: 'Cheesy and delicious', price: '$10', image: pizzaImage },
    { id: 2, name: 'Burger', description: 'Juicy and flavorful', price: '$8', image: burgerImage },
    { id: 3, name: 'Pasta', description: 'Creamy and rich', price: '$12', image: pastaImage },
  ];

  return (
    <Container className="my-5">
      <h2 className="text-center mb-4">Our Menu</h2>
      <Row>
        {menuItems.map(item => (
          <Col key={item.id} md={4}>
            <Card className="mb-4 menu-card">
              <Card.Img variant="top" src={item.image} alt={item.name}/>
              <Card.Body>
                <Card.Title>{item.name}</Card.Title>
                <Card.Text>{item.description}</Card.Text>
                <Card.Text><strong>{item.price}</strong></Card.Text>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default MenuSection;