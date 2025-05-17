// src/components/ContactForm.jsx
import React, { useState } from 'react';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [errors, setErrors] = useState({});
  const [submitStatus, setSubmitStatus] = useState(null); // 'success', 'error', or null

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
    // Clear submit status and errors when user starts typing
    if (submitStatus) setSubmitStatus(null);
    if (errors[e.target.name]) {
      setErrors({ ...errors, [e.target.name]: null });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitStatus(null); // Reset status on new submission
    const validationErrors = validate(formData);
    setErrors(validationErrors);

    if (Object.keys(validationErrors).length === 0) {
      // Simulate API call
      console.log('Formulario enviado:', formData);
      setSubmitStatus('success');
      setFormData({ name: '', email: '', message: '' });
      setErrors({}); // Clear errors on successful submission
    } else {
      setSubmitStatus('error');
    }
  };

  return (
    <div className="mt-5">
      <h2>Contáctanos</h2>
      <form onSubmit={handleSubmit} noValidate>
        {submitStatus === 'success' && (
          <div className="alert alert-success" role="alert">
            ¡Formulario enviado exitosamente!
          </div>
        )}
        {submitStatus === 'error' && Object.keys(errors).length > 0 && (
          <div className="alert alert-danger" role="alert">
            Por favor, corrige los errores en el formulario.
          </div>
        )}
        <div className="mb-3">
          <label htmlFor="name" className="form-label">Nombre:</label>
          <input 
            type="text" 
            id="name" 
            name="name"
            value={formData.name} 
            onChange={handleChange}
            className={`form-control ${errors.name ? 'is-invalid' : ''}`} 
            aria-invalid={!!errors.name}
            aria-describedby={errors.name ? "nameError" : undefined}
          />
          {errors.name && <div id="nameError" className="invalid-feedback">{errors.name}</div>}
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
            aria-invalid={!!errors.email}
            aria-describedby={errors.email ? "emailError" : undefined}
          />
          {errors.email && <div id="emailError" className="invalid-feedback">{errors.email}</div>}
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
            aria-invalid={!!errors.message}
            aria-describedby={errors.message ? "messageError" : undefined}
          ></textarea>
          {errors.message && <div id="messageError" className="invalid-feedback">{errors.message}</div>}
        </div>
        <button type="submit" className="btn btn-success w-100">Enviar</button>
      </form>
    </div>
  );
};

export default ContactForm;