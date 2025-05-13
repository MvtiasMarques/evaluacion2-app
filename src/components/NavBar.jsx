// src/components/NavBar.jsx
import React from 'react';
import { Nav } from 'react-bootstrap';

const NavBar = () => (
  <nav className="navbar">
    <div className="container">
      <Nav className="justify-content-center">
        <Nav.Link href="/">SOLICITAR INFORMACIÓN</Nav.Link>
        <Nav.Link href="/transparencia">TRANSPARENCIA ACTIVA</Nav.Link>
        <Nav.Link href="/lobby">PLATAFORMA LEY LOBBY</Nav.Link>
      </Nav>
    </div>
  </nav>
);

export default NavBar;