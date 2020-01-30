import React from 'react';

import { Navbar, Nav, NavDropdown } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import '../css/estiloNavbar.css'

class NavBar extends React.Component {
    render() {
        return <div><Navbar bg="dark" expand="lg" variant="dark" fixed="top" className="p-3">
            <Link to="/" className="navbar-brand">CommIT SRL</Link>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="mr-auto">
                    <Link to="/" className="nav-link">Home</Link>

                    <NavDropdown title="Nosotros" id="basic-nav-dropdown">
                        <Link to="/nosotros/quienessomos" className="nav-link text-dark bg-light">Quienes somos</Link>
                        <Link to="/nosotros/mision" className="nav-link text-dark bg-light">Mision</Link>
                        <Link to="/nosotros/vision" className="nav-link text-dark bg-light">Vision</Link>
                        <NavDropdown.Divider />
                        <NavDropdown.Item>Separated link</NavDropdown.Item>
                    </NavDropdown>
                    <Link to="/servicios" className="nav-link">Servicios y Soluciones</Link>
                    <Link to="/equipamiento" className="nav-link">Equipamiento</Link>
                    <Link to="/partners" className="nav-link">Partners</Link>
                    <Link to="/clientes" className="nav-link">Clientes</Link>
                    <Link to="/casosexito" className="nav-link">Casos de Exito</Link>
                    <Link to="/" className="nav-link">Contáctanos</Link>
                </Nav>
            </Navbar.Collapse>
        </Navbar><br /><br/></div>
    }
}
export default NavBar;