import React from 'react'


class SubTarjeta extends React.Component {

    render() {
        var json = this.props.info.subs
        return <div className="mw-100 w-100 container bg-dark card text-white mb-1">
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