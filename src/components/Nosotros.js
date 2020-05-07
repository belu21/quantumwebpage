import React from 'react'
import nosotros from '../json/nosotros'
import '../css/estiloNosotros.css'
import Subtitulo from "./Subtitulo";
import img1 from '../images/atardecer.jpg';
import img2 from '../images/people.jpg';

class Nosotros extends React.Component {

    state = {
        nosotros: nosotros
    }

    render() {
        return <div>
            <div className="head">
                NOSOTROS
            </div>
            <div>

                <Subtitulo titulo={this.state.nosotros.antecedentes.titulo} desc={this.state.nosotros.antecedentes.texto} background={img2} lado={"left"}></Subtitulo>
                <Subtitulo titulo={this.state.nosotros.mision.titulo} desc={this.state.nosotros.mision.texto} background={img1} lado={"right"}></Subtitulo>
                <Subtitulo titulo={this.state.nosotros.vision.titulo} desc={this.state.nosotros.vision.texto} background={img1} lado={"left"}></Subtitulo>
                {/*  <SubTarjeta info={this.state.nosotros.quienessomos}></SubTarjeta> */}
            </div>

        </div>;
    }
}

export default Nosotros;