import React from "react";
import LoginForm from "../Login Form";

function Jumbotron() {
    return (
        <div id="jumbotron" className="jumbotron jumbotron-fluid bg-img">
           {/* <section className="hero is-small is-widescreen"> */}
            <div className="container welcome1">
                <h1 id="welcometo" className="medbuddy font-weight-bold mr-4">Welcome to</h1>
                <h1 id ="medbuddy" className="mr-4 medbuddy font-weight-bold ">MedBuddy</h1>    
            </div>
                <div className="container">
                    <div className="row">
                        <div className="col-11">
                            <LoginForm />
                        </div>
                    </div>
                    </div>
        
            {/* </section> */}
        </div>

    )
}

export default Jumbotron;