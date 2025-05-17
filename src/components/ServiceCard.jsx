import React from 'react';
import './ServiceCard.css'; // Importaremos los estilos
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'; // Importar FontAwesomeIcon

// Recibimos las props title, icon, description y onClick
const ServiceCard = ({ title, icon, description, onClick }) => {
  return (
    // Usamos col-md-4 para que haya 3 tarjetas por fila en pantallas medianas y grandes
    // mb-4 para margen inferior
    <div className="col-md-4 mb-4">
      <div 
        className="service-card h-100" 
        onClick={onClick} 
        role="button" 
        tabIndex="0" 
        onKeyPress={(e) => (e.key === 'Enter' || e.key === ' ') && onClick && onClick()}
      >
        <div className="card-body text-center">
          {/* Usar el componente FontAwesomeIcon. El prop icon espera un objeto icono o un string del nombre del icono */}
          {icon && (
            <div className="service-icon mb-3">
              <FontAwesomeIcon icon={icon} size="3x" />
            </div>
          )}
          <h5 className="card-title">{title}</h5>
          <p className="card-text">{description}</p>
        </div>
      </div>
    </div>
  );
};

export default ServiceCard;
