import React, { useState, useEffect } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import ContactForm from '../components/ContactForm';
import ServiceCard from '../components/ServiceCard';
import ModalInfo from '../components/ModalInfo';
import HeroImage from '../components/HeroImage';
import HeroSection from '../components/HeroSection';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInfoCircle, faFileAlt, faHandshake } from '@fortawesome/free-solid-svg-icons';

const Home = () => {
  const [selectedService, setSelectedService] = useState(null); // Para el modal de ServiceCards
  const [showAttentionModal, setShowAttentionModal] = useState(true); // Para el modal de horario

  const services = [
    { 
      id: 1,
      title: "Solicitud de Información", 
      icon: faInfoCircle, // Use imported icon object
      description: "Realiza consultas sobre trámites municipales y otros servicios.",
      fullContent: "Aquí puedes encontrar información detallada sobre cómo realizar solicitudes de información, los plazos de respuesta y los canales disponibles. Por ejemplo, puedes consultar sobre el estado de un trámite, requisitos para licencias, etc." 
    },
    { 
      id: 2,
      title: "Transparencia Activa", 
      icon: faFileAlt, // Use imported icon object
      description: "Accede a documentos públicos y rendiciones de cuentas.",
      fullContent: "La sección de Transparencia Activa te permite acceder a información relevante sobre la gestión municipal, incluyendo presupuestos, gastos, contrataciones, y actas de concejo. Nuestro compromiso es con la claridad y el acceso público a la información."
    },
    { 
      id: 3,
      title: "Plataforma Ley Lobby", 
      icon: faHandshake, // Use imported icon object
      description: "Consulta información sobre proyectos de ley en discusión.",
      fullContent: "Infórmate sobre las audiencias y reuniones sostenidas por autoridades municipales en el marco de la Ley de Lobby. Consulta quiénes participan, los temas tratados y los documentos asociados a cada encuentro."
    }
  ];

  const handleServiceCardClick = (service) => {
    setSelectedService(service);
  };

  const handleCloseServiceModal = () => {
    setSelectedService(null);
  };

  return (
    <>
      <Header />
      <HeroImage />
      {showAttentionModal && (
        <ModalInfo onClose={() => setShowAttentionModal(false)} title="Horario de Atención">
          <p>Estimados Usuarios:</p>
          <p>Desde el Lunes 03 de Febrero del 2025, el horario de atención de público de nuestro municipio será, de Lunes a Viernes desde las <strong>8:30 a 14:00 Hrs.</strong></p>
        </ModalInfo>
      )}
      <main className="container mt-4">
        <HeroSection />

        <div className="row mb-5">
          {services.map(service => (
            <ServiceCard 
              key={service.id}
              title={service.title} 
              icon={service.icon} 
              description={service.description}
              onClick={() => handleServiceCardClick(service)}
            />
          ))}
        </div>

        <div className="row mb-5">
          <div className="col-md-8 offset-md-2">
            <ContactForm />
          </div>
        </div>
      </main>
      <Footer />
      
      {selectedService && (
        <ModalInfo 
          onClose={handleCloseServiceModal} 
          title={selectedService.title}
        >
          {selectedService.icon && (
            <div className="text-center mb-3">
              <FontAwesomeIcon icon={selectedService.icon} size="3x" />
            </div>
          )}
          <p>{selectedService.fullContent}</p>
        </ModalInfo>
      )}
    </>
  );
};

export default Home;