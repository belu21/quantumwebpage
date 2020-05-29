import React from 'react'
import servicio from '../json/servicio'
import '../css/estiloServicios.css'
import icon from "../images/icon_finder_service.png"

class Servicios extends React.Component {

    state = {
        servicio: servicio
    }

    render() {
        return <div className="superior-service">
            <div className="container mb-5 jc-between">
                <h1 className="h1">Servicios</h1>
                <div className="flex-service mb-5">
                    <div className="flex-service left-service m-0">
                        <p className="content">
                            CommIT SRL ofrece una variedad de servicios con el objetivo de que nuestros clientes
                            queden satisfechos manteniendo los valores escenciales del negocio
                        </p>
                        <div className="flex-service jc-between half-and-half">
                            <div className="half">
                                <h3 className="h3">Cloud Computing</h3>
                                <p>Variedad de servicios en Cloud Computing, como ser consolidación de servidores mediante la virtualización,
                                    implementacion de cloud privada mediante OpenStack,
                                    contenedores, kubernetes,
                                    storage definido por software,
                                    infraestructura definida por software,
                                    implementación de Data Center (Servidores, Almacenamiento y Red)</p>
                            </div>
                            <div className="half">
                                <h3 className="h3">Continuidad de Negocio</h3>
                                <p>La mayoría de las organizaciones de hoy son sumamente dependientes de la tecnología de la información,
                                    pero queda claro que esta tecnología puede verse afectada por una amplia gama de incidentes potencialmente desastrosos.
                                    Éstos van desde cortes en el suministro de energía provocados por tormentas hasta la pérdida de datos causada por equivocaciones de los empleados o por criminales informáticos.</p>
                            </div>
                        </div>
                    </div>
                    <div className="icon-right-service">
                        <img src={icon} alt="icon-services" style={{width: 320, height: 320}}/>
                    </div>
                </div>
                <div className="cornell container pl-0">
                    <div className="jc-between flex-service">
                        <div className="left">
                            <h2 className="h2">Soluciones de Software a Medida</h2>
                        </div>
                        <div className="right">
                            <p className="mb-3"><span>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet architecto at atque cum ea eaque eveniet facilis fugit inventore nam nostrum, odio officiis optio porro sequi sit ut voluptates voluptatum?</span></p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    }
}

export default Servicios;
