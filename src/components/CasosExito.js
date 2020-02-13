import React from 'react'
import casosexito from '../json/casosexito'
import '../css/estiloCasosExito.css'
import Tarjeta from './Tarjeta'

class CasosExito extends React.Component{
    state = {
        casosexito: casosexito
    }
    render() {
        return <div>
            <div className="head">
                CASOS DE EXITO
            </div>
            <div className="body">

                <br></br>

                   <Tarjeta info={this.state.casosexito.virtualizacion} />
          
            </div>;
        </div>
    }
}

export default CasosExito;