import React from "react";
import { Row, Col } from 'react-bootstrap';
function InfoCards() {
    return (
        // <div className="container">
            <Row>
                <Col lg={true} >
                    <div className="card float-left mr-4 ml-4 mt-4 mb-4">
                        <div className="card-body">
                            <h5 className="card-title">Track your medications</h5>
                            <p className="card-text">MedBuddy provides you with a user-friendly weekly calendar system that allows you to input when you need to take your medications.</p>
                        </div>
                    </div>
                </Col>
                <Col lg={true} >
                    <div className="card float-right mr-4 ml-4 mt-4 mb-4">
                        <div className="card-body">
                            <h5 className="card-title">View your medical history</h5>
                            <p className="card-text">MedBuddy keeps track of all the medications you have taken in a data table you can reference at any time.</p>
                        </div>
                    </div>
                </Col>

            </Row>


            // </div>
            )
        }
        
export default InfoCards;