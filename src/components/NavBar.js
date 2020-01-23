import React from 'react';

import { Navbar,Button, Nav,Form,FormControl} from 'react-bootstrap';

class NavBar extends React.Component {
    render() {
        return <div><Navbar bg="light" expand="lg">
            <Navbar.Brand href="#home">Commit SRL</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="mr-auto">
                    <Nav.Link href="#home">Nosotros</Nav.Link>
                    <Nav.Link href="#link">Servicios y Soluciones</Nav.Link>
                    <Nav.Link href="#link">Equipamiento</Nav.Link>
                    <Nav.Link href="#link">Partners</Nav.Link>
                    <Nav.Link href="#link">Clientes</Nav.Link>
                    <Nav.Link href="#link">Casos de Exito</Nav.Link>
                    {/* <NavDropdown title="Dropdown" id="basic-nav-dropdown">
                        <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                        <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
                        <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                        <NavDropdown.Divider />
                        <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
                    </NavDropdown> */}
                </Nav>
                <Form inline>
                    <FormControl type="text" placeholder="Search" className="mr-sm-2" />
                    <Button variant="outline-success">Search</Button>
                </Form>
            </Navbar.Collapse>
        </Navbar></div>
    }
}
export default NavBar;