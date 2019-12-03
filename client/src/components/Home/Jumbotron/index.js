import React from "react";
import LoginForm from "../Login Form";

function Jumbotron() {
    return (
        <div id="jumbotron" className="jumbotron jumbotron-fluid bg-img">
            <div id="contentcenter" className="container">
                <div className="col-lg-6 col-sm-12 col-md-6 justify-content-center">
                    <div  className="row justify-content-center">
                            <h1 id="welcometo" className="medbuddy font-weight-bold">Welcome to</h1>
                     
                            <h1 id="medbuddy" className="medbuddy font-weight-bold">MedBuddy</h1>
                    </div>
                <div className="row justify-content-center" id="login">
                        <LoginForm />
                </div>

                </div>
         
            </div>

        </div>

    )
}

export default Jumbotron;