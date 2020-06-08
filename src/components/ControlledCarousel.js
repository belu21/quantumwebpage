import React from "react";
import Carousel from 'react-bootstrap/Carousel'
import { Link } from 'react-router-dom';


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
            <Link to='/nosotros/#quienes-somos'>
            <p>Ver mas información</p>
            </Link>
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
            <Link to='/nosotros/#vision'>
            <p>Ver mas información</p>
            </Link>
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
            <Link to='/nosotros/#mision'>
            <p>Ver mas información</p>
            </Link>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    );
  }
