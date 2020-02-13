import React from 'react'
import servicio from '../json/servicio'
import '../css/estiloServicios.css'
import Tarjeta from './Tarjeta'

class Servicios extends React.Component {

    state = {
        servicio: servicio
    }
    render() {
        return <div>
            <div className="head">
                SERVICIOS
            </div>
            <div className="body">

             <br></br>
            <Tarjeta info={this.state.servicio.cloudComputing} />
            <Tarjeta info={this.state.servicio.continuidad} />
            <Tarjeta info={this.state.servicio.desarrolloSoftware} />
            <Tarjeta info={this.state.servicio.gestionServicios} />
        </div>;
    </div>
    }
}

export default Servicios;