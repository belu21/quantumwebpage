import React from 'react'
import partners from '../json/partners'
import Tarjeta from './Tarjeta'


class Partners extends React.Component{
    state = {
        partners: partners
    }
    render() {
        return <div  className="py-4 mw-100 w-100">

                   <Tarjeta info={this.state.partners.redhat} />
                   <Tarjeta info={this.state.partners.hp} />
                   <Tarjeta info={this.state.partners.suse} />
                   <Tarjeta info={this.state.partners.sophos} />
                   <Tarjeta info={this.state.partners.cisco} />
                   <Tarjeta info={this.state.partners.dell} />
                   
            
                   
          
                </div>;
    }
}

export default Partners;