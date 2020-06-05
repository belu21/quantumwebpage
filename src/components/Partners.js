import React from 'react'
import '../css/estiloPartners.css'
import cisco from "../images/partners/logo-cisco.png";
import dell from "../images/partners/logo-dell.png";
import hp from "../images/partners/logo-hp.png";
import redhat from "../images/partners/logo-red-hat.png";
import sophos from "../images/partners/logo-sophos.svg";
import suse from "../images/partners/logo-suse.svg";

class Partners extends React.Component{
    render() {
        return <div>
            <div className="superior-service">
                <div className="container mb-5 jc-between" id="servicios">
                    <h1 className="h1">Nuestros Partners</h1>
                    <div className="flex-service mb-5">
                        <div className="flex-service left-service m-0">
                            <p className="content">
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid aperiam consectetur corporis culpa cumque, debitis, dignissimos doloribus esse explicabo incidunt ipsa laborum molestias quidem ratione repellat temporibus ut vero voluptate.
                            </p>
                        </div>
                        <div className="flex-service jc-between half-and-half card-part">
                            <div className="half">
                                <h3 className="h3">Cisco</h3>
                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab accusantium ad aperiam architecto atque dicta doloremque expedita iste libero maxime minus, molestias quidem, quod repudiandae temporibus unde ut veritatis voluptatem!</p>
                            </div>
                            <div className="half">
                                <div className="icon-right-service  text-center">
                                    <img src={cisco} alt="icon-cisco" style={{width: "100%", height: 160, paddingLeft: 30, paddingRight: 30}}/>
                                </div>
                            </div>
                        </div>
                        <div className="flex-service jc-between half-and-half card-part">
                            <div className="half">
                                <h3 className="h3">Dell</h3>
                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aut consectetur esse et hic necessitatibus nisi quam recusandae rerum similique vel? Commodi earum exercitationem, id obcaecati voluptate voluptatem voluptatibus. Aliquam, molestiae?</p>
                            </div>
                            <div className="half">
                                <div className="icon-right-service text-center">
                                    <img src={dell} alt="icon-dell" style={{width: "70%"}}/>
                                </div>
                            </div>
                        </div>
                        <div className="flex-service jc-between half-and-half card-part">
                            <div className="half">
                                <h3 className="h3">HP</h3>
                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aut consectetur esse et hic necessitatibus nisi quam recusandae rerum similique vel? Commodi earum exercitationem, id obcaecati voluptate voluptatem voluptatibus. Aliquam, molestiae?</p>
                            </div>
                            <div className="half">
                                <div className="icon-right-service text-center">
                                    <img src={hp} alt="icon-hp" style={{width: "60%"}}/>
                                </div>
                            </div>
                        </div>
                        <div className="flex-service jc-between half-and-half card-part">
                            <div className="half">
                                <h3 className="h3">Red Hat</h3>
                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aut consectetur esse et hic necessitatibus nisi quam recusandae rerum similique vel? Commodi earum exercitationem, id obcaecati voluptate voluptatem voluptatibus. Aliquam, molestiae?</p>
                            </div>
                            <div className="half">
                                <div className="icon-right-service text-center">
                                    <img src={redhat} alt="icon-redhat" style={{width: "100%", height: 180}}/>
                                </div>
                            </div>
                        </div>
                        <div className="flex-service jc-between half-and-half card-part">
                            <div className="half">
                                <h3 className="h3">Sophos</h3>
                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aut consectetur esse et hic necessitatibus nisi quam recusandae rerum similique vel? Commodi earum exercitationem, id obcaecati voluptate voluptatem voluptatibus. Aliquam, molestiae?</p>
                            </div>
                            <div className="half">
                                <div className="icon-right-service text-center">
                                    <img src={sophos} alt="icon-sophos" style={{width: "100%", height: 250}}/>
                                </div>
                            </div>
                        </div>
                        <div className="flex-service jc-between half-and-half card-part">
                            <div className="half">
                                <h3 className="h3">Suse</h3>
                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aut consectetur esse et hic necessitatibus nisi quam recusandae rerum similique vel? Commodi earum exercitationem, id obcaecati voluptate voluptatem voluptatibus. Aliquam, molestiae?</p>
                            </div>
                            <div className="half">
                                <div className="icon-right-service text-center">
                                    <img src={suse} alt="icon-suse" style={{width: "100%", height: 250}}/>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    }
}

export default Partners;
