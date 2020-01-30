import React from 'react'
import servicio from '../json/servicio'
import Tarjeta from './Tarjeta'

class Servicios extends React.Component {

    state = {
        servicio: servicio
    }
    render() {
        return <div className="py-4 mw-100 w-100">
            <Tarjeta info={this.state.servicio.softEmpresarial} />
            <Tarjeta info={this.state.servicio.openSource} />
            <Tarjeta info={this.state.servicio.javajboss} />
            <Tarjeta info={this.state.servicio.asistenciaTec} />
            <Tarjeta info={this.state.servicio.capacitacion} />
            {/* <Tarjeta info={this.state.servicio.consultoria} /> */}
            <Tarjeta info={this.state.servicio.javajboss} />
            <Tarjeta info={this.state.servicio.bussiness} />
            <Tarjeta info={this.state.servicio.procesosNegocio} />
        </div>;
    }
}

export default Servicios;