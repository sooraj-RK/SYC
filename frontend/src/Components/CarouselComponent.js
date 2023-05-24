import React from 'react';
import {  Col, Container, Row } from 'react-bootstrap';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

const CarouselComponent = ({ cars }) => {
  return (
   <Container>
      <Row  className="carousel">
      <Col lg={8}>
        <Carousel className='img'
         autoPlay={true}
         interval={2500} 
         infiniteLoop={true} 
         showThumbs={false} 
        showStatus={false} 
        showIndicators={true} 
        showArrows={true} >
          {cars.map((car) => (
            <div className="product" key={car.slug}>
              <img src={car.image} alt={car.name} />
            </div>
          ))}
        </Carousel>
      </Col>
      </Row>
   </Container>
  );
};

export default CarouselComponent;
