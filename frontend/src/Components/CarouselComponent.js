import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

const CarouselComponent = ({ products }) => {
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
      {products.map((product) => (
        <div className="product" key={product.slug}>
          <img src={product.image} alt={product.name} />
        </div>
      ))}
    </Carousel>
    </div>
  );
};

export default CarouselComponent;
