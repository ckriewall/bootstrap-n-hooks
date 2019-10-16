import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import { NavLink, withRouter } from 'react-router-dom';

const HeaderNav = () => {
  return (
    <Navbar bg='dark' variant='dark' expand='lg' className='mb-4' sticky='top'>
      <Navbar.Brand as={NavLink} to='/'>
        <i className='fab fa-react'></i> React Bootstrap
      </Navbar.Brand>
      <Navbar.Toggle aria-controls='basic-navbar-nav' />
      <Navbar.Collapse id='basic-navbar-nav'>
        <Nav className='mr-auto' bg='light'>
          <Nav.Link as={NavLink} to='/github'>
            Search Github
          </Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default withRouter(HeaderNav);
