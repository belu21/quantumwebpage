import React from 'react';

import { Navbar, Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';

class NavBar extends React.Component {
    render() {
        return <div><Navbar bg="light" expand="lg">
            <Link to="/" className="navbar-brand">
                CommIT SRL
            </Link>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="mr-auto">
                    <Link to="/" className="nav-link">Home</Link>
                    <Link to="/nosotros" className="nav-link">Nosotros</Link>
                    <Link to="/servicios" className="nav-link">Servicios y Soluciones</Link>
                    <Link to="/equipamiento" className="nav-link">Equipamiento</Link>
                    <Link to="/partners" className="nav-link">Partners</Link>
                    <Link to="/clientes" className="nav-link">Clientes</Link>
                    <Link to="/casosexito" className="nav-link">Casos de Exito</Link>
                </Nav>
            </Navbar.Collapse>
        </Navbar></div>
    }
}
export default NavBar;