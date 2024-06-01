import React from 'react'; // Importa React

const ContactItem = ({ contact }) => { // Define un componente funcional ContactItem que recibe una prop contact
  return (
    <div className="contact-item"> {/* Renderiza un contenedor con la clase CSS 'contact-item' */}
      <h3>{contact.name}</h3> {/* Renderiza el nombre del contacto */}
      <p>{contact.email}</p> {/* Renderiza el correo electrónico del contacto */}
    </div>
  );
};

export default ContactItem; // Exporta el componente ContactItem
