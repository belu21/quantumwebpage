import React from 'react'
import nosotros from '../json/nosotros'

console.log(nosotros)
function Nosotros() {
    return <div>
        <h1>NOSOTROS</h1>
        <Mision/>
        <Vision/>
    </div>;
}

function Mision(){
    return <h1>Mision</h1>;
}

function Vision(){
    return <h1>Vision</h1>;
}

export default Nosotros;