import React, { useState, useEffect } from 'react';
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import axios from 'axios';

const Simpsons = () => {
  const url = 'https://thesimpsonsquoteapi.glitch.me/quotes?count=10';

  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const result = await axios(url);
      setData(result.data);
    };
    fetchData();
  }, []);

  return (
    <div>
      <h1>Simpsons Quotes</h1>
      <p>
        Return 10 random records from the{' '}
        <a href='https://thesimpsonsquoteapi.glitch.me'>Simpsons Quotes API</a>.
        Data is retrieved with the{' '}
        <code>
          <a href='https://reactjs.org/docs/hooks-effect.html'>useEffect</a>
        </code>{' '}
        hook and <a href='https://github.com/axios/axios'>axios</a>.
      </p>
      <Container>
        <Row>
          {data.map(item => (
            <Col xs='12' sm='6' md='4' key={item.quote}>
              <Card>
                <Card.Header as='h5'>{item.character}</Card.Header>
                <Card.Img variant='top' src={item.image} />
                <Card.Body>
                  <Card.Title>{item.quote}</Card.Title>
                </Card.Body>
                <Card.Footer className='text-muted'>
                  Simpsons Quotes API
                </Card.Footer>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  );
};

export default Simpsons;
