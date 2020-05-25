import React from 'react'
import nosotros from '../json/nosotros'
import '../css/estiloNosotros.css'
import Subtitulo from "./Subtitulo";
import img1 from '../images/atardecer.jpg';
import img2 from '../images/people.jpg';
import {Card} from 'react-bootstrap';

class Nosotros extends React.Component {

    state = {
        nosotros: nosotros
    }

    render() {
        return <div className="nosotros">
            <div className="head">
                Nosotros
            </div>
            <div className="body">

<Card style={{ width: '350px', height:'350px', border:'none', borderRadius:'0px', margin:'40px'}} className="CardNosotros">
    <Card.Body style={{padding:'40px'}}>
        <Card.Title className="CardNosTitle" style={{fontfamily:'Gilroy-Heavy', color:'#464856', fontSize:'25px'}}>Valores</Card.Title>
       
        <Card.Text  style={{fontfamily:'Gilroy-Light', color:'#464856', fontSize:'15px'}}>
            Some quick example text to build on the card title and make up the bulk of
            the card's content.
            Some quick example text to build on the card title and make up the bulk of
            the card's content.
        </Card.Text>
       
    </Card.Body>
</Card>
<Card style={{ width: '350px', height:'350px', border:'none', borderRadius:'0px', margin:'40px', minHeight: '200px'}} className="CardNosotros">
    <Card.Body style={{padding:'30px'}}>
        <Card.Title className="CardNosTitle" style={{fontfamily:'Gilroy-Heavy', color:'#464856', fontSize:'25px'}}>Mision</Card.Title>

        <Card.Text  style={{fontfamily:'Gilroy-Light', color:'#464856', fontSize:'15px'}}>
            Some quick example text to build on the card title and make up the bulk of
            the card's content.
            Some quick example text to build on the card title and make up the bulk of
            the card's content.
        </Card.Text>

    </Card.Body>
</Card>
<br/>
<Card style={{ width: '350px', height:'350px', border:'none', borderRadius:'0px', margin:'40px'}} className="CardNosotros">
    <Card.Body style={{padding:'30px'}}>
        <Card.Title className="CardNosTitle" style={{fontfamily:'Gilroy-Heavy', color:'#464856', fontSize:'25px'}}>Vision</Card.Title>

        <Card.Text  style={{fontfamily:'Gilroy-Light', color:'#464856', fontSize:'15px'}}>
            Some quick example text to build on the card title and make up the bulk of
            the card's content.
            Some quick example text to build on the card title and make up the bulk of
            the card's content.
        </Card.Text>

    </Card.Body>
</Card>

</div>

</div>;
}
}

export default Nosotros;
