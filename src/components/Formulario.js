import React, { Component } from 'react';


class formulario extends Component {

    /*
    constructor(props) {
        super(props);
        this.enviar = this.enviar.bind(this);
    }

    enviar(event) {
        event.preventDefault();
        const data = new FormData(event.target);
        
        fetch('https://docs.google.com/forms/u/1/d/e/1FAIpQLSfjD8RjD9PHANeHhms1_zp0-4ZlHJi4SaETSdT9I-xAtwI97Q/formResponse', {
          method: 'POST',
          body: data,
        });
      }

       render(){
    return (<div>
        
        <Form action='https://docs.google.com/forms/u/1/d/e/1FAIpQLSfjD8RjD9PHANeHhms1_zp0-4ZlHJi4SaETSdT9I-xAtwI97Q/formResponse'>
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
            <Button type='submit'>Enviar</Button>
        </Form>
       


    </div>
    );
}
}
export default formulario;

     */
     
      render(){
    return (<div>
        
       <iframe src="https://docs.google.com/forms/d/e/1FAIpQLSfjD8RjD9PHANeHhms1_zp0-4ZlHJi4SaETSdT9I-xAtwI97Q/viewform?embedded=true" width="100%" height="781" frameborder="0" marginheight="0" marginwidth="0">Cargando…</iframe>

    </div>
    );
}
}
export default formulario;
