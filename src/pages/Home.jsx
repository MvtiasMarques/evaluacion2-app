import React, { useState, useEffect } from 'react'; // Añadido useEffect
import Header from '../components/Header';
import Footer from '../components/Footer';
import ContactForm from '../components/ContactForm';
import ServiceCard from '../components/ServiceCard';
import ModalInfo from '../components/ModalInfo';
import HeroImage from '../components/HeroImage'; // Importar HeroImage
import permisoCirculacionImg from '../assets/permiso-circulacion.jpg'; // Importar la imagen

const Home = () => {
  const [showModal, setShowModal] = useState(false);
  const [showAttentionModal, setShowAttentionModal] = useState(true); // Para el modal de horario
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  // Validación de formulario
  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Validar campos vacíos
    if (!formData.name || !formData.email || !formData.message) {
      alert('Todos los campos son obligatorios');
      return;
    }
    // Validar formato de correo
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      alert('Correo electrónico inválido');
      return;
    }
    // Enviar datos (simulación)
    console.log('Datos enviados:', formData);
    setFormData({ name: '', email: '', message: '' });
    alert('Mensaje enviado con éxito');
  };

  return (
    <>
      <Header />
      <HeroImage /> {/* Añadir el componente HeroImage aquí */}
      {/* Modal de Horario de Atención (ejemplo básico) */}
      {showAttentionModal && (
        <ModalInfo onClose={() => setShowAttentionModal(false)} title="Horario de Atención">
          <p>Estimados Usuarios:</p>
          <p>Desde el Lunes 03 de Febrero del 2025, el horario de atención de público de nuestro municipio será, de Lunes a Viernes desde las <strong>8:30 a 14:00 Hrs.</strong></p>
          {/* Aquí podrías añadir la imagen del modal si la tienes */}
        </ModalInfo>
      )}
      <main className="container mt-4"> {/* Ajustado el margen superior */}
        {/* Hero Section */}
        <div className="row mb-5">
          <div className="col-md-6">
            <img 
              src={permisoCirculacionImg} // Usar la imagen importada
              alt="Permiso de Circulación Online" 
              className="img-fluid mb-3"
            />
          </div>
          <div className="col-md-6">
            <h2 className="text-primary">Ya puedes pagar tu Permiso de Circulación Online</h2>
            <p className="lead">Con tu permiso, Cholchol Avanza!</p>
            <button 
              className="btn btn-primary btn-lg mt-3" 
              onClick={() => setShowModal(true)}
            >
              Más información
            </button>
          </div>
        </div>

        {/* Servicios */}
        <div className="row mb-5">
          <ServiceCard 
            title="Solicitud de Información" 
            icon="fa-info-circle" 
            description="Realiza consultas sobre trámites municipales."
            onClick={() => setShowModal(true)}
          />
          <ServiceCard 
            title="Transparencia Activa" 
            icon="fa-file-alt" 
            description="Accede a documentos públicos y rendiciones de cuentas."
            onClick={() => setShowModal(true)}
          />
          <ServiceCard 
            title="Plataforma Ley Lobby" 
            icon="fa-handshake" 
            description="Consulta información sobre proyectos de ley en discusión."
            onClick={() => setShowModal(true)}
          />
        </div>

        {/* Formulario de Contacto */}
        <div className="row mb-5">
          <div className="col-md-8 offset-md-2">
            <ContactForm 
              formData={formData}
              handleInputChange={handleInputChange}
              handleSubmit={handleSubmit}
            />
          </div>
        </div>
      </main>
      <Footer />
      {/* Este es el modal original que tenías, puedes adaptarlo o eliminarlo si el de arriba lo reemplaza */}
      {showModal && <ModalInfo onClose={() => setShowModal(false)} title="Más Información Permiso">
          <p>Contenido específico sobre el permiso de circulación...</p>
        </ModalInfo>}
    </>
  );
};

export default Home;