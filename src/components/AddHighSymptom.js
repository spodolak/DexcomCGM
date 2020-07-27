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
              <input id="thirsty" type="checkbox" value="thirsty" />
              <label className="drinkcard-cc thirsty" for="thirsty"></label>
            </div>
            <div className="cc-selector">
              <input id="frequent-urination" type="checkbox" value="frequent-urination" />
              <label className="drinkcard-cc frequent-urination" for="frequent-urination"></label>
            </div>
            <div className="cc-selector">
              <input id="irritable" type="checkbox" value="irritable" />
              <label className="drinkcard-cc irritable" for="irritable"></label>
            </div>
          </Row>
          <Row className="justify-content-center">
            <div className="cc-selector">
              <input id="blurry-vision" type="checkbox" value="blurry-vision" />
              <label className="drinkcard-cc blurry-vision" for="blurry-vision"></label>
            </div>
            <div className="cc-selector">
              <input id="headache" type="checkbox" value="headache" />
              <label className="drinkcard-cc headache" for="headache"></label>
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