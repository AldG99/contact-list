import React, { useState } from 'react'; // Importa React y la función useState del paquete 'react'
import ContactForm from './components/ContactForm'; // Importa el componente ContactForm desde './components/ContactForm'
import ContactList from './components/ContactList'; // Importa el componente ContactList desde './components/ContactList'
import './styles/App.scss'; // Importa el archivo de estilos CSS para la aplicación

const App = () => {
  const [contacts, setContacts] = useState([]); // Define un estado 'contacts' inicializado como un arreglo vacío

  // Define una función 'addContact' que agrega un nuevo contacto al estado 'contacts'
  const addContact = (contact) => {
    setContacts([...contacts, contact]); // Agrega el nuevo contacto al arreglo 'contacts'
  };

  return (
    <div className="app"> {/* Define un contenedor principal con la clase CSS 'app' */}
      <h1>Lista de Contactos</h1> {/* Título principal de la aplicación */}
      <ContactForm addContact={addContact} /> {/* Renderiza el componente ContactForm y pasa la función 'addContact' como prop */}
      <ContactList contacts={contacts} /> {/* Renderiza el componente ContactList y pasa el estado 'contacts' como prop */}
    </div>
  );
};

export default App; // Exporta el componente App como componente principal de la aplicación
