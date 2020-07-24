import React from 'react';
import PropTypes from "prop-types";
import icon from './../img/mood.png'
import drop from './../img/drop.svg'
import graph from './../img/graph.png'
import { Row, Col } from 'react-bootstrap';
import "bootstrap/dist/css/bootstrap.css";

function CircleIconButton(props) {
  return ( 
  <React.Fragment> 
      <Row className="mt-5">
      </Row>
      <Row className="mt-5">
      </Row>
      <Row id="icon-buttons" className="justify-content-center">
        <Col className="justify-content-center" id="icon">
          <button className="round" onClick={()=> props.onSwitchingViews('add_symptom')}>
            <img src={icon} width = "100px" alt="icon"/>
          </button>
        </Col>
      </Row>

  </React.Fragment>
  )}

CircleIconButton.propTypes = {
  onSwitchingViews : PropTypes.func
}


export default CircleIconButton;