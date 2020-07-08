import React, { Component } from 'react';
import '../css/estiloFooter.css';
import {Facebook,Twitter,LinkedIn,WhatsApp} from "@material-ui/icons";
import Button from '@material-ui/core/Button';
import {Link} from "react-router-dom";
import Contactanos from "./Contactanos";

class Footer extends Component {
    

    render() {
        return <footer className="bg-dark footer" >
            <div className="container container-ft text-light">
                <div className="sec-ft">
                    <h4 className="h4 pb-4">Mas información</h4>
                    <div className="links">
                        <Link to="/servicios" className="nav-link text-light" style={{padding: 1}}><p>Servicios</p></Link>
                        <Link to="/nosotros" className="nav-link text-light" style={{padding: 1}}><p>Nosotros</p></Link>
                        <Link to="/clientes" className="nav-link text-light" style={{padding: 1}}><p>Clientes</p></Link>
                        <Link to="/partners" className="nav-link text-light" style={{padding: 1}}><p>Partners</p></Link>
                    </div>
                </div>
                <div className="sec-ft">
                    <h4 className="h4 pb-4">Contactanos</h4>
                    <div className="links">
                        <Button onClick={() =>  window.location.href='https://www.facebook.com/commitBolivia/'}><Facebook style={{width: 50,height: 50, color: "#3B5998", margin: 10}}/></Button>
                        <Button onClick={() =>  window.location.href='http://www.twitter.com'}><Twitter style={{width: 50,height: 50, color: "#1DA1F2", margin: 10}}/></Button>
                        <Button onClick={() =>  window.location.href='http://www.linkedin.com'}><LinkedIn style={{width: 50,height: 50, color: "#0072b1", margin: 10}}/></Button>
                        <Button onClick={() =>  window.location.href='https://wa.me/79145207?text=Hola%20quisiera%20obtener%20mas%20información%20de%20CommIT%20SRL'}><WhatsApp style={{width: 50,height: 50, color: "#25D366", margin: 10}}/></Button>
                    </div>
                </div>
                <div className="sec-ft">
                    <h4 className="h4 pb-4">Soporte</h4>
                    <div className="links">
                        <Link to="/servicios/#soporte" className="nav-link text-light" style={{padding: 1}}><p>Soporte Técnico</p></Link>
                        <Link to="#" className="nav-link text-light" style={{padding: 1}}><p>Términos</p></Link>
                        <Link to="#" className="nav-link text-light" style={{padding: 1}}><p>Politicas de privacidad</p></Link>
                    </div>
                </div>
                
            </div>
           
            <div className="derechos p-3 text-center text-light">
                &copy; 2020 CommIT SRL. Todos los derechos reservados.
            </div>
        </footer>
    }
}
export default Footer;
