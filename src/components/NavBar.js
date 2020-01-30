import React from 'react';

import { Navbar, Nav, NavDropdown } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import '../css/estiloNavbar.css'

class NavBar extends React.Component {
    render() {
        return <div><Navbar bg="dark" expand="lg" variant="dark" fixed="top" className='p-3'>
            <Link to="/" className="navbar-brand">CommIT SRL</Link>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="mr-auto">
                    <Link to="/" className="nav-link">Home</Link>  
                    <Link to="/nosotros" className="nav-link">
                    <NavDropdown title="Nosotros" id="collasible-nav-dropdown">
                        <NavDropdown.Item href="#valores">Nuestros valores</NavDropdown.Item>
                        <NavDropdown.Item href="#mision">Mision</NavDropdown.Item>
                        <NavDropdown.Item href="#vision">Vision</NavDropdown.Item>
                    </NavDropdown>
                    </Link>
                    <Link to="/servicios" className="nav-link">Servicios y Soluciones</Link>
                    <Link to="/equipamiento" className="nav-link">Equipamiento</Link>
                    <Link to="/partners" className="nav-link">Partners</Link>
                    <Link to="/clientes" className="nav-link">Clientes</Link>
                    <Link to="/casosexito" className="nav-link">Casos de Exito</Link>
                </Nav>
            </Navbar.Collapse>
        </Navbar><br /><br /></div>
    }
}
export default NavBar;