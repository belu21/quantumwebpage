import React from 'react'
import nosotros from '../json/nosotros'
import '../css/estiloNosotros.css'
import Tarjeta from './Tarjeta'

class Nosotros extends React.Component {

    state = {
        nosotros: nosotros
    }
    
    render() {
        return <div >
            
            
            <div className="head">
                NOSOTROS
            </div>
            <div className="body">

           <br></br>
            <Tarjeta info={this.state.nosotros.antecedentes} />
            <Tarjeta info={this.state.nosotros.mision} />
            <Tarjeta info={this.state.nosotros.vision} />
            <Tarjeta info={this.state.nosotros.quienessomos} />
            <Tarjeta info={this.state.nosotros.antecedentes} />
            <Tarjeta info={this.state.nosotros.mision} />
           {/*  <SubTarjeta info={this.state.nosotros.quienessomos}></SubTarjeta> */}
           </div>

        </div>;
    }
}

export default Nosotros;