import React, { useContext, useEffect } from "react";
import NavAfterLogin from "../components/Nav (afterlogin)/index";
import Calendarbar from "../components/Dashboard/Calendarbar";
import Medstaken from "../components/Dashboard/Medstaken/index";
import Medsnottaken from "../components/Dashboard/Medsnottaken/index";
import { Row, Col } from 'react-bootstrap';
import { StoreContext } from './../utils/GlobalState'
import { BrowserRouter as Router, Route, Switch, Redirect } from "react-router-dom";


function Dashboard() {
    const [state, dispatch] = useContext(StoreContext);
    console.log("dashboard", state)
    // useEffect(() => {
    //     console.log('this is your med routine', state)
    // }, [state])

    return (
        // state.logged ? (
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
    //     : (<Redirect to = '/' />)
    // )
}

export default Dashboard;