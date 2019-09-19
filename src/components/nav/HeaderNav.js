import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Form from 'react-bootstrap/Form';
import FormControl from 'react-bootstrap/FormControl';
import Button from 'react-bootstrap/Button';
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
          <Nav.Link as={NavLink} to='/data'>
            Search Github
          </Nav.Link>
          <Nav.Link as={NavLink} to='/simpsons'>
            Simpsons Quotes
          </Nav.Link>
          <NavDropdown title='Dropdown' id='basic-nav-dropdown'>
            <NavDropdown.Item as={NavLink} to='/data'>
              Search Github
            </NavDropdown.Item>
            <NavDropdown.Item as={NavLink} to='/simpsons'>
              Simpsons
            </NavDropdown.Item>
          </NavDropdown>
        </Nav>
        <Form inline>
          <FormControl type='text' placeholder='Search' className='mr-sm-2' />
          <Button variant='outline-secondary'>Search</Button>
        </Form>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default withRouter(HeaderNav);
