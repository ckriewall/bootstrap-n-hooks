import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import ListGroup from 'react-bootstrap/ListGroup';
import Toast from 'react-bootstrap/Toast';

const Home = () => {
  const [showToast, setShowToast] = useState(true);
  const toggleShowToast = () => setShowToast(!showToast);
  return (
    <div>
      <h1>Home</h1>

      <h3>React-Bootstrap</h3>
      <p>This simple template features: </p>
      <ListGroup>
        <ListGroup.Item>
          <i className='fab fa-react'></i> React
        </ListGroup.Item>
        <ListGroup.Item>
          <i className='fab fa-bootstrap'></i> React Bootstrap
        </ListGroup.Item>
        <ListGroup.Item>
          <i className='fal fa-link'></i> React Router
        </ListGroup.Item>
        <ListGroup.Item>
          <i className='fab fa-font-awesome-alt'></i> Font Awesome
        </ListGroup.Item>
        <ListGroup.Item>
          <i className='fal fa-database'></i> API calls with <code>axios</code>
        </ListGroup.Item>
      </ListGroup>
      <br />
      <h4>React-Bootstrap JS</h4>
      <p>React-Bootstrap has JS animation features, like dismissing a Toast.</p>
      <Toast show={showToast} onClose={toggleShowToast}>
        <Toast.Header>
          <i className='fal fa-bread-slice'></i>{' '}
          <strong className='mr-auto'> Bootstrap</strong>
          <small>11 mins ago</small>
        </Toast.Header>
        <Toast.Body>Hello, world! This is a toast message.</Toast.Body>
      </Toast>

      <Button onClick={toggleShowToast}>
        Toggle Toast <strong>with</strong> Animation
      </Button>
    </div>
  );
};

export default Home;
