import React, { Component } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import reactone from '../assets/reactone.png';
import reacttwo from '../assets/reacttwo.png';
import reactthree from '../assets/reactthree.png';
import reactfour from '../assets/Reactfour.png';

class Portfolio extends Component {
  render() {
    return (
      <Container className='Project-header-one'>
        <p className='Project'>Hightlighted projects</p>
        <Row>
          <Col sm={12} md={6} lg={6}>
            <div className='Project-header'>
              <img src={reactone} alt='img' className='project' />
            </div>
          </Col>

          <Col sm={12} md={6} lg={6}>
            <div className='Project-header'>
              <img src={reacttwo} alt='img' className='project' />
            </div>
          </Col>
        </Row>

        <Row>
          <Col sm={12} md={6} lg={6}>
            <div className='Project-header'>
              <img src={reactthree} alt='img' className='project' />
            </div>
          </Col>

          <Col sm={12} md={6} lg={6}>
            <div className='Project-header'>
              <img src={reactfour} alt='img' className='project' />
            </div>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default Portfolio;
