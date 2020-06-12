import React from 'react'
import '../css/estiloPartners.css'
import cisco from "../images/partners/logo-cisco.png";
import dell from "../images/partners/logo-dell.png";
import hp from "../images/partners/logo-hp.png";
import redhat from "../images/partners/logo-red-hat.png";
import sophos from "../images/partners/logo-sophos.svg";
import suse from "../images/partners/logo-suse.svg";
import arcserve from "../images/partners/logo-arcserve.png";

class Partners extends React.Component{
    render() {
        return <div>
            <div className="superior-service">
                <div className="container mb-5 jc-between" id="servicios">
                    <h1 className="h1">Nuestros Partners</h1>
                    <div className="flex-service mb-5">
                        <div className="flex-service left-service m-0">
                            <p className="content">
                            Trabajamos con socios que ofrecen excelentes soluciones y servicios, lideres en sus respectivos rubros
                            </p>
                        </div>
                        <div className="flex-service jc-between half-and-half card-part" id="cisco">
                            <div className="half">
                                <h3 className="h3">Cisco</h3>
                                <p>La tecnología Cisco, resuelve, crea, inspira, sana y se asegura de ayudarte a contruir tus puentes.</p>
                            </div>
                            <div className="half">
                                <div className="icon-right-service  text-center">
                                    <img src={cisco} alt="icon-cisco" style={{width: "100%", height: 160, paddingLeft: 30, paddingRight: 30}}/>
                                </div>
                            </div>
                        </div>
                        <div className="flex-service jc-between half-and-half card-part" id="dell">
                            <div className="half">
                                <h3 className="h3">Dell</h3>
                                <p>Dell potencia a países, comunidades, clientes y a gente de cualquier lugar para que usen la tecnología con el fin de concretar sus sueños</p>
                            </div>
                            <div className="half">
                                <div className="icon-right-service text-center">
                                    <img src={dell} alt="icon-dell" style={{width: "70%"}}/>
                                </div>
                            </div>
                        </div>
                        <div className="flex-service jc-between half-and-half card-part" id="hp">
                            <div className="half">
                                <h3 className="h3">HP</h3>
                                <p>La visión de HP consiste en crear tecnología que mejore la vida de todos, en todas partes: cada persona, cada organización y cada comunidad de todo el mundo.</p>
                            </div>
                            <div className="half">
                                <div className="icon-right-service text-center">
                                    <img src={hp} alt="icon-hp" style={{width: "60%"}}/>
                                </div>
                            </div>
                        </div>
                        <div className="flex-service jc-between half-and-half card-part" id="redhat">
                            <div className="half">
                                <h3 className="h3">Red Hat</h3>
                                <p>Red Hat es el proveedor líder mundial de soluciones de TI empresariales de código abierto.</p>
                            </div>
                            <div className="half">
                                <div className="icon-right-service text-center">
                                    <img src={redhat} alt="icon-redhat" style={{width: "100%", height: 250}}/>
                                </div>
                            </div>
                        </div>
                        <div className="flex-service jc-between half-and-half card-part" id="sophos">
                            <div className="half">
                                <h3 className="h3">Sophos</h3>
                                <p>Sophos evoluciona para hacer frente a cada nuevo reto y protege a más de 400 000 empresas de todos los tamaños en más de 150 países frente a las ciberamenazas actuales más avanzadas. </p>
                            </div>
                            <div className="half">
                                <div className="icon-right-service text-center">
                                    <img src={sophos} alt="icon-sophos" style={{width: "100%", height: 250}}/>
                                </div>
                            </div>
                        </div>
                        <div className="flex-service jc-between half-and-half card-part" id="suse">
                            <div className="half">
                                <h3 className="h3">Suse</h3>
                                <p>SUSE trabaja con un ecosistema de partners y comunidades para ofrecer una infraestructura definida por software de código abierto y nivel empresarial, así como soluciones de entrega de aplicaciones respaldadas por un servicio y asistencia de excelente calidad.</p>
                            </div>
                            <div className="half">
                                <div className="icon-right-service text-center">
                                    <img src={suse} alt="icon-suse" style={{width: "100%", height: 250}}/>
                                </div>
                            </div>
                        </div>
                        <div className="flex-service jc-between half-and-half card-part" id="arcserve">
                            <div className="half">
                                <h3 className="h3">Arcserve</h3>
                                <p>Las empresas de hoy en día necesitan un socio que ofrezca protección de datos sin decepcionar. Llevamos más allá las copias de seguridad de toda la vida para desarrollar soluciones que construyan una fortaleza alrededor de tu infraestructura, una fortaleza que siempre proteja tus datos y aquello que tiene un valor incalculable.</p>
                            </div>
                            <div className="half">
                                <div className="icon-right-service text-center">
                                    <img src={arcserve} alt="icon-arcserve" style={{width: "100%", height: 70,margin:"4%"}}/>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    }
}

export default Partners;
