import React from 'react';
import './App.css';
import NavBar from './components/NavBar.js';
import Footer from './components/Footer.js';
import { BrowserRouter as Router, Route } from 'react-router-dom'
import Nosotros from './components/Nosotros';
import Servicios from './components/Servicios';
import Partners from './components/Partners';
import Clientes from './components/Clientes';
import { Link } from 'react-router-dom';


import SimpleCard from "./components/SimpleCard";
import ControlledCarousel from "./components/ControlledCarousel";
import Figure from 'react-bootstrap/Figure';
import Slide from '@material-ui/core/Slide';
import Carousel from 'react-bootstrap/Carousel'
import PoliticaPrivacidad from "./components/PoliticaPrivacidad";
import CondicionesServicio from "./components/CondicionesServicio";
import Contactanos from "./components/Contactanos";



function App() {
    return (
        <div className='home'>
            <Router>
                <NavBar />
                <Route path="/" exact component={Home} />
                <Route path="/nosotros" component={Nosotros} handler={Nosotros} />
                <Route path="/nosotros/#vision" exact component={Nosotros} handler={CondicionesServicio} />
                <Route path="/nosotros/#vision" exact component={Nosotros} handler={PoliticaPrivacidad} />
                <Route path="/servicios" component={Servicios} />
                <Route path="/partners" component={Partners} />
                <Route path="/clientes" component={Clientes} />
                <Route path="/politica-privacidad" component={PoliticaPrivacidad} />
                <Route path="/condiciones-serv" component={CondicionesServicio} />
                <Route path="/contactanos" component={Contactanos} />
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
                    Quantum
                    </div>
                <div className="tarjeta-subhome ">
                    Innovación  <br />
                        Aplicada
                    </div>
                    <br/>
                    <br/>
                    <br/>
                    <br/>
                    <br/>
                <div className="tarjeta-subhome1 container">
                    <p>
                        La empresa Quantum tiene el nombre emblemático que representa la Tecnología en todo ámbito.
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

            <Slide direction='right' mountOnEnter unmountOnExit timeout={1200}> {/*in='true'*/}
                <div className='servicios-home'>
                    <h1 className='titulo-servicios-home'>Servicios</h1>
                    <div className='figures-icons'>
                        <Link to='/servicios/cloud-computing'>
                        <Figure>
                            <Figure.Image width={171} height={180} alt="171x180" src={require('../src/images/cloud.png')}/> {/*fluid = "true"*/}
                            <Figure.Caption style={{ textAlign: 'center' }}>
                                <h5> Cloud Computing</h5>
                            </Figure.Caption>
                        </Figure>
                        </Link>
                    </div>
                    <div className='figures-icons'>
                        <Link to='/servicios/#negocio'>
                        <Figure>
                            <Figure.Image width={171} height={180} alt="171x180" src={require('../src/images/trabajo.png')}/>
                            <Figure.Caption style={{ textAlign: 'center' }}>
                                <h5>Negocio</h5>
                            </Figure.Caption>
                        </Figure>
                        </Link>
                    </div>
                    <div className='figures-icons'>
                        <Link to='/servicios/#software'>
                        <Figure>
                            <Figure.Image width={171} height={180} alt="171x180" src={require('../src/images/software.png')}/>
                            <Figure.Caption style={{ textAlign: 'center' }}>
                                <h5>Desarrollo de Software</h5>
                            </Figure.Caption>
                        </Figure>
                        </Link>
                    </div>
                    <div className='figures-icons'>
                        <Link to='/servicios/#gestion'>
                        <Figure>
                            <Figure.Image width={171} height={180} alt="171x180" src={require('../src/images/apoyo.png')}/>
                            <Figure.Caption style={{ textAlign: 'center' }}>
                                <h5>Gestión de Servicios</h5>
                            </Figure.Caption>
                        </Figure>
                        </Link>
                    </div>
                    <div className='figures-icons'>
                        <Link to='/servicios/#soporte'>
                        <Figure>
                            <Figure.Image width={171} height={180} alt="171x180" src={require('../src/images/soporte-tecnico.png')}/>
                            <Figure.Caption style={{ textAlign: 'center' }} >
                                <h5>Soporte Tecnico</h5>
                            </Figure.Caption>
                        </Figure>
                        </Link>
                    </div>
                    <div className='figures-icons'>
                        <Link to='/servicios/#educacion'>
                        <Figure>
                            <Figure.Image width={171} height={180} alt="171x180" src={require('../src/images/estudiar.png')}/>
                            <Figure.Caption style={{ textAlign: 'center' }}>
                                <h5>Educación</h5>
                            </Figure.Caption>
                        </Figure>
                        </Link>
                    </div>
                </div>
            </Slide>

            <div className="carousel-partners">
                <Carousel >
                    <Carousel.Item>
                        <Link to='/partners/#dell'>
                        <img className="logopartner" src={require('../src/images/partners/logo-dell.png')} alt="First slide"/>
                        </Link>
                        <Link to='/partners/#redhat'>
                        <img className="logopartner" src={require('../src/images/partners/logo-red-hat.png')} alt="First slide"/>
                        </Link>
                        <Link to='/partners/#hp'>
                        <img className="logopartner" src={require('../src/images/partners/logo-hp.png')} alt="First slide"/>
                        </Link>
                    </Carousel.Item>
                    <Carousel.Item style={{position: "inherit"}}>
                        <Link to='/partners/#sophos'>
                        <img className="logopartner" src={require('../src/images/partners/logo-sophos.svg')} alt="First slide"/>
                        </Link>
                        <Link to='/partners/#cisco'>
                        <img className="logopartner" src={require('../src/images/partners/logo-cisco.png')} alt="First slide"/>
                        </Link>
                        <Link to='/partners/#suse'>
                        <img className="logopartner" src={require('../src/images/partners/logo-suse.svg')} alt="First slide"/>
                        </Link>
                    </Carousel.Item>
                </Carousel>
            </div>

            <div className="headivs">
                <div className="tittledivs">Clientes de Quantum</div>
                <div>
                    <h5>Somos una empresa especializada en ofrecer servicios de vanguardia a los
                            clientes</h5>
                </div>
                <div className="card-area">
                         <Link to={"/clientes/#financieras"}>
                             <SimpleCard  titulo="Empresas Financieras"
                                          image={require('../src/images/iconos-clientes/dinero.png')}
                                 // texto="Some quick example text to build on the card title and make up the bulk of the cards content."
                                          to="/clientes/#financieras" />
                         </Link>
                        <Link to={"/clientes/#gobierno/"}>
                            <SimpleCard  titulo="Empresas de Gobierno"
                                         image={require('../src/images/iconos-clientes/gobierno.png')}
                                // texto="Some quick example text to build on the card title and make up the bulk of the cards content."
                                         to="/clientes/#gobierno/" />
                        </Link>
                        <Link to={"/clientes/#industriales"}>
                            <SimpleCard  titulo="Empresas Industriales"
                                         image={require('../src/images/iconos-clientes/fabrica.png')}
                                // texto="Some quick example text to build on the card title and make up the bulk of the cards content."
                                         to="/clientes/#industriales" />
                        </Link>
                        <Link to={"/clientes/#petroleras"}>
                            <SimpleCard titulo="Empresas Petroleras"
                                        image={require('../src/images/iconos-clientes/industria-minera.png')}
                                // texto="Some quick example text to build on the card title and make up the bulk of the cards content."
                                        to="/clientes/#petroleras" />
                        </Link>
                        <Link to={"/clientes/#emp_servicio"}>
                            <SimpleCard  titulo="Empresas de    Servicios"
                                         image={require('../src/images/iconos-clientes/idea.png')}
                                // texto="Some quick example text to build on the card title and make up the bulk of the cards content."
                                         to="/clientes/#emp_servicio" />
                        </Link>
                        <Link to={"/clientes/#tele"}>
                            <SimpleCard  titulo="Empresas de Telecomunicación"
                                         image={require('../src/images/iconos-clientes/antena.png')}
                                // texto="Some quick example text to build on the card title and make up the bulk of the cards content."
                                         to="/clientes/#tele" />
                        </Link>
                   
                </div>
            </div>
        </div>
       
    </div>
    );
}


export default App;
