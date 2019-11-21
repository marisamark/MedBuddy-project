import React from "react";
import NavAfterLogin from "../components/Nav (afterlogin)/index";
import Calendarbar from "../components/Dashboard/Calendarbar";


function Dashboard({}) {
    return (
        <Container fluid>
        <NavAfterLogin></NavAfterLogin>
        <Calendarbar></Calendarbar>
    </Container>
    )
}

export default Dashboard;