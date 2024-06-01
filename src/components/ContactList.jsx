import React from 'react'; // Importa React
import ContactItem from './ContactItem'; // Importa el componente ContactItem desde './ContactItem'

const ContactList = ({ contacts }) => { // Define un componente funcional ContactList que recibe una prop contacts
  return (
    <div className="contact-list"> {/* Renderiza un contenedor con la clase CSS 'contact-list' */}
      {contacts.map((contact, index) => ( /* Mapea sobre la lista de contactos y renderiza un componente ContactItem para cada uno */
        <ContactItem key={index} contact={contact} /> /* Renderiza un componente ContactItem y pasa el contacto como prop */
      ))}
    </div>
  );
};

export default ContactList; // Exporta el componente ContactList
