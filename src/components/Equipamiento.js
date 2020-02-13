import React from 'react'
import equipamiento from '../json/equipamiento'
import '../css/estiloEquipamiento.css'
import Tarjeta from './Tarjeta'


class Equipamiento extends React.Component{
    state = {
        equipamiento: equipamiento
    }
    render() {
        return <div>
            <div className="head">
                EQUIPAMIENTO
            </div>
            <div className="body">

            <br></br>

                   <Tarjeta info={this.state.equipamiento.infraestructura} />
                   <Tarjeta info={this.state.equipamiento.seguridad} />
            </div>;
        </div>
    }
}

export default Equipamiento;