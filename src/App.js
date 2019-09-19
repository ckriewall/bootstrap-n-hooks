import React, { Fragment } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import Navbar from './nav/HeaderNav';
import Home from './components/Home';
import Simpsons from './components/Simpsons';
import DataList from './components/data/DataList';
import Container from 'react-bootstrap/Container';

const App = () => {
  return (
    <BrowserRouter>
      <Fragment>
        <Navbar />
      </Fragment>

      <Container>
        <Route exact path='/' component={Home} />
        <Route path='/data' component={DataList} />
        <Route path='/simpsons' component={Simpsons} />
      </Container>
    </BrowserRouter>
  );
};

export default App;
