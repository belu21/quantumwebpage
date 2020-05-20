import React, { Component } from 'react';

import { Link } from 'react-router-dom';
import '../css/estiloNavbar.css'
import mainlogo from '../images/logoblanco100.png';
import secondlogo from '../images/logo100.png';

class NavBar extends Component {
    constructor(props) {
        super(props);
        this.state = {
            backgroundColor: 'transparent',
            imagen: secondlogo,
            colorbtn:'btn btn-danger my-2 my-sm-0 ',
            
        }
    }


    componentDidMount = () => {
        window.addEventListener('scroll', this.handleScroll);
    }

    componentWillUnmount = () => {
        window.removeEventListener('scroll', this.handleScroll);
    }
    

    handleScroll = (event) => {
        let scrollTop = window.scrollY;
        // itemTranslate = Math.min(0, scrollTop/3 - 60);
        if (scrollTop > 60) {
            this.setState({
                backgroundColor: 'white', 
                imagen : secondlogo,
                colorbtn:'btn btn-outline-danger my-2 my-sm-0 '

            });
           

        }
        else {
            this.setState({
                backgroundColor: 'transparent',
                imagen : secondlogo,
                colorbtn:'btn btn-danger my-2 my-sm-0 '
            });
       
        }

    }
   


    render() {

        const styles = {
            containerStyle: {
                backgroundColor: this.state.backgroundColor,
                bordercolor: this.state.bordercolor,

                
            }
        };
        const { containerStyle } = styles;

        return (<div>
            <header className="header">
                <nav className="navbar navbar-expand-lg navbar-light text-ligth fixed-top" style={containerStyle}>
                    <Link to="/">
                            <img src={this.state.imagen} className="logo" id="logo_header" height='48px' width='111px' alt='commitSRL'></img>
                    </Link>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav m-auto">
                          
                                <li className="nav-item active" >
                                <Link to="/" className="nav-link" >
                                    Home
                                    </Link>
                                </li>
                           
                            <li className="nav-item dropdown">
                                <a className="nav-link dropdown-toggle" href="/nosotros" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                    Nosotros
                                </a>
                                <div className="dropdown-menu px-1" aria-labelledby="navbarDropdown">
                                    <Link to="/nosotros/valores" className="nav-link text-dark bg-light">
                                        Valores
                                    </Link>
                                    <Link to="/nosotros/mision" className="nav-link text-dark bg-light">
                                        Mision
                                    </Link>
                                    <Link to="/nosotros/vision" className="nav-link text-dark bg-light">
                                        Vision
                                    </Link>
                                    <Link to="/nosotros/quienes-somos" className="nav-link text-dark bg-light">
                                        Quienes Somos
                                    </Link>
                                </div>
                            </li>
                            <li className="nav-item dropdown">
                                <a className="nav-link dropdown-toggle" href="/servicios" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Servicios</a>
                                <div className="dropdown-menu px-1" aria-labelledby="navbarDropdown">
                                    <Link to="/servicios/cloud-computing" className="nav-link text-dark bg-light">
                                        Cloud Computing
                                    </Link>
                                    <Link to="/servicios/negocio" className="nav-link  text-dark bg-light">
                                        Negocio
                                    </Link>
                                    <Link to="/servicios/desarrollo" className="nav-link text-dark bg-light">
                                        Desarrollo de Software
                                    </Link>
                                </div>
                            </li>
                             
                          
                                <li className="nav-item ">
                                <Link to="/partners" className="nav-link">  
                                    Partners
                                    </Link>
                                </li>
                            
                            <li className="nav-item dropdown">
                                <a className="nav-link dropdown-toggle" href="/servicios" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Clientes</a>
                                <div className="dropdown-menu px-1" aria-labelledby="navbarDropdown">
                                    <Link to="/clientes/empresas-telecomunicaciones" className="nav-link text-dark bg-light">
                                        Empresas y Telecomunicaciones
                                    </Link>
                                    <Link to="/clientes/empresas-financieras" className="nav-link  text-dark bg-light">
                                        Empresas Financieras
                                    </Link>
                                    <Link to="/clientes/empresas-petroleras" className="nav-link text-dark bg-light">
                                        Empresas Petroleras
                                    </Link>
                                </div>
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