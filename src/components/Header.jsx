// src/components/Header.jsx
import React from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';
import logoCholchol from '../assets/logo-cholchol.png';
import MainNav from './MainNav';
import './Header.css';

const Header = () => {
  return (
    <header className="main-header">
      <Navbar className="top-nav-bar" expand="lg" aria-label="Navegación superior">
        <Container fluid className="top-nav-container">
          <Navbar.Brand href="#home">
            <img
              src={logoCholchol}
              height="70" // Ajusta la altura según sea necesario
              className="d-inline-block align-top main-logo"
              alt="Logo Municipalidad de Cholchol"
            />
          </Navbar.Brand>
          <Nav className="ms-auto top-nav-links">
            <Nav.Link href="#solicitar-informacion">SOLICITAR INFORMACIÓN</Nav.Link>
            <Nav.Link href="#transparencia-activa">TRANSPARENCIA ACTIVA</Nav.Link>
            <Nav.Link href="#ley-lobby">PLATAFORMA LEY LOBBY</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
      <MainNav />
    </header>
  );
};

export default Header;