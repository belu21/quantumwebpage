import React from 'react';
import './App.css';
import NavBar from './components/NavBar.js';
import Footer from './components/Footer.js';
import { BrowserRouter as Router, Route } from 'react-router-dom'
import Nosotros from './components/Nosotros';
import Servicios from './components/Servicios';
import Partners from './components/Partners';
import Clientes from './components/Clientes';


import SimpleCard from "./components/SimpleCard";
import ControlledCarousel from "./components/ControlledCarousel";
import Figure from 'react-bootstrap/Figure';
import Slide from '@material-ui/core/Slide';
import Carousel from 'react-bootstrap/Carousel'



function App() {
    return (
        <div className='home'>
            <Router>
                <NavBar />
                <Route path="/" exact component={Home} />
                <Route path="/nosotros" component={Nosotros} />
                <Route path="/servicios" component={Servicios} />
                <Route path="/partners" component={Partners} />
                <Route path="/clientes" component={Clientes} />
                <Footer />
            </Router>
        </div>
    );
}

const Home = () => {
    return (<div>
        <div>
            <div>
                <div className="titulo-home">
                    CommIT
                    </div>
                <div className="tarjeta-subhome ">
                    Tecnología de <br />
                        Vanguardia
                    </div>
                    <br/>
                    <br/>
                    <br/>
                    <br/>
                    <br/>
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
            <div className="carousel">
                <ControlledCarousel></ControlledCarousel>

            </div>

            <Slide direction='right' in='true' mountOnEnter unmountOnExit timeout={1200}>
                <div className='servicios-home'>
                    <h1 className='titulo-servicios-home'>Servicios</h1>
                    <div className='figures-icons'>

                        <Figure>
                            <Figure.Image
                                width={171}
                                height={180}
                                alt="171x180"
                                src={require('../src/images/cloud.png')}
                                fluid="true"


                            />
                            <Figure.Caption style={{ textAlign: 'center' }}>
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
                                src={require('../src/images/trabajo.png')}
                            />
                            <Figure.Caption style={{ textAlign: 'center' }}>
                                <h5>Negocio</h5>
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
                            <Figure.Caption style={{ textAlign: 'center' }}>
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
                                src={require('../src/images/apoyo.png')}
                            />
                            <Figure.Caption style={{ textAlign: 'center' }}>
                                <h5>Gestión de Servicios</h5>
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
                            <Figure.Caption style={{ textAlign: 'center' }} >
                                <h5>Soporte Tecnico</h5>
                            </Figure.Caption>
                        </Figure>
                    </div>
                    <div className='figures-icons'>
                        <Figure>
                            <Figure.Image
                                width={171}
                                height={180}
                                alt="171x180"
                                src={require('../src/images/estudiar.png')}
                            />
                            <Figure.Caption style={{ textAlign: 'center' }}>
                                <h5>Educación</h5>
                            </Figure.Caption>
                        </Figure>
                    </div>

                </div>
            </Slide>

            
            <div className="carousel-partners">


                <Carousel >

                    <Carousel.Item  >
                        <img
                            className="logopartner"
                            src={require('../src/images/partners/logo-dell.png')}
                            alt="First slide"
                        />

                        <img
                            className="logopartner"
                            src={require('../src/images/partners/logo-red-hat.png')}
                            alt="First slide"
                        />
                        <img
                            className="logopartner"
                            src={require('../src/images/partners/logo-hp.png')}
                            alt="First slide"
                        />
                    </Carousel.Item>
                    <Carousel.Item >

                        <img
                            className="logopartner"
                            src={require('../src/images/partners/logo-sophos.svg')}
                            alt="First slide"
                        />
                        <img
                            className="logopartner"
                            src={require('../src/images/partners/logo-cisco.png')}
                            alt="First slide"
                        />
                        <img
                            className="logopartner"
                            src={require('../src/images/partners/logo-suse.svg')}
                            alt="First slide"
                        />
                        
                    </Carousel.Item>

                </Carousel>
            </div>

            <div className="headivs">
                <div className="tittledivs">Clientes de COMMIT</div>
                <div>
                    <h5>Somos una empresa especializada en ofrecer servicios de vanguardia a los
                            clientes</h5>
                </div>
                <div className="card-area">
                         <SimpleCard  titulo="Empresas Financieras"
                        image={require('../src/images/iconos-clientes/dinero.png')}
                        texto="Some quick example text to build on the card title and make up the bulk of the cards content."
                        to="/clientes/#financieras" />
                        <SimpleCard  titulo="Empresas de Gobierno"
                        image={require('../src/images/iconos-clientes/gobierno.png')}
                        texto="Some quick example text to build on the card title and make up the bulk of the cards content."
                        to="/clientes" />
                        <SimpleCard  titulo="Empresas Industriales"
                        image={require('../src/images/iconos-clientes/fabrica.png')}
                        texto="Some quick example text to build on the card title and make up the bulk of the cards content."
                        to="/clientes" />
                        <SimpleCard  titulo="Empresas Petroleras"
                        image={require('../src/images/iconos-clientes/industria-minera.png')}
                        texto="Some quick example text to build on the card title and make up the bulk of the cards content."
                        to="/clientes" />
                        <SimpleCard  titulo="Empresas de    Servicios"
                        image={require('../src/images/iconos-clientes/idea.png')}
                        texto="Some quick example text to build on the card title and make up the bulk of the cards content."
                        to="/clientes" />
                        <SimpleCard  titulo="Empresas de Telecomunicación"
                        image={require('../src/images/iconos-clientes/antena.png')}
                        texto="Some quick example text to build on the card title and make up the bulk of the cards content."
                        to="/clientes" />
                   
                </div>
            </div>
        </div>
       
    </div>
    );
}


export default App;