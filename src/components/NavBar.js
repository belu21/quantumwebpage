import React, { Component } from 'react';

import { Link } from 'react-router-dom';
import '../css/estiloNavbar.css'
import logoblanco from '../images/logoblanco100.png'

class NavBar extends Component {
    constructor(props) {
        super(props);
        this.state = {
            backgroundColor: 'dark',
            imagen: logoblanco,
            colorbtn:'btn btn-danger my-2 my-sm-0 ',
            hover:false
            
        }
    }
    toggleHover() {
        this.setState({hover: !this.state.hover})
    }

    componentDidMount = () => {
        window.addEventListener('scroll', this.handleScroll);
    }

    componentWillUnmount = () => {
        window.removeEventListener('scroll', this.handleScroll);
    }

    render() {
        const styles = {
            containerStyle: {
                backgroundColor: this.state.backgroundColor,
                bordercolor: this.state.bordercolor,
            }
        };
        const { containerStyle } = styles;
        var linkStyle;
          if (this.state.hover) {
           linkStyle = {color: 'white',cursor: 'pointer', borderbottomcolor: 'red', borderstyle: 'solid'}
          } else {
           linkStyle = {borderbottomcolor: 'red', borderstyle: 'solid'}
          }

        return (<div className="header-commit">
            <header className="header">
                <nav className="navbar navbar-expand-lg navbar-dark text-light fixed-top" style={containerStyle}>
                    <Link to="/">
                            <img src={this.state.imagen} className="logo" id="logo_header" alt='quantumSRL'/>
                    </Link>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"/>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav m-auto">
                          
                                <li className="nav-item active" >
                                <Link to="/" className="nav-link" style={linkStyle} onMouseEnter={() => this.toggleHover()} onMouseLeave={() => this.toggleHover()}>
                                    Home
                                    </Link>
                                </li>
                           
                            {/*<li className="nav-item dropdown">*/}
                            {/*    <a className="nav-link dropdown-toggle" href="/nosotros" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">*/}
                            {/*        Nosotros*/}
                            {/*    </a>*/}
                            {/*    <div className="dropdown-menu px-1" aria-labelledby="navbarDropdown">*/}
                            {/*        <Link to="/nosotros/#valores" className="nav-link text-dark bg-light">*/}
                            {/*            Valores*/}
                            {/*        </Link>*/}
                            {/*        <Link to="/nosotros/#mision" className="nav-link text-dark bg-light">*/}
                            {/*            Mision*/}
                            {/*        </Link>*/}
                            {/*        <Link to="/nosotros/#vision" className="nav-link text-dark bg-light">*/}
                            {/*            Vision*/}
                            {/*        </Link>*/}
                            {/*        <Link to="/nosotros/quienes-somos" className="nav-link text-dark bg-light">*/}
                            {/*            Quienes Somos*/}
                            {/*        </Link>*/}
                            {/*    </div>*/}
                            {/*</li>*/}
                            <li className="nav-item ">
                                <Link to="/nosotros" className="nav-link">
                                    Nosotros
                                </Link>
                            </li>
                            {/*<li className="nav-item dropdown">*/}
                            {/*    <a className="nav-link dropdown-toggle" href="/servicios" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Servicios</a>*/}
                            {/*    <div className="dropdown-menu px-1" aria-labelledby="navbarDropdown">*/}
                            {/*        <Link to="/servicios/cloud-computing" className="nav-link text-dark bg-light">*/}
                            {/*            Cloud Computing*/}
                            {/*        </Link>*/}
                            {/*        <Link to="/servicios/#negocio" className="nav-link  text-dark bg-light">*/}
                            {/*            Negocio*/}
                            {/*        </Link>*/}
                            {/*        <Link to="/servicios/#software" className="nav-link text-dark bg-light">*/}
                            {/*            Desarrollo de Software*/}
                            {/*        </Link>*/}
                            {/*        <Link to="/servicios/#gestion" className="nav-link text-dark bg-light">*/}
                            {/*            Gestion de Servicios*/}
                            {/*        </Link>*/}
                            {/*        <Link to="/servicios/#soporte" className="nav-link text-dark bg-light">*/}
                            {/*            Soporte T??cnico*/}
                            {/*        </Link>*/}
                            {/*        <Link to="/servicios/#educacion" className="nav-link text-dark bg-light">*/}
                            {/*            Educaci??n*/}
                            {/*        </Link>*/}
                            {/*    </div>*/}
                            {/*</li>*/}
                                <li className="nav-item ">
                                <Link to="/partners" className="nav-link">  
                                    Partners
                                    </Link>
                                </li>
                            {/*<li className="nav-item dropdown">*/}
                            {/*    <a className="nav-link dropdown-toggle" href="/servicios" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Clientes</a>*/}
                            {/*    <div className="dropdown-menu px-1" aria-labelledby="navbarDropdown">*/}
                            {/*        <Link to="/clientes/#financieras" className="nav-link text-dark bg-light">Empresas Financieras</Link>*/}
                            {/*        <Link to="/clientes/#gobierno" className="nav-link  text-dark bg-light">Empresas Gubernamentales</Link>*/}
                            {/*        <Link to="/clientes/#industriales" className="nav-link text-dark bg-light">Empresas Industriales</Link>*/}
                            {/*        <Link to="/clientes/#petroleras" className="nav-link text-dark bg-light">Empresas Petroleras</Link>*/}
                            {/*        <Link to="/clientes/#emp_servicio" className="nav-link text-dark bg-light">Empresas Servicios</Link>*/}
                            {/*        <Link to="/clientes/#tele" className="nav-link text-dark bg-light">Empresas Telecomunicaciones</Link>*/}
                            {/*    </div>*/}
                            {/*</li>*/}
                            <li className="nav-item ">
                                <Link to="/clientes" className="nav-link">
                                    Clientes
                                </Link>
                            </li>
                            <li className="nav-item ">
                                <Link to="/servicios" className="nav-link">
                                    Servicios
                                </Link>
                            </li>


                            <li className="nav-item ">
                            <Link to="/contactanos" className="nav-link">
                                    Contactanos
                            </Link>
                            </li>
                        </ul>
                    </div>
                </nav>
            </header></div>);
    }
}
export default NavBar;
