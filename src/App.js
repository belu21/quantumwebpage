import React from 'react';
import './App.css';
import NavBar from './components/NavBar.js';
import Footer from './components/Footer.js';
import { BrowserRouter as Router, Route } from 'react-router-dom'
import Nosotros from './components/Nosotros';
import Servicios from './components/Servicios';
import Partners from './components/Partners';
import Clientes from './components/Clientes';

import Card from "./components/Card"
import img from "../src/images/barco.jpg"
import img2 from "../src/images/niebla.jpg"
import Figure from 'react-bootstrap/Figure'

import SimpleCard from "./components/SimpleCard";
import ControlledCarousel from "./components/ControlledCarousel"

function App() {
    return (
        <div className='home'>
            <Router>
                <NavBar>
                <Route path="/" exact component={Home}/>
                <Route path="/nosotros" component={Nosotros}/>
                <Route path="/servicios" component={Servicios}/>
                <Route path="/partners" component={Partners}/>
                <Route path="/clientes" component={Clientes}/>
                </NavBar>
               
                <Footer/>
            </Router>
        </div>
    );
}

const Home = () => {
    return (<div className="home">
            <div className="cabecera">
                    <div className="titulo-home">
                        CommIT
                    </div>
                <div className="tarjeta-subhome ">
                    Tecnología de <br />
                        Vanguardia
                    </div>
                <div className="tarjeta-subhome1 container">
                    <p>
                        CommIT es una empresa enfocada en el rubro de la
                        Tecnología de la Información y Comunicación
                        (TICs) , que ofrece servicios especializados y de
                        consultoría de valor al cliente por más de 10 años a
                        nivel nacional, integrando soluciones de alta calidad
                        tanto en el sector público como privado.
                        </p>
                </div>
            </div>
            <div className="servicios-home">

                    <div className='figures-icons'>
                    <Figure>
                        <Figure.Image
                            width={171}
                            height={180}
                            alt="171x180"
                            src={require('../src/images/cloud.png')}
                            fluid="true"
                            
                        />
                        <Figure.Caption>
                           <h5> Cloud Computing</h5>
                        </Figure.Caption>
                    </Figure>
                    </div>
                    <div className='figures-icons'>
                    <Figure>
                        <Figure.Image
                            width={171}
                            height={180}
                            alt="171x180"
                            src={require('../src/images/software.png')}
                        />
                        <Figure.Caption>
                           <h5>Desarrollo de Software</h5> 
                        </Figure.Caption>
                    </Figure>
                    </div>
                    <div className='figures-icons'>
                    <Figure>
                        <Figure.Image
                            width={171}
                            height={180}
                            alt="171x180"
                            src={require('../src/images/soporte-tecnico.png')}
                        />
                        <Figure.Caption >
                           <h5>Soporte Tecnico</h5> 
                        </Figure.Caption>
                    </Figure>
                    <div className="card-area">
                        <SimpleCard titulo="Cloud Computing"
                                    texto="Consolidación de servidores mediante la Virtualización Implementación de Cloud privada"
                                    to="/servicios/#cloud"/>
                        <SimpleCard titulo="Desarrollo de Software"
                                    texto="Se cuenta con un personal altamente capacitado para desarrollo de Software"
                                    to={"/servicios/#software"}/>
                        <SimpleCard titulo="Soporte Técnico"
                                    texto="Ofrecemos servicio de Soporte las 24 horas los 7 dias de la semana"
                                    to={"/servicios/#soporte"}/>
                    </div>
            </div>
            
            <div>
                <ControlledCarousel  >

                </ControlledCarousel>
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
                        texto="Consolidación de servidores mediante la VirtualizaciónImplementación de Cloud privada" to={"/servicios/cloud"} />
                    <SimpleCard titulo="Desarrollo de Software"
                        texto="Se cuenta con un personal altamente capacitado para desarrollo de Software" to={"/servicios/development"} />
                    <SimpleCard titulo="Soporte Técnico"
                        texto="Ofrecemos servicio de Soporte las 24 horas los 7 dias de la semana" to={"/servicios/soporte"} />
                </div>
            <div className="footer-tarjeta" id="footer">
                <Card
                    texto="Somos una empresa que ofrecemos soluciones tecnológicas innovadoras acorde a sus necesidades con un compromiso de excelencia."
                    titulo="Mision" image={img}
                    to={"/nosotros/#mision"}/>
                <Card texto="Ser la empresa líder en bolivia en generación de valor de negocios para nuestros clientes"
                      titulo="Vision" image={img}
                      to={"/nosotros/vision"}/>
            </div>
        <div className="footer-tarjeta">
            <Card texto={nosotros.mision.texto} titulo={nosotros.mision.titulo} image={img}
                to={"/nosotros/mision"} />
            <Card texto={nosotros.vision.texto} titulo={nosotros.vision.titulo} image={img2}
                to={"/nosotros/vision"} />
        </div>
    </div>
    </div>
    );
}


export default App;
