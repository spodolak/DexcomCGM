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
      <Row>
        <Col className="justify-content-center mt-5">
          <button class="round" onClick={()=> props.onSwitchingViews('calibrate')}>
            <img src={drop} width = "80px" alt="icon"/>
          </button>
        </Col >
        <Col className="justify-content-center mt-3 mr-2">
          <button class="round" onClick={()=> props.onSwitchingViews('add_symptom')}>
            <img src={icon} width = "100px" alt="icon"/>
          </button>
        </Col>
        <Col xs="5"className="justify-content-center mt-5">
          <button class="round" onClick={()=> props.onSwitchingViews('graph')}>
            <img src={graph} width = "80px" alt="icon"/>
          </button>
        </Col>
      </Row>

  </React.Fragment>
  )}

CircleIconButton.propTypes = {
  onSwitchingViews : PropTypes.func
}


export default CircleIconButton;