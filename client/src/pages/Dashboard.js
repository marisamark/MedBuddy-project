import React, {useContext, useEffect} from "react";
import NavAfterLogin from "../components/Nav (afterlogin)/index";
import Calendarbar from "../components/Dashboard/Calendarbar";
import Medstaken from "../components/Dashboard/Medstaken/index";
import Medsnottaken from "../components/Dashboard/Medsnottaken/index";
import { Row, Col } from 'react-bootstrap';
import {StoreContext} from './../utils/GlobalState'


function Dashboard() {
    const [state, dispatch] = useContext(StoreContext);
    useEffect(()=>{
console.log('this is your med routine', state)
    }, [state])
    return (
        <div>
            <NavAfterLogin />
            <div className="container">
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