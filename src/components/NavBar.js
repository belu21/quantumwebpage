import React from 'react';

import { Navbar, Nav, NavDropdown } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import '../css/estiloNavbar.css'
import mainLogo from '../images/logoblanco100.png'


class NavBar extends React.Component {
    render() {
        return <div><Navbar bg="" expand="lg" variant="" fixed="top" className="p-3">
            <Link to="/" className="navbar-brand">
            <img src={mainLogo}  alt='commitSRL' className='logo'></img>
            </Link>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="mr-auto text-dark">
                    <Link to="/" className="nav-link text-dark">
                      Home
                    </Link>

                    <NavDropdown title="Nosotros" id="basic-nav-dropdown" className="text-dark">
                        <Link to="/nosotros/quienessomos" className="nav-link text-dark bg-light">Quienes somos</Link>
                        <Link to="/nosotros/mision" className="nav-link text-dark bg-light">Mision</Link>
                        <Link to="/nosotros/vision" className="nav-link text-dark bg-light">Vision</Link>
                        <NavDropdown.Divider />
                        <NavDropdown.Item>Separated link</NavDropdown.Item>
                    </NavDropdown>
                    <Link to="/servicios" className="nav-link text-dark">Servicios y Soluciones</Link>
                    <Link to="/equipamiento" className="nav-link text-dark">Equipamiento</Link>
                    <Link to="/partners" className="nav-link text-dark">Partners</Link>
                    <Link to="/clientes" className="nav-link text-dark">Clientes</Link>
                    <Link to="/casosexito" className="nav-link text-dark">Casos de Exito</Link>
                    <Link to="/" className="nav-link text-dark ">Contáctanos</Link>
                </Nav>
            </Navbar.Collapse>
        </Navbar><br /><br/></div>
    }
}
export default NavBar;