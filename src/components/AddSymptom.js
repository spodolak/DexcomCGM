import React from 'react';
import PropTypes from "prop-types";
import { Form, Row } from 'react-bootstrap';

function AddSymptom(props) {
  return ( 
  <React.Fragment>
    <h1>How do you feel?</h1>
    <br></br>
    <Form>
      {['checkbox'].map((type) => (
        <div key={`inline-${type}`} className="mb-3 ml-4">
          <Row className="justify-content-center">
            <div className="cc-selector">
              <input id="sweaty" type="checkbox" value="sweaty" />
              <label className="drinkcard-cc sweaty" for="sweaty"></label>
            </div>
            <div className="cc-selector">
              <input id="weak" type="checkbox" value="weak" />
              <label className="drinkcard-cc weak" for="weak"></label>
            </div>
            <div className="cc-selector">
              <input id="irritable" type="checkbox" value="irritable" />
              <label className="drinkcard-cc irritable" for="irritable"></label>
            </div>
          </Row>
          <Row className="justify-content-center">
            <div className="cc-selector">
              <input id="hungry" type="checkbox" value="hungry" />
              <label className="drinkcard-cc hungry" for="hungry"></label>
            </div>
            <div className="cc-selector">
              <input id="dizzy" type="checkbox" value="dizzy" />
              <label className="drinkcard-cc dizzy" for="dizzy"></label>
            </div>
            <div className="cc-selector">
              <input id="sleepy" type="checkbox" value="sleepy" />
              <label className="drinkcard-cc sleepy" for="sleepy"></label>
            </div>
          </Row>
        </div>
      ))}
      <Row className="justify-content-center">
        <button class="outline"  type="submit" onClick={()=> props.onSwitchingViews('')}>
          Log
        </button>
      </Row>
   </Form>     
  </React.Fragment>
  )}

AddSymptom.propTypes = {
  onSwitchingViews : PropTypes.func
}


export default AddSymptom;