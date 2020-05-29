import React from "react";
import {Card} from 'react-bootstrap';



export default function CardServicios(props) {
    

    return (
         <Card style={{width: '350px', height: '350px',borderWidth:'3px', borderColor:'#DC3441' ,borderRadius: '0px', margin: '40px', position: 'inherit'
        }} className="CardServicios">
            <Card.Body style={{padding: '40px'}}>
                <Card.Title className="CardNosTitle" style={{ 
                    fontFamily: 'Gilroy-Heavy',
                    color: '#464856',
                    fontSize: '25px'
                }}> {props.titulo}</Card.Title>

                <Card.Text style={{fontFamily: 'Gilroy-Light', color: '#464856', fontSize: '15px'}}>
                {props.texto}
                </Card.Text>

            </Card.Body>
        </Card>
    );
}