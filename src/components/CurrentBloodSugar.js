import React from 'react';
import PropTypes from "prop-types";
import CircleIconButton from "./CircleIconButton";
import Orb from './Orb';
import { Row } from 'react-bootstrap';

function CurrentBloodSugar(props) {
  return ( 
  <React.Fragment> 
    <Row className="mt-5">
    </Row>
    <Row className="justify-content-center mt-5 mb-5">
        <Orb />
        <p className="egvs">{props.value}</p>
    </Row >
      <CircleIconButton onSwitchingViews = {props.onSwitchingViews}/>
  </React.Fragment>
  )}

CurrentBloodSugar.propTypes = {
  value : PropTypes.number,
  onSwitchingViews : PropTypes.func
}


export default CurrentBloodSugar;

