import React from 'react'
import nosotros from '../json/nosotros'

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
        <Vision />
        <Vision /><Vision /><Vision /><Vision />
    </div>;
}

function Mision() {
    return <div>
        {/* <Tarjeta titulo="{nosotros.mision.titulo}" texto="{nosotros.mision.texto}"></Tarjeta> */}
        <div className="card text-white bg-dark mb-3">
            <div className="card-header">Mision</div>
            <div className="card-body">
                <p className="card-text">{nosotros.vision.texto}</p>
            </div>
        </div>
    </div>;
}

function Vision() {
    return <div className="card text-white bg-dark mb-3">
            <div className="card-header">Vision</div>
            <div className="card-body">
                <p className="card-text">{nosotros.vision.texto}</p>
            </div>
        </div>;
}

export default Nosotros;