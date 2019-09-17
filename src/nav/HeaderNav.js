import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Form from 'react-bootstrap/Form';
import FormControl from 'react-bootstrap/FormControl';
import Button from 'react-bootstrap/Button';
import { Link, NavLink, withRouter } from 'react-router-dom';

// https://stackoverflow.com/questions/35687353/react-bootstrap-link-item-in-a-navitem

const HeaderNav = () => {
  return (
    <Navbar bg='light' expand='lg'>
      <Navbar.Brand as={Link} to='/'>
        <i className='fab fa-react'></i> React-Bootstrap
      </Navbar.Brand>
      <Navbar.Toggle aria-controls='basic-navbar-nav' />
      <Navbar.Collapse id='basic-navbar-nav'>
        <Nav className='mr-auto'>
          <Nav.Link as={NavLink} to='/about'>
            About
          </Nav.Link>
          <Nav.Link as={NavLink} to='/data'>
            Data
          </Nav.Link>
          {/* TODO: add nav dropdown */}
        </Nav>
        <Form inline>
          <FormControl type='text' placeholder='Search' className='mr-sm-2' />
          <Button variant='outline-success'>Search</Button>
        </Form>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default withRouter(HeaderNav);
