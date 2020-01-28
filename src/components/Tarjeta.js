import React from 'react'


class Tarjeta extends React.Component {
    render() {
        console.log(this.props)
        return <div className="py-4 mw-100 w-100 container">
            <div className="card text-white bg-dark mb-3" >
                <div className="card-header bg-danger">{this.props.info.titulo}</div>
                <div className="card-body-custom card-body">
                    <p className="card-text">{this.props.info.texto}</p>
                </div>
            </div>
        </div>;
    }
}

export default Tarjeta;