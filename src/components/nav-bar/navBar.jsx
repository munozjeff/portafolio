import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import 'bootstrap/dist/css/bootstrap.min.css';
import "./style.css"
import { Link } from "react-router-dom";

function NavBarComponent() {
  return (
    <Navbar bg="bg-transparent" variant="light" expand="lg" className='fixed-top navbar'>
      <Container>
        {/* <Navbar.Brand href="#home">Navbar</Navbar.Brand> */}
        <figure className='icon-nav-bar'>
          <img src='/assets/prog.png' alt='icon-prog'></img>
        </figure>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto link">
            <Link to="/">Home</Link>
            <Link to="/About">About</Link>
            <Link to="/Works">Works</Link>
            <Link to="/Contact">Contact</Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export {NavBarComponent};