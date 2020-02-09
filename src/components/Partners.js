import React from 'react'
import partners from '../json/partners'
import SubTarjeta from './SubTarjeta'

class Partners extends React.Component{
    state = {
        partners: partners
    }
    render() {
        return <div  className="py-5 mw-100 w-100">
             <br></br>

                   <SubTarjeta info={this.state.partners.redhat} />
                   <SubTarjeta info={this.state.partners.hp} />
                   <SubTarjeta info={this.state.partners.suse} />
                   <SubTarjeta info={this.state.partners.sophos} />
                   <SubTarjeta info={this.state.partners.cisco} />
                   <SubTarjeta info={this.state.partners.dell} />
                   
            
                   
          
                </div>;
    }
}

export default Partners;