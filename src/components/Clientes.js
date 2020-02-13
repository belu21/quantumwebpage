import React from 'react'
import clientes from '../json/clientes'
import '../css/estiloClientes.css'
import Tarjeta from './Tarjeta'

class Clientes extends React.Component{
    state = {
        clientes: clientes
    }
    render() {
        return <div>
            <div className="head">
                CLIENTES
            </div>
            <div className="body">


                    <br></br>
                   <Tarjeta info={this.state.clientes.telecomunicaciones} />
                   <Tarjeta info={this.state.clientes.financieras} />
                   <Tarjeta info={this.state.clientes.petroleras} />
                   
          
            </div>;
        </div>
    }
}


export default Clientes;