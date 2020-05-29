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

import Card from "./components/Card"
import img from "../src/images/barco.jpg"
import img2 from "../src/images/niebla.jpg"

import nosotros from './json/nosotros'
import SimpleCard from "./components/SimpleCard";

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
                    <div className="tarjeta-subhome ">
                        Tecnología de <br/>
                        Vanguardia
                    </div>
                    <div className="tarjeta-subhome1 container">
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
                    <div className="tittledivs">ACERCA DE COMMIT</div>
                    <div>
                        <h5>Somos una empresa especializada en ofrecer servicios de vanguardia a los
                            clientes</h5>
                    </div>
                    <div className="card-area">
                        <SimpleCard titulo="Cloud Computing"
                                    texto="Consolidación de servidores mediante la VirtualizaciónImplementación de Cloud privada" to={"/servicios/cloud"}/>
                        <SimpleCard titulo="Desarrollo de Software"
                                    texto="Se cuenta con un personal altamente capacitado para desarrollo de Software" to={"/servicios/development"}/>
                        <SimpleCard titulo="Soporte Técnico"
                                    texto="Ofrecemos servicio de Soporte las 24 horas los 7 dias de la semana" to={"/servicios/soporte"}/>
                    </div>
                </div>
            </div>
            <div className="footer-tarjeta">
                <Card texto={nosotros.mision.texto} titulo={nosotros.mision.titulo} image={img}
                      to={"/nosotros/mision"}/>
                <Card texto={nosotros.vision.texto} titulo={nosotros.vision.titulo} image={img2}
                      to={"/nosotros/vision"}/>
            </div>
        </div>
    );
}


export default App;
