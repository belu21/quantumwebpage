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
        return <div className="nosotros">
            <div className="head">
                NOSOTROS
            </div>
            <div>

                {/*<Subtitulo titulo={this.state.nosotros.antecedentes.titulo} desc={this.state.nosotros.antecedentes.texto} background={img2} lado={"left"}></Subtitulo>*/}
                <Subtitulo titulo="Valores" desc="Nuestros valores forman parte vital de CommIT. Promovemos la mejora continua, la profesionalidad, la ilusión en el trabajo, Compromiso con el éxito de nuestros clientes: Entendemos las necesidades de nuestros clientes
internos y cumplimos lo que ofrecemos. El éxito de los clientes es nuestro éxito.
Ética incuestionable: La integridad es la base fundamental de nuestra vida diaria y sustenta cada
decisión que tomamos.

Flexibilidad y agilidad con un propósito: Adaptación al cambio constante, para crear soluciones
corden a las las necesidades del cliente que y contribuyen a mejores resultados.

Sentido de equipo: Creemos en la colaboración y confianza mutua. Entendemos que nuestro éxito global
depende de la sinergia que construyamos en conjunto.

Respeto por el individuo y por la diversidad: Para nosotros las diferencias no son obstáculos sino
valiosas oportunidades de aprendizaje.

Responsabilidad: Por el servicio que ofrecemos," background={img2} lado={"left"}></Subtitulo>
                <Subtitulo titulo={this.state.nosotros.mision.titulo} desc="Somos una empresa que ofrece soluciones
innovadoras estableciendo alianzas estratégicas
duraderas potenciando el crecimiento de
nuestros clientes acorde a la evolución
tecnológica emergente a nivel mundial" background={img1} lado={"right"}></Subtitulo>
                <Subtitulo titulo={this.state.nosotros.vision.titulo} desc="Apoyar a nuestros clientes en la provisión de
soluciones tecnológicas vanguardistas que generen
de valor para sus organizaciones logrando su
credibilidad y confianza" background={img1} lado={"left"}></Subtitulo>
                {/*  <SubTarjeta info={this.state.nosotros.quienessomos}></SubTarjeta> */}
            </div>

        </div>;
    }
}

export default Nosotros;