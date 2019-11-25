import React from "react";
import NavAfterLogin from "../components/Nav (afterlogin)/index";
import Calendarbar from "../components/Dashboard/Calendarbar";
import Medstaken from "../components/Dashboard/Medstaken/index";
import Medsnottaken from "../components/Dashboard/Medsnottaken/index";
import { Row, Col } from 'react-bootstrap';


function Dashboard() {
    return (
        <div>
            <NavAfterLogin />
            <div class="container">
                <Calendarbar></Calendarbar>
                <Row>
                    <Col lg={true} >
                        <Medsnottaken />
                    </Col>
                    <Col lg={true} >
                        <Medstaken />
                    </Col>
                </Row>
            </div>
        </div>
    )
}

export default Dashboard;