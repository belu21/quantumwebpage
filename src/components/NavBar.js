import React from 'react';

import { Navbar, Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';

class NavBar extends React.Component {
    render() {
        return <div><Navbar bg="light" expand="lg">
            <Link to="/" component="Home">
                <Navbar.Brand href="./">Commit SRL</Navbar.Brand>
            </Link>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="mr-auto">
                    <Link to="/" component="Home">
                        <Nav.Link href="./">Home</Nav.Link>
                    </Link>
                    <Link to="/nosotros">
                        <Nav.Link href="./nosotros">Nosotros</Nav.Link>
                    </Link>
                    <Link to="/servicios">
                        <Nav.Link href="./servicios">Servicios y Soluciones</Nav.Link>
                    </Link>
                    <Link to="/equipamiento">
                        <Nav.Link href="./equipamiento">Equipamiento</Nav.Link>
                    </Link>
                    <Link to="/partners">
                        <Nav.Link href="./partners">Partners</Nav.Link>
                    </Link>
                    <Link to="/clientes">
                        <Nav.Link href="./clientes">Clientes</Nav.Link>
                    </Link>
                    <Link to="/casosexito">
                        <Nav.Link href="casosexito">Casos de Exito</Nav.Link>
                    </Link>
                </Nav>

                {/* <Form inline>
                    <FormControl type="text" placeholder="Search" className="mr-sm-2" />
                    <Button variant="outline-success">Search</Button>
                </Form> */}
            </Navbar.Collapse>
        </Navbar></div>
    }
}
export default NavBar;