import React from 'react'
import contactanos from '../json/contactanos'
import Tarjeta from './Tarjeta'



class Contactanos extends React.Component{
    state = {
        contactanos: contactanos
    }
    render() {
        return <div  className="py-4 mw-100 w-100">

                   <Tarjeta info={this.state.contactanos.donde} />
                   <Tarjeta info={this.state.contactanos.contacto} />
            
                   
          
                </div>;
    }
}

export default Contactanos;