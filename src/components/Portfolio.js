import React, { Component } from "react";
import { Container, Row, Col } from "react-bootstrap";
import reactnativeone from "../assets/reactnativeone.png";
import reactnativetwo from "../assets/reactnativetwo.png";
import reactone from "../assets/reactone.png";
import reacttwo from '../assets/reacttwo.png';
import reactthree from '../assets/reactthree.png';
import reactfour from '../assets/Reactfour.png';
import { Link } from "react-router-dom";

class Portfolio extends Component{
  render(){
    return(
      <Container className="Project-header">
      <p className="Project">Hightlighted projects</p>
       <Row>
       <Col sm={12} md={12} lg={6}>
        <div className="Project-header-one">
        <Link to="/reactnativeone"><img src={reactnativeone} alt="img" className="projectone"/></Link>
        </div>
       </Col>

       <Col sm={12} md={12} lg={6}>
        <div className="Project-header">
        <Link to="/reactnativetwo"><img src={reactnativetwo} alt="img" className="projectone"/></Link>
        </div>
       </Col>
       </Row>

       <Row>
       <Col sm={12} md={12} lg={6}>
        <div className="Project-header">
        <Link to="/reactnativethree"><img src={reactone} alt="img" className="project"/></Link>
        </div>
       </Col>

       <Col sm={12} md={12} lg={6}>
        <div className="Project-header">
        <Link to="/reactone"><img src={reacttwo} alt="img" className="project"/></Link>
        </div>
       </Col>
       </Row>

      <Row>
       <Col sm={12} md={12} lg={6}>
        <div className="Project-header">
        <Link to="/reacttwo"><img src={reactthree} alt="img" className="project"/></Link>
        </div>
       </Col>

       <Col sm={12} md={12} lg={6}>
        <div className="Project-header">
        <Link to="/reactfour"><img src={reactfour} alt="img" className="project"/></Link>
        </div>
       </Col>
       </Row>
      </Container>
    )
  }
}

export default Portfolio;
