import React from 'react';
import { Link } from 'react-router-dom';
import data from '../data';
import CarouselComponent from './CarouselComponent';

function HomeScreen() {
  return (
    <div>
    
      <div>
        <CarouselComponent products={data.products} />
      </div>
      <h1>Hyundai</h1>
      <div className="products">
        {data.products.map((product) => (
          <div className="product" key={product.slug}>
            <Link to={`/product/${product.slug}`}>
              <img src={product.image} alt={product.name} />
            </Link>
            <div className="product-info">
              <Link to={`/product/${product.slug}`}>
                <p>{product.name}</p>
              </Link>
              <p>
                <strong>{product.price} Lakhs onwards</strong>
              </p>
              <button>Book Test Drive</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default HomeScreen;
