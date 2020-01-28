import React from 'react'
import nosotros from '../json/nosotros'
import '../css/estiloNosotros.css'
import Tarjeta from './Tarjeta'

class Nosotros extends React.Component {

    state = {
        nosotros: nosotros
    }
    render() {
        return <div className="py-4 mw-100 w-100">
            <Tarjeta info={this.state.nosotros.valores} />
            <Tarjeta info={this.state.nosotros.mision} />
            <Tarjeta info={this.state.nosotros.vision} />
        </div>;
    }
}

export default Nosotros;