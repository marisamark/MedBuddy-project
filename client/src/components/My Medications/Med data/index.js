import React from "react";
import Accordion from 'react-bootstrap/Accordion';
import Card from 'react-bootstrap/Card';
// import MedLog from "../MedLog/index";

function Meddata(props) {
    console.log('MEDLOG PROPS', props)

    return (
        <Accordion>
            <Card>
            <Accordion.Toggle as={Card.Header} eventKey="0">
                {props.medicine}
            </Accordion.Toggle>
                <Accordion.Collapse eventKey="0">
                    <Card.Body>
                        <div><strong>Amount of intake: </strong> {props.dose}</div>
                        <div><strong>Frequency of intake (per day): </strong> {props.dosage}</div>
                        <div><strong>Duration of intake (days): </strong> {props.datecount}</div>
                        <div><strong>Logs: </strong>
                            {/* {props.medLogs.map(log =>   
                            <MedLog
                                date={log.date}
                                time={log.time}
                                status={log.status}
                            />
                            )} */}
                            </div>
                    </Card.Body>
                </Accordion.Collapse>
            </Card>
        </Accordion>

    )
}

export default Meddata;