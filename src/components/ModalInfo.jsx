// src/components/ModalInfo.jsx
import React, { useState } from 'react';
import permisoImage from '../assets/permiso-circulacion.jpg'; // Ruta relativa desde components/

const ModalInfo = () => {
  const [showModal, setShowModal] = useState(true);

  return (
    <div 
      className={`modal ${showModal ? 'show' : ''}`} 
      onClick={() => setShowModal(false)}
    >
      <div 
        className="modal-content" 
        onClick={(e) => e.stopPropagation()}
      >
        <button 
          className="close-btn"
          onClick={() => setShowModal(false)}
        >
          X
        </button>
        <img 
          src={permisoImage} 
          alt="Permiso de Circulación" 
          className="modal-image"
        />
      </div>
    </div>
  );
};

export default ModalInfo;