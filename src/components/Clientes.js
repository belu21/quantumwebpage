import React from 'react'
import clientes from '../json/clientes'
import Tarjeta from './Tarjeta'

class Clientes extends React.Component{
    state = {
        clientes: clientes
    }
    render() {
        return <div  className="py-4 mw-100 w-100">

                   <Tarjeta info={this.state.clientes.telecomunicaciones} />
                   <Tarjeta info={this.state.clientes.financieras} />
                   <Tarjeta info={this.state.clientes.petroleras} />
                   
          
                </div>;
    }
}


export default Clientes;