import React from 'react';
import Card from 'react-bootstrap/Card';

const About = () => {
  return (
    <div>
      <h1>About</h1>
      <Card>
        <Card.Header as='h5'>Featured</Card.Header>
        <Card.Body>
          <Card.Title>Special title treatment</Card.Title>
          <Card.Text>
            With supporting text below as a natural lead-in to additional
            content.
          </Card.Text>
        </Card.Body>
      </Card>
    </div>
  );
};

export default About;
