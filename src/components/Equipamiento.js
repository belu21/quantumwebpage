import React from 'react'
import equipamiento from '../json/equipamiento'
import Tarjeta from './Tarjeta'


class Equipamiento extends React.Component{
    state = {
        equipamiento: equipamiento
    }
    render() {
        return <div  className="py-5 mw-100 w-100">
            <br></br>

                   <Tarjeta info={this.state.equipamiento.infraestructura} />
                   <Tarjeta info={this.state.equipamiento.seguridad} />
            
                   
          
                </div>;
    }
}

export default Equipamiento;