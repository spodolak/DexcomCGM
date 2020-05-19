import React from 'react';
import PropTypes from "prop-types";
import CircleIconButton from "./CircleIconButton";
import Orb from './Orb';
import { Container, Row, Col } from 'react-bootstrap';

function CurrentBloodSugar(props) {
  return ( 
  <React.Fragment> 
      <Container>
        <Row>
            <Orb />
            <p class="egvs">{props.value}</p>
        </Row>
        <Row>
          <React.Fragment> 
            <CircleIconButton onSwitchingViews = {props.onSwitchingViews}/>
          </React.Fragment>
        </Row>
      </Container>
  </React.Fragment>
  )}

CurrentBloodSugar.propTypes = {
  value : PropTypes.number,
  onSwitchingViews : PropTypes.func
}


export default CurrentBloodSugar;

