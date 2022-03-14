import React from 'react'
import '../css/estiloServicios.css'
import icon from "../images/service_icon.png"
import {Chip} from "@material-ui/core";

class Servicios extends React.Component {
    render() {
        return <div className="superior-service">
            <div className="container mb-5 jc-between" id="servicios">
                <h1 className="h1">Servicios</h1>
                <div className="flex-service mb-5">
                    <div className="flex-service left-service m-0">
                        <p className="content">
                            Quantum SRL ofrece una variedad de servicios con el objetivo de que nuestros clientes
                            queden satisfechos manteniendo los valores escenciales del negocio
                        </p>
                        <div className="flex-service jc-between half-and-half" id="cloud">
                            <div className="half">
                                <h3 className="h3">Cloud Computing</h3>
                                <p>Variedad de servicios en Cloud Computing, como ser consolidación de servidores
                                    mediante la virtualización,
                                    implementacion de cloud privada mediante OpenStack,
                                    contenedores, kubernetes,
                                    storage definido por software,
                                    infraestructura definida por software,
                                    implementación de Data Center (Servidores, Almacenamiento y Red)</p>
                            </div>
                            <div className="half">
                                <h3 className="h3">Continuidad de Negocio</h3>
                                <p>La mayoría de las organizaciones de hoy son sumamente dependientes de la tecnología
                                    de la información,
                                    pero queda claro que esta tecnología puede verse afectada por una amplia gama de
                                    incidentes potencialmente desastrosos.
                                    Éstos van desde cortes en el suministro de energía provocados por tormentas hasta la
                                    pérdida de datos causada por equivocaciones de los empleados o por criminales
                                    informáticos (Disaster Recovery, Site Recovery); Quantum SRL te da la solución.</p>
                            </div>
                        </div>
                    </div>
                    <div className="icon-right-service">
                        <img src={icon} alt="icon-services" style={{width: 320, height: 320}}/>
                    </div>
                </div>
                <div className="cornell container pl-0" id="software">
                    <div className="jc-between flex-service">
                        <div className="left">
                            <h2 className="h2">Soluciones de Software a Medida</h2>
                        </div>
                        <div className="right">
                            <p className="mb-3">Desarrollamos Software a pedido del cliente, con una amplia gamma de
                                conocimientos por parte del backend, como ser microservicios con uso de Java</p>
                            <Chip variant="default" label="Devops" style={{margin: 6}}/>
                            <Chip variant="default" label="API REST" style={{margin: 6}}/>
                            <Chip variant="default" label="SOAP" style={{margin: 6}}/>
                            <Chip variant="default" label="Mobile" style={{margin: 6}}/>
                        </div>
                    </div>
                </div>
                <div className="cornell container pl-0" id="gestion">
                    <div className="jc-between flex-service">
                        <div className="left">
                            <h2 className="h2">Gestion de Servicios</h2>
                        </div>
                        <div className="right">
                            <p className="mb-3">Como desarrolladores, tambien nos ocupamos de organizar y gestionar
                                dichos servicios de una manera optima y eficiente, como tambien software de uso continui
                                del cliente, adecuandonos a sus necesidades.</p>
                            <Chip variant="default" label="ITIL" style={{margin: 6}}/>
                            <Chip variant="default" label="OTRS" style={{margin: 6}}/>
                        </div>
                    </div>
                </div>
                <div className="cornell container pl-0" id="soporte">
                    <div className="jc-between flex-service">
                        <div className="left">
                            <h2 className="h2">Soporte Técnico</h2>
                        </div>
                        <div className="right">
                            <p className="mb-3">Brindamos a nuestros clientes soporte técnico ante cualquier requerimiento o contingencia.</p>
                            <Chip variant="default" label="ITIL 4.0" style={{margin: 6}}/>
                            <Chip variant="default" label="Agile" style={{margin: 6}}/>
                            <Chip variant="default" label="Scrum" style={{margin: 6}}/>
                            <Chip variant="default" label="Kanban" style={{margin: 6}}/>
                            <Chip variant="default" label="XP" style={{margin: 6}}/>
                            <Chip variant="default" label="Postgres" style={{margin: 6}}/>
                            <Chip variant="default" label="Informix" style={{margin: 6}}/>
                            <Chip variant="default" label="Memsql" style={{margin: 6}}/>
                            <Chip variant="default" label="Vertica" style={{margin: 6}}/>
                        </div>
                    </div>
                </div>
                <div className="cornell container pl-0" id="educacion">
                    <div className="jc-between flex-service">
                        <div className="left">
                            <h2 className="h2">Servicios de Educación</h2>
                        </div>
                        <div className="right">
                            <p className="mb-3">Tenemos personal certificado y experto en la formación técnica y académica</p>
                            {/*un ejemplo de otro tipo de chip*/}
                            <Chip variant="outlined" label="Linux" style={{margin: 6}}/>
                            <Chip variant="outlined" label="Bases de Datos" style={{margin: 6}}/>
                            <Chip variant="outlined" label="Enterprise DB" style={{margin: 6}}/>
                            <Chip variant="outlined" label="Postgres" style={{margin: 6}}/>
                            <Chip variant="outlined" label="Informix" style={{margin: 6}}/>
                            <Chip variant="outlined" label="Memsql" style={{margin: 6}}/>
                            <Chip variant="outlined" label="Vertica" style={{margin: 6}}/>
                            <Chip variant="outlined" label="PMI (PMBOK)" style={{margin: 6}}/>
                            <Chip variant="outlined" label="Management 3.0" style={{margin: 6}}/>
                            <Chip variant="outlined" label="ITIL 4.0" style={{margin: 6}}/>
                            <Chip variant="outlined" label="Agile" style={{margin: 6}}/>
                            <Chip variant="outlined" label="Industria 4.0" style={{margin: 6}}/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    }
}

export default Servicios;
