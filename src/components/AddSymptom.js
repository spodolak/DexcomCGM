import React from 'react';
import PropTypes from "prop-types";
import { Form, Row } from 'react-bootstrap';

function AddSymptom(props) {
  return ( 
  <React.Fragment>
    <Form>
      {['checkbox'].map((type) => (
        <div key={`inline-${type}`} className="mb-3 ml-4">
          <Row className="justify-content-center">
            <div class="cc-selector">
              <input id="sweaty" type="checkbox" name="credit-card" value="sweaty" />
              <label class="drinkcard-cc sweaty" for="sweaty"></label>
            </div>
            <div class="cc-selector">
              <input id="weak" type="checkbox" name="credit-card" value="weak" />
              <label class="drinkcard-cc weak" for="weak"></label>
            </div>
            <div class="cc-selector">
              <input id="irritable" type="checkbox" name="credit-card" value="irritable" />
              <label class="drinkcard-cc irritable" for="irritable"></label>
            </div>
          </Row>
          <Row className="justify-content-center">
            <div class="cc-selector">
              <input id="hungry" type="checkbox" name="credit-card" value="hungry" />
              <label class="drinkcard-cc hungry" for="hungry"></label>
            </div>
            <div class="cc-selector">
              <input id="dizzy" type="checkbox" name="credit-card" value="dizzy" />
              <label class="drinkcard-cc dizzy" for="dizzy"></label>
            </div>
            <div class="cc-selector">
              <input id="sleepy" type="checkbox" name="credit-card" value="sleepy" />
              <label class="drinkcard-cc sleepy" for="sleepy"></label>
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