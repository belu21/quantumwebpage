import React from 'react'
import '../css/estiloNosotros.css'
import Slide from '@material-ui/core/Slide';



class Nosotros extends React.Component {
    render() {
        return <div className="nosotros">
            <div className="superior-service">
                <div className="container mb-5 jc-between" id="quienes-somos">
                    <h1 className="h1">Nosotros</h1>
                    <div className="flex-service mb-5">
                        <div className="flex-service left-service m-0">
                            <p className="content">
                                CommIT es una empresa enfocada en el rubro de la
                                Tecnología de la Información y Comunicación
                                (TICs) , que ofrece servicios especializados y de
                                consultoría de valor al cliente por más de 10 años a
                                nivel nacional, integrando soluciones de alta calidad
                                tanto en el sector público como privado.
                            </p>
                        </div>
                        <Slide direction='right' in='true' mountOnEnter unmountOnExit timeout={1200}>
                            <div className="flex-service jc-between half-and-half card-part" id='valores'>
                                <div className="half">
                                    <div className="icon-right-service  text-center">
                                        <img src={require('../images/nosotros/valor.png')} alt="icon-valores" style={{ width: "50%" }} />
                                    </div>
                                </div>
                                <div className="half">
                                    <h3 className="h3">Valores</h3>
                                    <p><b>Compromiso con el éxito de nuestros clientes:</b> Entendemos las necesidades de nuestros clientes
                                    internos y cumplimos lo que ofrecemos. El éxito de los clientes es nuestro éxito.</p>
                                    <p><b>Ética incuestionable:</b> La integridad es la base fundamental de nuestra vida diaria y sustenta cada
                                    decisión que tomamos.</p>
                                    <p><b>Flexibilidad y agilidad con un propósito:</b> Adaptación al cambio constante, para crear soluciones
                                    corden a las las necesidades del cliente que y contribuyen a mejores resultados.</p>
                                    <p><b>Sentido de equipo:</b> Creemos en la colaboración y confianza mutua. Entendemos que nuestro éxito global
                                    depende de la sinergia que construyamos en conjunto.</p>
                                    <p><b>Respeto por el individuo y por la diversidad:</b> Para nosotros las diferencias no son obstáculos sino
                                    valiosas oportunidades de aprendizaje.</p>
                                    <p><b>Responsabilidad:</b> Por el servicio que ofrecemos</p>

                                </div>

                            </div>
                        </Slide>
                        <Slide direction='left' in='true' mountOnEnter unmountOnExit timeout={1200}>
                            <div className="flex-service jc-between half-and-half card-part" id="mision">
                                <div className="half">
                                    <h3 className="h3">Mision</h3>
                                    <p className="parrafo">Somos una empresa que ofrece soluciones
                                    innovadoras estableciendo alianzas estratégicas
                                    duraderas potenciando el crecimiento de
                                    nuestros clientes acorde a la evolución
                                    tecnológica emergente a nivel mundial</p>
                                </div>
                                <div className="half">
                                    <div className="icon-right-service text-center">
                                        <img src={require('../images/nosotros/mision.png')} alt="icon-mision" style={{ width: "50%" }} />
                                    </div>
                                </div>
                            </div>
                        </Slide>
                        <Slide direction='right' in='true' mountOnEnter unmountOnExit timeout={1200}>
                            <div className="flex-service jc-between half-and-half card-part" id="vision">
                                <div className="half">
                                    <div className="icon-right-service text-center">
                                        <img src={require('../images/nosotros/vista-lateral.png')} alt="icon-vision" style={{ width: "50%" }} />
                                    </div>
                                </div>
                                <div className="half">
                                    <h3 className="h3">Vision</h3>
                                    <p className="parrafo">Apoyar a nuestros clientes en la provisión de
                                    soluciones tecnológicas vanguardistas que generen
                                    de valor para sus organizaciones logrando su
                                    credibilidad y confianza</p>
                                </div>

                            </div>
                        </Slide>

                    </div>

                </div>
            </div>
        </div>
    }
}

export default Nosotros;
