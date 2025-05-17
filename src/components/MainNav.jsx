// src/components/MainNav.jsx
import React from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';
import './Header.css'; // Compartirá estilos con Header.css

const MainNav = () => {
  return (
    <Navbar className="main-nav-bar" variant="dark" expand="lg" aria-label="Navegación principal">
      <Container fluid className="main-nav-container">
        <Navbar.Toggle aria-controls="main-navbar-nav" />
        <Navbar.Collapse id="main-navbar-nav">
          <Nav className="mx-auto main-nav-links">
            <Nav.Link href="#home" active>HOME</Nav.Link>
            <Nav.Link href="#municipio">MUNICIPIO</Nav.Link>
            <Nav.Link href="#unidades">UNIDADES MUNICIPALES</Nav.Link>
            <Nav.Link href="#contactos">CONTACTOS</Nav.Link>
            <Nav.Link href="#webmail">WEBMAIL</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default MainNav;