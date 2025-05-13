// src/components/Footer.jsx
import React from 'react';

const Footer = () => (
  <footer className="footer">
    <div className="container">
      &copy; {new Date().getFullYear()} Municipalidad de Cholchol
    </div>
  </footer>
);

export default Footer;