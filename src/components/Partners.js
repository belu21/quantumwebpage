import React from 'react'
import partners from '../json/partners'
import '../css/estiloPartners.css'
import SubTarjeta from './SubTarjeta'
import continuidad from "../images/continuidad.png";

class Partners extends React.Component{
    state = {
        partners: partners
    }
    render() {
        return <div>
            <div className="head">
                NUESTROS PARTNERS
            </div>
                   {/*<SubTarjeta info={this.state.partners.redhat} />*/}
                   {/*<SubTarjeta info={this.state.partners.hp} />*/}
                   {/*<SubTarjeta info={this.state.partners.suse} />*/}
                   {/*<SubTarjeta info={this.state.partners.sophos} />*/}
                   {/*<SubTarjeta info={this.state.partners.cisco} />*/}
                   {/*<SubTarjeta info={this.state.partners.dell} />          */}
                <div className="service">
                    <div className="">PARTNERS <img src={continuidad} height={100}></img></div>
                    {/*<div className="jumbotron servdesc">*/}
                    {/*    Alta Disponibilidad*/}
                    {/*</div>*/}
                    <div className="circleBase circle servdesc">
                        <p>Redhat</p>
                    </div>
                    <div className="circleBase circle servdesc">
                        <p>HP</p>
                    </div>
                    <div className="circleBase circle servdesc">
                        <p>SUSE</p>
                    </div>
                    <div className="circleBase circle servdesc">
                        <p>SOPHOS</p>
                    </div>
                    <div className="circleBase circle servdesc">
                        <p>CISCO</p>
                    </div>
                    <div className="circleBase circle servdesc">
                        <p>DELL</p>
                    </div>
                </div>
            <br/>
            <br/>
        </div>
    }
}

export default Partners;