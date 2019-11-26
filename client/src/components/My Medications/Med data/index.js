import React from "react";
import Accordion from 'react-bootstrap/Accordion';
import Card from 'react-bootstrap/Card';


function Meddata(props) {
    return (
        // <>

        <Accordion>
        <Card>
            <Accordion.Toggle as={Card.Header} eventKey="0">
            Medicine Name
            </Accordion.Toggle>
            <Accordion.Collapse eventKey="0">
            <Card.Body>
            {props.dose}
            {props.dosage}
            {props.datecount}
            </Card.Body>
            </Accordion.Collapse>
            </Card>
        </Accordion>


        /* <div className="card">
            <div className="card-header">
               <h3>Medicine Name</h3>
            </div>
            <div className="card-body">
                {props.dose}
                {props.dosage}
                {props.datecount}
            </div>
        </div> */
        /* </> */
    )
}

export default Meddata;