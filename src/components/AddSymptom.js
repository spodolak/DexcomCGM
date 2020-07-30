import React from 'react';
import PropTypes from "prop-types";
import { Form, Row } from 'react-bootstrap';
import { useState } from 'react';
import firebase from '../firebase.js'

function AddSymptom(props) {
    const [thirsty, setThirsty] = useState(false);
    const [frequentUrination, setFrequentUrination] = useState(false);
    const [irritable, setIrritable] = useState(false);
    const [blurryVision, setBlurryVision] = useState(false);
    const [headache, setHeadache] = useState(false);
    const [sleepy, setSleepy] = useState(false);
    const [sweaty, setSweaty] = useState(false);
    const [shaky, setShaky] = useState(false);
    const [hungry, setHungry] = useState(false);
    const [dizzy, setDizzy] = useState(false);

    const onThirstyCheck = () => {
        setThirsty(!thirsty)
    }
    const onFrequentUrinationCheck = () => {
        setFrequentUrination(!frequentUrination)
    }
    const onIrritableCheck = () => {
        setIrritable(!irritable)
    }
    const onBlurryVisionCheck = () => {
        setBlurryVision(!blurryVision)
    }
    const onHeadacheCheck = () => {
        setHeadache(!headache)
    }
    const onSleepyCheck = () => {
        setSleepy(!sleepy)
    }
    const onSweatyCheck = () => {
        setSweaty(!sweaty)
    }
    const onShakyCheck = () => {
        setShaky(!shaky)
    }
    const onHungryCheck = () => {
        setHungry(!hungry)
    }
    const onDizzyCheck = () => {
        setDizzy(!dizzy)
    }

    const fetchFirestoreSymptoms = async () => {
        const data =  await firebase.firestore().collection('symptoms').doc('log').get()
        .then(value => {return value.data()})
        return data;
    }

    const postFirebaseSymptom = async () => {
        const timeStamp = new Date().getTime()
        const currentSymptom = {
            [timeStamp]: {
                timeStamp: new Date(),
                symptoms: {
                    thirsty,
                    frequentUrination,
                    irritable,
                    blurryVision,
                    headache,
                    sleepy,
                    sweaty,
                    shaky,
                    hungry,
                    dizzy,
                }
            }
        }
        const data = await fetchFirestoreSymptoms();
        firebase.firestore().collection('symptoms').doc('log').update({symptoms: [...data.symptoms, currentSymptom]});
    }

    const onSubmit = () => {
        props.onSwitchingViews('');
        postFirebaseSymptom()
    }

    return (
        <React.Fragment>
            <h1>How do you feel?</h1>
            <br></br>
            <Form>
                {['checkbox'].map((type) => (
                    <div key={`inline-${type}`} className="mb-3 ml-4">
                        <Row className="justify-content-center">
                            <div className="cc-selector">
                                <input id="thirsty" type="checkbox" value="thirsty" onChange={onThirstyCheck} />
                                <label className="drinkcard-cc thirsty" for="thirsty"></label>
                            </div>
                            <div className="cc-selector">
                                <input id="frequent-urination" type="checkbox" value="frequent-urination" onChange={onFrequentUrinationCheck} />
                                <label className="drinkcard-cc frequent-urination" for="frequent-urination"></label>
                            </div>
                            <div className="cc-selector">
                                <input id="irritable" type="checkbox" value="irritable" onChange={onIrritableCheck} />
                                <label className="drinkcard-cc irritable" for="irritable"></label>
                            </div>
                        </Row>
                        <Row className="justify-content-center">
                            <div className="cc-selector">
                                <input id="blurry-vision" type="checkbox" value="blurry-vision" onChange={onBlurryVisionCheck} />
                                <label className="drinkcard-cc blurry-vision" for="blurry-vision"></label>
                            </div>
                            <div className="cc-selector">
                                <input id="headache" type="checkbox" value="headache" onChange={onHeadacheCheck} />
                                <label className="drinkcard-cc headache" for="headache"></label>
                            </div>
                            <div className="cc-selector">
                                <input id="sleepy" type="checkbox" value="sleepy" onChange={onSleepyCheck} />
                                <label className="drinkcard-cc sleepy" for="sleepy"></label>
                            </div>
                        </Row>
                        <Row className="justify-content-center">
                            <div className="cc-selector">
                                <input id="sweaty" type="checkbox" value="sweaty" onChange={onSweatyCheck} />
                                <label className="drinkcard-cc sweaty" for="sweaty"></label>
                            </div>
                            <div className="cc-selector">
                                <input id="shaky" type="checkbox" value="shaky" onChange={onShakyCheck} />
                                <label className="drinkcard-cc shaky" for="shaky"></label>
                            </div>
                            <div className="cc-selector">
                                <input id="hungry" type="checkbox" value="hungry" onChange={onHungryCheck} />
                                <label className="drinkcard-cc hungry" for="hungry"></label>
                            </div>
                        </Row>
                        <Row className="justify-content-center">
                            <div className="cc-selector">
                                <input id="dizzy" type="checkbox" value="dizzy" onChange={onDizzyCheck} />
                                <label className="drinkcard-cc dizzy" for="dizzy"></label>
                            </div>
                        </Row>
                    </div>
                ))}
                <Row className="justify-content-center">
                    <button class="outline" type="submit" onClick={() => onSubmit()}>
                        Log
                    </button>
                </Row>
            </Form>
        </React.Fragment>
    )
}

AddSymptom.propTypes = {
    onSwitchingViews: PropTypes.func
}


export default AddSymptom;