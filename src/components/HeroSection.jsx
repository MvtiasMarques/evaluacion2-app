// src/components/HeroSection.jsx
import React from 'react';
import { Container, Row, Col, Button, Image, Modal } from 'react-bootstrap';
import './HeroSection.css'; // Importar los nuevos estilos
import permisoCirculacionImg from '../assets/permiso-circulacion.jpg';
import logoCholchol from '../assets/logo-cholchol.png'; // Importar el logo para el banner amarillo

const HeroSection = () => {
  const [showModal, setShowModal] = React.useState(false);

  return (
    <>
      <section className="permiso-circulacion-section">
        <Container>
          <div className="permiso-main-banner">
            <Row className="align-items-center">
              <Col md={6} className="permiso-image-col text-center text-md-start mb-4 mb-md-0">
                <Image 
                  src={permisoCirculacionImg} 
                  alt="Paga tu Permiso de Circulación Online" 
                  fluid 
                  rounded 
                />
              </Col>
              <Col md={6} className="permiso-text-col">
                <h2>Ya puedes pagar tu Permiso de Circulación Online</h2>
                <p className="lead">Con tu permiso, Cholchol Avanza!</p>
                <Button 
                  variant="primary" 
                  className="mas-info-button" 
                  onClick={() => setShowModal(true)}
                >
                  Más información
                </Button>
              </Col>
            </Row>
          </div>
        </Container>
      </section>

      <section className="cholchol-avanza-banner">
        <Container>
            <Row className="align-items-center">
                 <Col xs={12} md="auto" className="text-center text-md-start mb-2 mb-md-0">
                    {/* Puedes agregar un ícono de auto si lo deseas, usando FontAwesome o un SVG */}
                    {/* <i className="fas fa-car"></i> */}
                    <span className="banner-text">
                        <i className="fas fa-car me-2" aria-hidden="true"></i> {/* Ejemplo con FontAwesome si está instalado */}
                        Con tu permiso <strong className="mx-1">Cholchol Avanza!</strong>
                    </span>
                </Col>
                <Col xs={12} md="auto" className="text-center text-md-end">
                    <Image 
                        src={logoCholchol} 
                        alt="Logo Municipalidad de Cholchol" 
                        className="banner-logo"
                    />
                </Col>
            </Row>
        </Container>
      </section>

      {/* Modal informativo */}
      <Modal show={showModal} onHide={() => setShowModal(false)} centered>
        <Modal.Header closeButton>
          <Modal.Title>Permiso de Circulación Online</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p>Aquí puedes agregar más detalles sobre cómo pagar el permiso de circulación online, requisitos, fechas importantes, etc.</p>
          <p>Por ejemplo, puedes incluir un enlace directo a la plataforma de pago si la tienes.</p>
          {/* Si tienes una imagen específica para el modal, puedes añadirla aquí */}
          {/* <Image src="path/to/modal-specific-image.jpg" fluid /> */}
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => setShowModal(false)}>
            Cerrar
          </Button>
          {/* Podrías añadir un botón de acción como "Ir a Pagar" */}
          {/* <Button variant="primary" href="URL_PAGO_PERMISO" target="_blank">Ir a Pagar</Button> */}
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default HeroSection;