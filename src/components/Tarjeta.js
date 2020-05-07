import React from 'react'
import '../css/estiloTarjeta.css'

class Tarjeta extends React.Component {

    render() {
        return <div className="tarjetita">
            <div className="card">
                {/*<h4>hola</h4>*/}
                <div className="title">{this.props.info.titulo}</div>
                <p>{this.props.info.texto}</p>
                <a href={this.props.to}>Leer más</a>
            </div>
        </div>
    }
}

export default Tarjeta;