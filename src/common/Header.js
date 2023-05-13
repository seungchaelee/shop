import React from "react";
import { Button, Container, Nav, Navbar } from 'react-bootstrap';
import bg from '../img/bg.png';
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <>
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="#home">Navbar</Navbar.Brand>
          <Nav className="me-auto">
            <Link to="/">Home</Link>
            <Link to="/detail/0">sub</Link>
          </Nav>
        </Container>
      </Navbar>

      <div className='main-bg' style={{ backgroundImage: 'url(' + bg + ')' }}></div>
    </>
  );
}
