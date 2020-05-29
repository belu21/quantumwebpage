import React from 'react'
import nosotros from '../json/nosotros'
import '../css/estiloNosotros.css'
import CardNosotros from './CardNosotros';


class Nosotros extends React.Component {

    state = {
        nosotros: nosotros
    }

    render() {
        return <div className="nosotros">
            <div className="head-nosotros">
                Nosotros
            </div>
            <div className="body-nosotros">

                
                <CardNosotros titulo='Valores' 
                            texto='Some quick example text to build on the card title and make up the bulk of
                            the cards content.
                            Some quick example text to build on the card title and make up the bulk of
                            the cards content.'
                />
                 <CardNosotros titulo='Misión' 
                            texto='Some quick example text to build on the card title and make up the bulk of
                            the cards content.
                            Some quick example text to build on the card title and make up the bulk of
                            the cards content.'
                />
                 <CardNosotros titulo='Visión' 
                            texto='Some quick example text to build on the card title and make up the bulk of
                            the cards content.
                            Some quick example text to build on the card title and make up the bulk of
                            the cards content.'
                />
               

            </div>

        </div>;
    }
}

export default Nosotros;
