import React from 'react'
import Formulario from "./Formulario"
import Button from 'react-bootstrap/Button'
// import MessengerCustomerChat from 'react-messenger-customer-chat';

class Contactanos extends React.Component{
    constructor() {
        super();
        this.state = { checked: false };
        this.handleChange = this.handleChange.bind(this);
      }
    
      handleChange(checked) {
        this.setState({ checked });
      }


    render() {
        return <div>
             <div className="formulario">
                     <h3>Dejanos un mensaje, respondemos a la brevedad posible.</h3>
                     <br></br>
                     <br></br>
                     <Button variant="danger" onClick={() => this.handleChange(true)}>Llenar Formulario</Button> 
                     {this.state.checked ? ( <Formulario></Formulario>):(<div> </div>)}
            </div>
        </div>
    }
}

export default Contactanos;
