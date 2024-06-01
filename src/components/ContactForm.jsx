import React, { useState } from 'react'; // Importa React y la función useState desde 'react'

const ContactForm = ({ addContact }) => { // Define un componente funcional ContactForm que recibe una prop addContact
  const [name, setName] = useState(''); // Define un estado 'name' para el nombre del contacto, inicializado como una cadena vacía
  const [email, setEmail] = useState(''); // Define un estado 'email' para el correo electrónico del contacto, inicializado como una cadena vacía

  const handleSubmit = (e) => { // Define una función de controlador de envío de formulario
    e.preventDefault(); // Previene el comportamiento de envío de formulario por defecto
    addContact({ name, email }); // Llama a la función addContact pasando el nombre y el correo electrónico del contacto
    setName(''); // Reinicia el estado 'name' a una cadena vacía
    setEmail(''); // Reinicia el estado 'email' a una cadena vacía
  };

  return (
    <form onSubmit={handleSubmit} className="contact-form"> {/* Renderiza un formulario con el controlador de envío handleSubmit y la clase CSS 'contact-form' */}
      <input 
        type="text" 
        placeholder="Nombre" 
        value={name} 
        onChange={(e) => setName(e.target.value)} 
        required // Campo obligatorio
      />
      <input 
        type="email" 
        placeholder="Correo Electrónico" 
        value={email} 
        onChange={(e) => setEmail(e.target.value)} 
        required // Campo obligatorio
      />
      <button type="submit">Añadir Contacto</button> {/* Botón para enviar el formulario */}
    </form>
  );
};

export default ContactForm; // Exporta el componente ContactForm
