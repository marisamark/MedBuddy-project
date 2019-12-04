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

    let log = state.medroutine.map(log =>
        log.MedLogs.map(medlogs =>
            console.log("MAPPED LOG", medlogs)
        )
    )


    // useEffect(() => {
        
    // }, [])
// time, name of drug, dose
    return (
        // state.logged ? (
        <div>
            <NavAfterLogin />
            <div className="container">
                <Calendarbar></Calendarbar>
               
                <Row>
                    <Col lg={true} >
                    {state.medroutine.map(log =>
                        <Medsnottaken 
                        key={log.id}
                        name={log.medicinename}
                        MedLogs={log.MedLogs}
                        />
                        )}
                    </Col>
                    <Col lg={true} >
                    {state.medroutine.map(log =>
                        <Medstaken
                        key={log.id}
                        name={log.medicinename}
                        MedLogs={log.MedLogs}
                        />
                    )}
                    </Col>
                </Row>
            </div>
        </div>
        )
    //     : (<Redirect to = '/' />)
    // )
}

export default Dashboard;