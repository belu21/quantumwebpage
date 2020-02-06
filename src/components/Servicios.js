import React from 'react'
import servicio from '../json/servicio'
import Tarjeta from './Tarjeta'

class Servicios extends React.Component {

    state = {
        servicio: servicio
    }
    render() {
        return <div className="py-5 mw-100 w-100">
             <br></br>
            <Tarjeta info={this.state.servicio.cloudComputing} />
            <Tarjeta info={this.state.servicio.continuidad} />
            <Tarjeta info={this.state.servicio.desarrolloSoftware} />
            <Tarjeta info={this.state.servicio.gestionServicios} />
        </div>;
    }
}

export default Servicios;