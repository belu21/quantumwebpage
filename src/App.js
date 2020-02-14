import React from 'react';
import './App.css';
import NavBar from './components/NavBar.js';
import Footer from './components/Footer.js';
import {BrowserRouter as Router, Route} from 'react-router-dom'
import Nosotros from './components/Nosotros';
import Servicios from './components/Servicios';
import Partners from './components/Partners';
import Clientes from './components/Clientes';
import Equipamiento from './components/Equipamiento'
import CasosExito from './components/CasosExito';
import Contactanos from './components/Contactanos'
import Tarjeta from "./components/Tarjeta";

import nosotros from './json/nosotros'

function App() {

    return (
        <div className='home'>
            <Router>
                <NavBar/>
                <Route path="/" exact component={Home}/>
                <Route path="/nosotros" component={Nosotros}/>
                <Route path="/servicios" component={Servicios}/>
                <Route path="/equipamiento" component={Equipamiento}/>
                <Route path="/partners" component={Partners}/>
                <Route path="/clientes" component={Clientes}/>
                <Route path="/casosexito" component={CasosExito}/>
                <Route path="/contactanos" component={Contactanos}/>
                <Footer/>
            </Router>
        </div>

    );

}

const Home = () => {
    return (<div>
            <div className="tarjeta-home">
                <div className="cabecera">
                    <div className="titulo-home">
                        CommIT
                    </div>
                    <div className="tarjeta-subhome container px-6">
                        <p>Una empresa enmarcada en el sector de las nuevas Tecnologías de la Información y Comunicación
                            (TICs)
                            ofrece servicios especializados de consultoría, integrando soluciones de alta calidad tanto
                            en las
                            administraciones públicas como en el sector privado.</p>
                    </div>
                    <div className="tarjeta-subhome1 container px-6">
                        <p>
                            La empresa CommIT tiene el nombre emblemático que representa la Tecnología en todo ámbito.
                            Actualmente contamos con un grupo de programadores y
                            expertos que la conforman y que ya llevan muchos años trabajando en dar soluciones IT a
                            clientes
                            particulares y empresas.
                        </p>

                    </div>
                </div>
                <div className="headivs">
                    <p>ACERCA DE COMMIT</p>
                    <div>
                        <h5>Somos una empresa especializada en ofrecer servicios de vanguardia a los
                            clientes</h5>
                    </div>

                </div>
            </div>
            <div className="footer-tarjeta">
                <Tarjeta info={nosotros.mision}/>
                <Tarjeta info={nosotros.vision}/>
            </div>
        </div>
    );
}


export default App;
