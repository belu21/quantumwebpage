import React from 'react'


class SubTarjeta extends React.Component {

    render() {
        var json = this.props.info.subs
        console.log("lo que debo recibir: "+json)
        return <div className="mw-100 w-100 container bg-dark card text-white mb-3">
            <div className="card-body-custom card-body">
                {
                    Object.values(json).map((key) => {
                        /* console.log(key) */
                        return (
                            <li>{key}</li>
                        )
                    })

                }
            </div>
        </div>;
    }
}

export default SubTarjeta;