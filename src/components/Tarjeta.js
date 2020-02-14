import React from 'react'
import '../css/estiloTarjeta.css'

class Tarjeta extends React.Component {
    render() {
        // var json = this.props.info
        // if (this.props.info.subs == null) {
        //     return <div className="py-4 mw-100 w-100 container">
        //         <div className="card text-white bg-dark mb-3">
        //             <div className="card-header bg-danger">{this.props.info.titulo}</div>
        //             <div className="card-body-custom card-body">
        //                 <p className="card-text">{this.props.info.texto}</p>
        //             </div>
        //         </div>
        //     </div>;
        // } else {
        //     return <div className="py-4 mw-100 w-100 container">
        //         <div className="card text-white bg-dark mb-3">
        //             <div className="card-header bg-danger">{this.props.info.titulo}</div>
        //             <div className="card-body-custom card-body">
        //                 <p className="card-text">{this.props.info.texto}</p>
        //                 {/* <SubTarjeta info={json}></SubTarjeta> */}
        //                 {
        //                     Object.values(json.subs).map((key) => {
        //                         return (
        //                             <li>{key}</li>
        //                         )
        //                     })
        //                 }
        //             </div>
        //         </div>
        //     </div>;
        // }
        // ;
        return <div className="containers">
                    <div className="card">
                        {/*<h4>hola</h4>*/}
                        <div className="title">{this.props.info.titulo}</div>
                            <p>{this.props.info.texto}</p>
                            <a href="#">Leer más</a>
                    </div>
            </div>

    }
}

export default Tarjeta;