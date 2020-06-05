import React from "react";
import Carousel from 'react-bootstrap/Carousel'



export default function ControlledCarousel(props) {
    
  
    return (
        <Carousel >
        <Carousel.Item >
          <img
            className="d-block w-100"
            src={require('../images/slide1.png')}
            alt="First slide"
          />
          <Carousel.Caption>
            <h1>¿Quiénes somos?</h1>
            <p>Ver mas información</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item >
          <img
            className="d-block w-100"
            src={require('../images/slide2.png')}
            alt="Second slide"
          />
      
          <Carousel.Caption>
            <h3 color='#000000'>Visión</h3>
            <p>Ver mas información</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={require('../images/slide3.png')}
            alt="Third slide"
          />
      
          <Carousel.Caption>
            <h3>Misión</h3>
            <p>Ver mas información</p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    );
  }
