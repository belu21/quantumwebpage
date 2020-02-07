import React from 'react';

import { Link } from 'react-router-dom';
import '../css/estiloNavbar.css'
import mainlogo from '../images/logoblanco100.png';

class NavBar extends React.Component {
    render() {
        return <div>
            <header class="header">
                <nav class="navbar navbar-expand-lg navbar-light text-ligth">
                    <Link to="/">
                        <img src={mainlogo} height='48px' width='111px' alt='commitSRL'></img>
                    </Link>
                    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul class="navbar-nav m-auto">
                            <Link to="/" className="nav-link">
                                <li class="nav-item active">
                                    Home
                                </li>
                            </Link>
                            <li class="nav-item dropdown">
                                <a class="nav-link dropdown-toggle" href="/servicios" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Servicios</a>
                                <div class="dropdown-menu px-1" aria-labelledby="navbarDropdown">
                                    <Link to="/servicios/cloud-computing" className="nav-link text-dark bg-light">
                                        Cloud Computing
                                    </Link>
                                    <Link to="/servicios/negocio" className="nav-link  text-dark bg-light">
                                        Negocio
                                    </Link>
                                    <div class="dropdown-divider"></div>
                                    <Link to="/servicios/desarrollo" className="nav-link text-dark bg-light">
                                        Desarrollo de Software
                                    </Link>
                                </div>
                            </li>
                            <li class="nav-item dropdown">
                                <a class="nav-link dropdown-toggle" href="/nosotros" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                    Nosotros
                                </a>
                                <div class="dropdown-menu px-1" aria-labelledby="navbarDropdown">
                                    <Link to="/nosotros/valores" className="nav-link text-dark bg-light">
                                        Valores
                                    </Link>
                                    <Link to="/nosotros/mision" className="nav-link text-dark bg-light">
                                        Mision
                                    </Link>
                                    <Link to="/nosotros/vision" className="nav-link text-dark bg-light">
                                        Vision
                                    </Link>
                                    <div class="dropdown-divider"></div>
                                    <Link to="/nosotros/quienes-somos" className="nav-link text-dark bg-light">
                                        Quienes Somos
                                    </Link>
                                </div>
                            </li>
                            <Link to="/partners" className="nav-link">Partners</Link>
                            <li class="nav-item dropdown">
                                <a class="nav-link dropdown-toggle" href="/servicios" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Clientes</a>
                                <div class="dropdown-menu px-1" aria-labelledby="navbarDropdown">
                                    <Link to="/clientes/empresas-telecomunicaciones" className="nav-link text-dark bg-light">
                                        Empresas y Telecomunicaciones
                                    </Link>
                                    <Link to="/clientes/empresas-financieras" className="nav-link  text-dark bg-light">
                                        Empresas Financieras
                                    </Link>
                                    <div class="dropdown-divider"></div>
                                    <Link to="/clientes/empresas-petroleras" className="nav-link text-dark bg-light">
                                        Empresas Petroleras
                                    </Link>
                                </div>
                            </li>
                            <Link to="/home/contactanos" className="nav-link">Contáctanos</Link>
                        </ul>
                        <form class="form-inline my-2 my-lg-0">
                            <input class="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" />
                            <button class="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
                        </form>
                    </div>
                </nav>
            </header></div>
    }
}
export default NavBar;