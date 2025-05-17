// src/components/ModalInfo.jsx
import React from 'react';

const ModalInfo = ({ onClose, title, children }) => {
  return (
    <div 
      className="modal show"
      onClick={onClose}
    >
      <div 
        className="modal-content" 
        onClick={(e) => e.stopPropagation()}
      >
        <button 
          className="close-btn"
          onClick={onClose}
        >
          X
        </button>
        {title && <h2 className="modal-title text-center mb-3">{title}</h2>}
        <div className="modal-body">
          {children}
        </div>
      </div>
    </div>
  );
};

export default ModalInfo;