import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import heroImg from './hero-img.png';
import goalsImg from './goals.png';
import ServiceCard from './ServiceCard';
import './HomePage.css';
import { Button, Row, Col } from 'react-bootstrap';
import {Card} from 'react-bootstrap';

function HomePage() {
  const services = [
    {
      title : 'Application Development',
      description : 'Application developed'
    },
    {
      title : 'Testing as a service',
      description : 'Application developed'
    },
    {
      title : 'Consulting',
      description : 'Consulting service provided'
    }
  ];
  return (
   <div className="page-container" >
  <Carousel>
    <Carousel.Item >
  <div className="container">
    <div className="text">
      <h2>Helping You To make Businees Excellence</h2>
      <p>To become Partnership with Customers by providing Staffing/Recruiting, Product development and Testing As a Service.</p>
    </div>
    <div className="image">
      <img src={heroImg} alt="hero-img"/>
    </div>
    </div>
    </Carousel.Item>
    <Carousel.Item>
  <div className="container">
    <div className="text">
      <h2>Empowering Your Vision, Transforming Your Reality</h2>
      <p>Let Us Help Grow Your Business.</p>
    </div>
    <div className="image">
      <img src={heroImg} alt="hero-img"/>
    </div>
    </div>
    </Carousel.Item>
    <Carousel.Item>
      <div className="container">
        <div className='text'>
          <h2>Crafting Tomorrow's Solutions, Today </h2>
          <p></p>
        </div>
        <div className="image">
          <img src={goalsImg} alt="goals"/>
        </div>
      </div>
    </Carousel.Item>
    </Carousel>
     {/* Carousel Ends */}
     {/* Vision and Mission */}
    <div className="vision-mission-container">
        <div className="vision">
          <h2>Vision</h2>
          <p>To become partnership with customers by providing Web Applications and Testing Services.</p>
        </div>
        <div className="mission">
          <h2>Mission</h2>
          <p>To approach customers with service offerings and build loyalty through our service delivery. To connect with our stakeholders to make them aware of our offerings.</p>
        </div>
    </div>
    {/* Vision and Mission ENds */}
    {/* Services */}
    <div className='services-container'>
      <h2 style={{marginLeft : '500px'}}>Services</h2><br></br>
      <Row>
        {services.map((service,index) => (
          <Col key={index} md={4} lg={4} className="mb-4 service-card" >
          <ServiceCard key={index} service={service}/>
          </Col>
        ))}
      </Row>
    </div>
    </div>
    
  );
}

export default HomePage;