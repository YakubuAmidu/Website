import React, { Component } from "react";
import { Container, Row, Col } from "react-bootstrap";
import reactnativeone from "../assets/reactnativeone.png";
import reactnativetwo from "../assets/reactnativetwo.png";
import reactnativethree from "../assets/reactnativethree.png";
import reactone from "../assets/reactone.png";
import reacttwo from '../assets/reacttwo.png';
import reactthree from '../assets/reactthree.png';

class Portfolio extends Component{
  render(){
    return(
      <Container>
      <p className="Project">Hightlighted projects</p>
       <Row>
       <Col sm={12} lg={4}>
        <div className="Project-header">
        <img src={reactnativeone} alt="img" className="project"/>
        </div>
       </Col>

       <Col sm={12} lg={4}>
        <div className="Project-header">
        <img src={reactnativetwo} alt="img" className="project"/>
        </div>
       </Col>

       <Col>
        <div className="Project-header">
        <img src={reactnativethree} alt="img" className="project"/>
        </div>
       </Col>
       </Row>

       <Row>
       <Col sm={12} lg={4}>
        <div className="Project-header">
        <img src={reactone} alt="img" className="project"/>
        </div>
       </Col>

       <Col sm={12} lg={4}>
        <div className="Project-header">
        <img src={reacttwo} alt="img" className="project"/>
        </div>
       </Col>

       <Col>
        <div className="Project-header">
        <img src={reactthree} alt="img" className="project"/>
        </div>
       </Col>
       </Row>
      </Container>
    )
  }
}

export default Portfolio;
