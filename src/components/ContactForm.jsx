// src/components/ContactForm.jsx
import React, { useState } from 'react';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [errors, setErrors] = useState({});

  const validate = (values) => {
    const errors = {};
    if (!values.name) errors.name = 'Nombre es requerido';
    if (!values.email) errors.email = 'Email es requerido';
    else if (!/\S+@\S+\.\S+/.test(values.email)) errors.email = 'Email inválido';
    if (!values.message) errors.message = 'Mensaje es requerido';
    return errors;
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validate(formData);
    setErrors(validationErrors);

    if (Object.keys(validationErrors).length === 0) {
      alert('Formulario enviado exitosamente!');
      setFormData({ name: '', email: '', message: '' });
    }
  };

  return (
    <div className="mt-5">
      <h2>Contáctanos</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="name" className="form-label">Nombre:</label>
          <input 
            type="text" 
            id="name" 
            name="name"
            value={formData.name} 
            onChange={handleChange}
            className={`form-control ${errors.name ? 'is-invalid' : ''}`} 
          />
          {errors.name && <div className="invalid-feedback">{errors.name}</div>}
        </div>
        <div className="mb-3">
          <label htmlFor="email" className="form-label">Email:</label>
          <input 
            type="email" 
            id="email" 
            name="email"
            value={formData.email} 
            onChange={handleChange}
            className={`form-control ${errors.email ? 'is-invalid' : ''}`} 
          />
          {errors.email && <div className="invalid-feedback">{errors.email}</div>}
        </div>
        <div className="mb-3">
          <label htmlFor="message" className="form-label">Mensaje:</label>
          <textarea 
            id="message" 
            name="message"
            rows="4" 
            value={formData.message} 
            onChange={handleChange}
            className={`form-control ${errors.message ? 'is-invalid' : ''}`} 
          ></textarea>
          {errors.message && <div className="invalid-feedback">{errors.message}</div>}
        </div>
        <button type="submit" className="btn btn-success w-100">Enviar</button>
      </form>
    </div>
  );
};

export default ContactForm;