import React from "react";
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button'

export default function formulario(props) {


    return (<div>
        <Form action="https://docs.google.com/forms/u/1/d/e/1FAIpQLSfjD8RjD9PHANeHhms1_zp0-4ZlHJi4SaETSdT9I-xAtwI97Q/formResponse">
            <Form.Group controlId="exampleForm.ControlInput1">
                <Form.Label>Nombre:</Form.Label>
                <Form.Control type="text" placeholder="Nombre y apellido" name="entry.332443509" />
            </Form.Group>
            <Form.Group controlId="exampleForm.ControlInput2">
                <Form.Label>Empresa:</Form.Label>
                <Form.Control type="text" placeholder="Empresa en la que trabaja" name="entry.972129096"/>
            </Form.Group>
        
            <Form.Group controlId="exampleForm.ControlInput3">
                <Form.Label>Email:</Form.Label>
                <Form.Control type="email" placeholder="nombre@ejemplo.com" name="entry.1846014819"/>
            </Form.Group>
            <Form.Group controlId="exampleForm.ControlTextarea1">
                <Form.Label>Mensaje:</Form.Label>
                <Form.Control as="textarea" rows="3" name="entry.121309753"/>
            </Form.Group>
            <Button type="submit">Enviar</Button>
        </Form>


    </div>
    );
}
