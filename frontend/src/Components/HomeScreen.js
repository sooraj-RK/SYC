import React from 'react';
import { Link } from 'react-router-dom';
import data from '../data';
import CarouselComponent from './CarouselComponent';
import { Button, Col, Container, Row } from 'react-bootstrap';

function HomeScreen() {
  return (
    <>
    
      <Container>
        <Row>
          
            <Col lg={8}>
              <CarouselComponent cars={data.cars} />
            </Col>
          
        </Row>
       <Row> 
        <Col>
        <h1>Hyundai</h1>
        </Col>
       </Row>
        <Row>
          <Col>
            <div className="cars rounded">
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
                    <Button className='btn' >Book Test Drive</Button>
                  </div>
                </div>
              ))}
            </div>
          </Col>
        </Row>
      </Container>

    </>
  );
}

export default HomeScreen;
