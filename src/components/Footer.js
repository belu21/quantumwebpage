import React, { Component } from 'react';
import '../css/estiloFooter.css';

class Footer extends Component {
    render() {
        return <footer className="bg-dark rounded-top text-center footer" >
            <div className="container py-2 ">
                <p className="text-white my-2">&copy;CommIT SRL 2020 (telefono, correo electronico, direccion)</p>
            </div>
        </footer>
    }
}
export default Footer;