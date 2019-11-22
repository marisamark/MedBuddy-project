import React from "react";
import NavAfterLogin from "../components/Nav (afterlogin)/index";
// import Calendarbar from "../components/Dashboard/Calendarbar";
import Medstaken from "../components/Dashboard/Medstaken/index";
import Medsnottaken from "../components/Dashboard/Medsnottaken/index";


function Dashboard({ }) {
    return (
        <>
        <div class="container">
             <NavAfterLogin />
            <Calendarbar></Calendarbar>
            <div class="row">
            <Medstaken />
            <Medsnottaken />
            </div>
        </div>
           
           
        </>
    )
}

export default Dashboard;