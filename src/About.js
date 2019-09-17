import React from 'react';
import Card from 'react-bootstrap/Card';

const About = () => {
  return (
    <div>
      <h1>About</h1>
      <Card>
        <Card.Body>
          <Card.Title>Who we are</Card.Title>
          <Card.Text>This is a description of us.</Card.Text>
        </Card.Body>
      </Card>
    </div>
  );
};

export default About;
