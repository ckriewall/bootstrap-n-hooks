import React, { Fragment } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import Navbar from './nav/HeaderNav';
import About from './About';
import Home from './Home';
import DataList from './data/DataList';
import Container from 'react-bootstrap/Container';

function App() {
  return (
    <BrowserRouter>
      <Fragment>
        <Navbar />
      </Fragment>

      <Container>
        <Route exact path='/' component={Home} />
        <Route path='/about' component={About} />
        <Route path='/data' component={DataList} />
      </Container>
    </BrowserRouter>
  );
}

export default App;
