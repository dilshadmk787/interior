import React from 'react';
import { Link } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import logo from '../images/title.jpg';

function Header({ scrollToAbout, scrollToFooter }) {
  return (
    <Navbar collapseOnSelect expand="lg" style={{ backgroundColor: '#FFF0D1' }}>
      <Container>
        <Navbar.Brand as={Link} to="/">
          <img src={logo} width={'160px'} alt="Logo" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto" />
          <Nav>
            <Nav.Link as={Link} to="/" style={{ color: '#795757', fontSize: '25px' }}>
              Home
            </Nav.Link>
            <Nav.Link onClick={scrollToAbout} style={{ color: '#795757', fontSize: '25px', cursor: 'pointer' }}>
              About Us
            </Nav.Link>
            <Nav.Link as={Link} to="/works" style={{ color: '#795757', fontSize: '25px' }}>
              Our Work
            </Nav.Link>
            <Nav.Link onClick={scrollToFooter} style={{ color: '#795757', fontSize: '25px', cursor: 'pointer' }}>
              Contact Us
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;
