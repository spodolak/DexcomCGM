import React from 'react';
import PropTypes from "prop-types";
import { Form, InputGroup } from 'react-bootstrap';

function Calibrate(props) {
  const {onSwitchingViews, alertCheck, onCalibrate} = props;

  const submitCalibrate = () => {
    onSwitchingViews('');
    alertCheck();
  }

  return ( 
      <React.Fragment>
        <Form>
          <Form.Group controlId="calibrate">
            <Form.Label></Form.Label>
            <h1 class="update">Update Blood Sugar</h1>
            <br></br>
            <InputGroup size="lg" >
              <Form.Control 
                classType="text-center" 
                type="calibrate" 
                placeholder="mg/dL"
                onChange={onCalibrate}
                style={{marginLeft: "20%", marginRight: "20%"}}
              />
            </InputGroup>
            <Form.Text className="text-muted">
              1. Wash and dry your hands <br></br>
              2. Take a fingerstick with your meter<br></br>
              3. Promptly enter the exact value from your meter<br></br>
            </Form.Text>
          </Form.Group>
          <button className="outline" onClick={()=> submitCalibrate()} type="submit">
            Calibrate
          </button>
        </Form>     
  </React.Fragment>
  )}

Calibrate.propTypes = {
  onSwitchingViews : PropTypes.func,
  onCalibrate : PropTypes.func
}


export default Calibrate;