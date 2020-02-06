import React from 'react'
import casosexito from '../json/casosexito'
import Tarjeta from './Tarjeta'

class CasosExito extends React.Component{
    state = {
        casosexito: casosexito
    }
    render() {
        return <div  className="py-5 mw-100 w-100">
                <br></br>

                   <Tarjeta info={this.state.casosexito.virtualizacion} />
          
                </div>;
    }
}

export default CasosExito;