import React from 'react'
import nosotros from '../json/nosotros'
import '../css/estiloNosotros.css'
import Subtitulo from "./Subtitulo";
import imagen1 from '../images/atardecer.jpg';

class Nosotros extends React.Component {

    state = {
        nosotros: nosotros
    }

    render() {
        return <div>


            <div className="head">
                NOSOTROS
            </div>
            <div className="body">

                <Subtitulo titulo={this.state.nosotros.antecedentes.titulo}
                           desc={this.state.nosotros.antecedentes.texto} background={imagen1} lado={"left"}></Subtitulo>


                {/*  <SubTarjeta info={this.state.nosotros.quienessomos}></SubTarjeta> */}
            </div>

        </div>;
    }
}

export default Nosotros;