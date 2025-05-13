// src/components/HeroSection.jsx
import React from 'react';
import { Button, Modal } from 'react-bootstrap';

const HeroSection = () => {
  const [showModal, setShowModal] = React.useState(false);

  return (
    <section className="hero-section">
      <div className="container">
        <div className="banner">
          <h2>Ya puedes pagar tu Permiso de Circulación Online</h2>
          <p>Con tu permiso, Cholchol Avanza!</p>
          <Button 
            variant="primary" 
            onClick={() => setShowModal(true)}
          >
            Más información
          </Button>

          {/* Modal informativo */}
          <Modal show={showModal} onHide={() => setShowModal(false)}>
            <Modal.Header closeButton>
              <Modal.Title>Información Adicional</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <p>Puedes realizar el pago desde tu dispositivo móvil.</p>
              <img 
                src="/assets/permiso-circulacion.jpg" 
                alt="Permiso Online" 
                className="img-fluid"
              />
            </Modal.Body>
            <Modal.Footer>
              <Button variant="secondary" onClick={() => setShowModal(false)}>
                Cerrar
              </Button>
            </Modal.Footer>
          </Modal>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;