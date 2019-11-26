import React from "react";
import LoginForm from "../Login Form";

function Jumbotron() {
    return (
        <div className="jumbotron jumbotron-fluid bg-img">
           {/* <section className="hero is-small is-widescreen"> */}
            <div className="container hero-body">
                
                <h1 className="display-3 font-weight-bold text-white">Welcome to Medbuddy</h1>
                <div className="container">
                    <div className="row">
                        <div className="col-11">
                            <LoginForm />
                        </div>
                    </div>
                    </div>
            </div>
            {/* </section> */}
        </div>

    )
}

export default Jumbotron;