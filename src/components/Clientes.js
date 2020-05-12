import React from 'react'
import clientes from '../json/clientes'
import '../css/estiloClientes.css'
import continuidad from "../images/continuidad.png";

class Clientes extends React.Component{
    state = {
        clientes: clientes
    }
    render() {
        return <div>
            <div className="head">
                CLIENTES
            </div>
            {/*<div className="body">*/}
            {/*        <br></br>*/}
            {/*       <Tarjeta info={this.state.clientes.telecomunicaciones} />*/}
            {/*       <Tarjeta info={this.state.clientes.financieras} />*/}
            {/*       <Tarjeta info={this.state.clientes.petroleras} />*/}
            {/*</div>;*/}
            <div className="service">
                <div className="">{this.state.clientes.telecomunicaciones.titulo}<img src={continuidad} height={100} alt={"not_found"}></img></div>
                {/*<div className="jumbotron servdesc">*/}
                {/*    Alta Disponibilidad*/}
                {/*</div>*/}
                <div className="circleBase circle servdesc">
                    <p>ENTEL</p>
                </div>
                <div className="circleBase circle servdesc">
                    <p>TIGO</p>
                </div>
                <div className="circleBase circle servdesc">
                    <p>COTAS</p>
                </div>
            </div>
            <div className="service">
                <div className="">{this.state.clientes.financieras.titulo}<img src={continuidad} height={100} alt={"not_found"}></img></div>
                {/*<div className="jumbotron servdesc">*/}
                {/*    Alta Disponibilidad*/}
                {/*</div>*/}
                <div className="pads">
                <div className="circleBase circle servdesc">
                    <p>Banco Económico</p>
                </div>
                    <div className="circleBase circle servdesc">
                        <p>EDV (Entidad de Depósito de Valores)</p>
                    </div>
                <div className="circleBase circle servdesc">
                    <p>Banco Central de Bolivia</p>
                </div>
                <div className="circleBase circle servdesc">
                    <p>Cooperativa Jesús Nazareno</p>
                </div>
                <div className="circleBase circle servdesc">
                    <p>Cooperativa San Martin de Porres</p>
                </div>
                <div className="circleBase circle servdesc">
                    <p>Cooperativa Fátima</p>
                </div>
                <div className="circleBase circle servdesc">
                    <p>Brinks Bolivia</p>
                </div>
                </div>
            </div>
            <div className="service">
                <div className="">{this.state.clientes.petroleras.titulo}<img src={continuidad} height={100} alt={"not_found"}></img></div>
                {/*<div className="jumbotron servdesc">*/}
                {/*    Alta Disponibilidad*/}
                {/*</div>*/}
                <div className="circleBase circle servdesc">
                    <p>Andina</p>
                </div>
                <div className="circleBase circle servdesc">
                    <p>Chaco</p>
                </div>
                <div className="circleBase circle servdesc">
                    <p>Repsol</p>
                </div>
                <div className="circleBase circle servdesc">
                    <p>Petrobras</p>
                </div>
                <div className="circleBase circle servdesc">
                    <p>Transporte</p>
                </div>
            </div>
        </div>
    }
}


export default Clientes;