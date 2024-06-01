import React from 'react'; // Importa React
import ReactDOM from 'react-dom/client'; // Importa ReactDOM desde 'react-dom/client'
import './index.css'; // Importa el archivo de estilos CSS global
import App from './App'; // Importa el componente principal de la aplicación desde './App'
import './styles/App.scss'; // Importa el archivo de estilos específicos de la aplicación

const root = ReactDOM.createRoot(document.getElementById('root')); // Crea un "root" React para renderizar la aplicación en el elemento con el id 'root'
root.render( // Renderiza la aplicación dentro del "root"
  <React.StrictMode> {/* Activa el modo estricto de React */}
    <App /> {/* Renderiza el componente principal de la aplicación */}
  </React.StrictMode>
);
