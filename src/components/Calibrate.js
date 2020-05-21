import React from 'react';
import PropTypes from "prop-types";
import { Form, InputGroup } from 'react-bootstrap';

function Drop(props) {
  return ( 
      <React.Fragment>
        <Form>
          <Form.Group controlId="calibrate">
            <Form.Label><h1>Enter Blood Sugar</h1></Form.Label>
            <InputGroup size="lg" >
              <Form.Control classType="text-center" type="calibrate" placeholder="mg/dL" />
            </InputGroup>
            <Form.Text className="text-muted">
              1. Wash and dry your hands <br></br>
              2. Take a fingerstick with your meter<br></br>
              3. Promptly enter the exact value from your meter<br></br>
            </Form.Text>
          </Form.Group>
          <button className="outline" onClick={()=> props.onSwitchingViews('')} type="submit">
            Calibrate
          </button>
        </Form>     
  </React.Fragment>
  )}

Drop.propTypes = {
  onSwitchingViews : PropTypes.func
}


export default Drop;