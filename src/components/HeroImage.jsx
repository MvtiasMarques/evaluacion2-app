import React from 'react';
import backgroundImage from '../assets/background.jpg';
import './HeroImage.css'; // Crearemos este archivo para los estilos

const HeroImage = () => {
  return (
    <div className="hero-image-container">
      <img src={backgroundImage} alt="Fondo Municipalidad de Cholchol" className="hero-image" />
      {/* Podríamos añadir texto o botones superpuestos aquí si fuera necesario */}
    </div>
  );
};

export default HeroImage;
