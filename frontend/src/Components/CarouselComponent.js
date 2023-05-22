import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

const CarouselComponent = ({ cars }) => {
  return (
    <div className="carousel-container">
    <Carousel className='img'
     autoPlay={true}
     interval={3000} 
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
    </div>
  );
};

export default CarouselComponent;
