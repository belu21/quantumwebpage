import React from 'react';
import './App.css';
import NavBar from './components/NavBar.js';
import Footer from './components/Footer.js';
import { BrowserRouter as Router, Route } from 'react-router-dom'
import Nosotros from './components/Nosotros';
import Servicios from './components/Servicios';
import Partners from './components/Partners';
import Clientes from './components/Clientes';
import Equipamiento from './components/Equipamiento'
import CasosExito from './components/CasosExito';

function App() {
  return (
    <div className='home'>
    

      <Router>
        <NavBar />
        <Route path="/" exact component={Home} />
        <Route path="/nosotros" component={Nosotros} />
        <Route path="/servicios" component={Servicios} />
        <Route path="/equipamiento" component={Equipamiento} />
        <Route path="/partners" component={Partners} />
        <Route path="/clientes" component={Clientes} />
        <Route path="/casosexito" component={CasosExito} />
        <Footer />
      </Router>

    </div>
  );
}

const Home = () => (
  <div className="py-5 mw-100 w-100 container">
    <div className="card text-white bg-dark mb-3" >
      <div className="card-header bg-danger">CommIT SRL</div>
      <div className="card-body-custom card-body">
        <p className="card-text">CommIT es una empresa enmarcada en el sector de las nuevas Tecnologías de la Información y Comunicación (TICs)
    que nace para ofrecer servicios especializados y de consultoría, integrando soluciones de alta calidad tanto en las administraciones públicas como en el sector privado. La empresa CommIT tiene el nombre emblemático que representa la Tecnología en todo ámbito. Actualmente contamos con un grupo de programadores y expertos que la conforman y que ya llevan muchos años
          trabajando en dar soluciones IT a clientes particulares y empresas.</p>
      </div>
    </div>
  </div>
)

export default App;
