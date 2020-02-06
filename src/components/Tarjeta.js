import React from 'react'

class Tarjeta extends React.Component {
    render() {
        var json = this.props.info
        if (this.props.info.subs==null) {
            console.log("mis subs por nada: "+this.props.info.subs)
            return <div className="py-7 mw-100 w-100 container">
            <div className="card text-white bg-dark mb-3" >
                <div className="card-header bg-danger">{this.props.info.titulo}</div>
                <div className="card-body-custom card-body">
                    <p className="card-text">{this.props.info.texto}</p>
                </div>
            </div>
        </div>;
        }
        else {
            console.log("mis subs: "+this.props.info.subs)
            return <div className="py-7 mw-100 w-100 container">
            <div className="card text-white bg-dark mb-3" >
                <div className="card-header bg-danger">{this.props.info.titulo}</div>
                <div className="card-body-custom card-body">
                    <p className="card-text">{this.props.info.texto}</p>
                    {/* <SubTarjeta info={json}></SubTarjeta> */}
                    {
                        Object.values(json.subs).map((key) => {
                            console.log("key: "+key)
                            return (
                                <li>{key}</li>
                            )
                        })
                    }
                </div>
            </div>
        </div>;
        };        
    }
}
export default Tarjeta;