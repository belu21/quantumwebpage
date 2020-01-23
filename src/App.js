import React from 'react';
import './App.css';
import NavBar from './components/NavBar.js';
import Footer from './components/Footer.js';

function App() {
  return (
    <div>
      <NavBar />
      <div className="container">
        <h2 className="text-center card">CommIT es una empresa enmarcada en el sector de las nuevas Tecnologías de la Información y Comunicación (TICs)</h2> 
          <h3>que nace para ofrecer servicios especializados y de consultoría, integrando soluciones de alta calidad tanto en las administraciones públicas como en el sector privado.\r\n\r\nLa empresa CommIT tiene el nombre emblemático que representa la Tecnología en todo ámbito. Actualmente contamos con un grupo de programadores y expertos que la conforman y que ya llevan muchos años 
          trabajando en dar soluciones IT a clientes particulares y empresas.</h3>
      </div>
      {/* <HelloWorld mytext="Hello Ronald"/>
      <HelloWorld mytext="How are you"/>
      <HelloWorld mytext="?????"/> */}

      <Footer />
    </div>
  );
}

export default App;
