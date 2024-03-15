import React from 'react';
import './HomePage.css';
import heroImg from './hero-img.png';
import { Row, Col, Container } from 'react-bootstrap';

function About() {
    return (
        <>
            <Container>
                <Row>
                    <Col style={{ color: 'black' }}>
                        <h2>Helping You To make Business Excellence</h2>
                        <p>To become Partnership with Customers by providing Staffing/Recruiting, Product development and Testing As a Service.</p>
                    </Col>
                    <Col>
                        <img src={heroImg} alt="hero-img" style={{ height: '500px', width: '500px', padding: '20px', marginRight: '-80px' }} />
                    </Col>
                </Row>
            </Container>
            <div className='container' style={{color : 'black'}}>
                <p>Saiwin is a consulting company established in the year of 2023. We have done projects in web development and provide consulting as a service.</p>
            </div>
        </>
    );
}

export default About;
