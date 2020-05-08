import React from 'react'
import contactanos from '../json/contactanos'
import '../css/estiloContactanos.css'

class Contactanos extends React.Component{
    state = {
        contactanos: contactanos
    }
    render() {
        return <div>
            <div className="head">
                CONTÁCTANOS
            </div>
            {/*<div className="body">*/}
            {/*        <br></br>*/}
            {/*       <Tarjeta info={this.state.contactanos.donde} />*/}
            {/*       <Tarjeta info={this.state.contactanos.contacto} />*/}
            {/*</div>;*/}
        </div>
    }
}

export default Contactanos;