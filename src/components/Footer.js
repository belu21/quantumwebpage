import React, { Component } from 'react';

class Footer extends Component {
    render() {
        return <footer className="bg-dark rounded-top text-center footer fixed-bottom" >
            <div className="container py-2">
                <p className="text-white my-2">&copy;CommIT SRL</p>
            </div>
        </footer>
    }
}

export default Footer;