import React from 'react';
import { Link } from 'react-router-dom';
import data from '../data';
import CarouselComponent from './CarouselComponent';

function HomeScreen() {
  return (
    <div>
    
      <div>
        <CarouselComponent cars={data.cars} />
      </div>
      <h1>Hyundai</h1>
      <div className="cars">
        {data.cars.map((cars) => (
          <div className="car" key={cars.slug}>
            <Link to={`/car/${cars.slug}`}>
              <img src={cars.image} alt={cars.name} />
            </Link>
            <div className="car-info">
              <Link to={`/car/${cars.slug}`}>
                <p>{cars.name}</p>
              </Link>
              <p>
                <strong>{cars.price} Lakhs onwards</strong>
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
