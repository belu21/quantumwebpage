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
  <div className="tarjeta-home">
    <div className="cabecera">
      <div>
        CommIT
      </div>
      <div className="tarjeta-subhome container px-6">
        <p>CommIT es una empresa enmarcada en el sector de las nuevas Tecnologías de la Información y Comunicación (TICs)
    ofrece servicios especializados de consultoría, integrando soluciones de alta calidad tanto en las administraciones públicas como en el sector privado.</p>
      </div>
    </div>
    <div class="headivs">
      <p class="h5">ACERCA DE COMMIT</p>
      <div class="jumbotron">
        <h5 class="headivs2">Somos una empresa especializada en ofrecer servicios de vanguardia a los clientes</h5>
      </div>

    </div>
    <div class="descripcion"></div>

  </div>
)





export default App;
