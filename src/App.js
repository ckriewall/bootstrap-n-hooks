import React, { Fragment } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import Navbar from './components/nav/HeaderNav';
import Home from './components/Home';
import Simpsons from './components/Simpsons';
import GitHub from './components/GitHub';
import Container from 'react-bootstrap/Container';

const App = () => {
  return (
    <BrowserRouter>
      <Fragment>
        <Navbar />
      </Fragment>

      <Container>
        <Route exact path='/' component={Home} />
        <Route path='/github' component={GitHub} />
        <Route path='/simpsons' component={Simpsons} />
      </Container>
    </BrowserRouter>
  );
};

export default App;
