import React from 'react'
import partners from '../json/partners'
import '../css/estiloPartners.css'
import SubTarjeta from './SubTarjeta'

class Partners extends React.Component{
    state = {
        partners: partners
    }
    render() {
        return <div>
            <div className="head">
                NUESTROS PARTNERS
            </div>
            <div className="body">

             <br></br>

                   <SubTarjeta info={this.state.partners.redhat} />
                   <SubTarjeta info={this.state.partners.hp} />
                   <SubTarjeta info={this.state.partners.suse} />
                   <SubTarjeta info={this.state.partners.sophos} />
                   <SubTarjeta info={this.state.partners.cisco} />
                   <SubTarjeta info={this.state.partners.dell} />          
            </div>;
        </div>
    }
}

export default Partners;