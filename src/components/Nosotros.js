import React from 'react'
import nosotros from '../json/nosotros'
import estiloNosotros from '../css/estiloNosotros.css'

console.log(nosotros)
const valores = nosotros.valores;
console.log(valores);
function Nosotros() {
    return <div className="container py-4">
        <div className="card text-white bg-dark mb-3" >
            <div className="card-header">NOSOTROS</div>
            <div className="card-body">
                <p className="card-text">{nosotros.valores.texto}</p>
            </div>
        </div>
        <Mision />
        <p>{nosotros.mision.texto}</p>
        <Vision />
        <p>{nosotros.vision.texto}</p>
    </div>;
}

function Mision() {
    return <h1>Mision</h1>;
}

function Vision() {
    return <h1>Vision</h1>;
}

export default Nosotros;