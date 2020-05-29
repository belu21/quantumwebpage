import React from 'react'
import casosexito from '../json/casosexito'
import '../css/estiloCasosExito.css'

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
                {this.state.casosexito.virtualizacion}
            </div>;
        </div>
    }
}

export default CasosExito;
