import React from 'react'
import servicio from '../json/servicio'
import '../css/estiloServicios.css'
import continuidad from "../images/continuidad.png"
import cloud from "../images/cloudcomp.png"


class Servicios extends React.Component {

    state = {
        servicio: servicio
    }
    render() {
        return <div>
            <div className="head">
                SERVICIOS
                <div className="service">
                    <div className="">{this.state.servicio.cloudComputing.titulo}<img src={cloud} height={100} alt={"not_found"}></img></div>
                    <div className="jumbotron servdesc">{this.state.servicio.cloudComputing.subs}</div>
                </div>
                <div className="service">
                    <div className="">{this.state.servicio.continuidad.titulo}<img src={continuidad} height={100} alt={"not_found"}></img></div>
                    {/*<div className="jumbotron servdesc">*/}
                    {/*    Alta Disponibilidad*/}
                    {/*</div>*/}
                    <div className="circleBase circle servdesc">
                        <p>Alta disponibilidad</p>
                    </div>
                    <div className="circleBase circle servdesc">
                        <p>Disaster Recovery</p>
                    </div>
                    <div className="circleBase circle servdesc">
                        <p>Site Recovery</p>
                    </div>
                </div>
                <div className="service">
                    <div className="">{this.state.servicio.servicioEducacion.titulo}<img src={continuidad} height={100} alt={"not_found"}></img></div>
                    {/*<div className="jumbotron servdesc">*/}
                    {/*    Alta Disponibilidad*/}
                    {/*</div>*/}
                    <div className="circleBase circle servdesc">
                        <p>PMI Dirección de Proyectos PMBOK</p>
                    </div>
                    <div className="circleBase circle servdesc">
                        <p>Management 3.0</p>
                    </div>
                    <div className="circleBase circle servdesc">
                        <p>ITIL 4.0</p>
                    </div>
                </div>
                <div className="service">
                    <div className="circleBase circle servdesc">
                        <p>Scrum, Kanban, XP</p>
                    </div>
                    <div className="circleBase circle servdesc">
                        <p>Industria 4.0Linux básico, medio y Avanzado</p>
                    </div>
                    <div className="circleBase circle servdesc">
                        <p>ITIL 4.0</p>
                    </div>
                    <div className="circleBase circle servdesc">
                        <p>Industria 4.0</p>
                    </div>
                </div>
                <div className="service">
                    <div className="">{this.state.servicio.desarrolloSoftware.titulo}<img src={continuidad} height={100} alt={"not_found"}></img></div>
                    <div className="circleBase circle servdesc">
                        <p>DEVOPS</p>
                    </div>
                    <div className="circleBase circle servdesc">
                        <p>Desarrollo de Apis</p>
                    </div>
                    <div className="circleBase circle servdesc">
                        <p>Desarrollo Mobile</p>
                    </div>
                </div>
                <div className="service">
                    <div className="">{this.state.servicio.gestionServicios.titulo}<img src={continuidad} height={100} alt={"not_found"}></img></div>
                    <div className="circleBase circle servdesc">
                        <p>ITIL</p>
                    </div>
                    <div className="circleBase circle servdesc">
                        <p>OTRS</p>
                    </div>
                </div>
                <div className="service">
                    <div className="">{this.state.servicio.soporteTecnico.titulo}<img src={continuidad} height={100} alt={"not_found"}></img></div>
                    <div className="circleBase circle servdesc">
                        <p>Infraestructura de IT (hardware y software)</p>
                    </div>
                    <div className="circleBase circle servdesc">
                        <p>7x24</p>
                    </div>
                    <div className="circleBase circle servdesc">
                        <p>Bolsa de horas</p>
                    </div>
                    <div className="circleBase circle servdesc">
                        <p>Con niveles de escalamiento al fabricante</p>
                    </div>
                </div>

            </div>
            {/*<div className="body">*/}
            {/*    <Subtitulo titulo={this.state.servicio.continuidad.titulo} desc={this.state.servicio.continuidad.subs} background={img2} lado={"left"}></Subtitulo>*/}
            {/*    <Subtitulo titulo={this.state.servicio.desarrolloSoftware.titulo} desc={this.state.servicio.desarrolloSoftware.subs} background={img2} lado={"left"}></Subtitulo>*/}
            {/*    <Subtitulo titulo={this.state.servicio.gestionServicios.titulo} desc={this.state.servicio.gestionServicios.subs} background={img2} lado={"left"}></Subtitulo>*/}
            {/*</div>*/}
            {/*<div className="body">*/}
            {/*    <Subtitulo titulo={this.state.servicio.servicioEducacion.titulo} desc={this.state.servicio.servicioEducacion.subs} background={img2} lado={"left"}></Subtitulo>*/}
            {/*    <Subtitulo titulo={this.state.servicio.soporteTecnico.titulo} desc={this.state.servicio.soporteTecnico.subs} background={img2} lado={"right"}></Subtitulo>*/}
            {/*</div>*/}
    </div>
    }
}

export default Servicios;