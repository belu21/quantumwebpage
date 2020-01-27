import React from 'react'
import nosotros from '../json/nosotros'

console.log(nosotros)
const valores = nosotros.valores;
console.log(valores);
function Nosotros() {
    return <div className="container py-4">
        <div className="card text-white bg-dark mb-3" styleName="max-width:18rem; font-family='Basier Square SemiBold';" >
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