import React from 'react'
import equipamiento from '../json/equipamiento'
import '../css/estiloEquipamiento.css'


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
                {this.state.equipamiento.infraestructura}
                {this.state.equipamiento.seguridad}
            </div>;
        </div>
    }
}

export default Equipamiento;
