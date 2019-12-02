import React from "react";
import LoginForm from "../Login Form";

function Jumbotron() {
    return (
        <div id="jumbotron" className="jumbotron jumbotron-fluid bg-img">
            {/* <section className="hero is-small is-widescreen"> */}
            <div className="container ">
                <div className="col-lg-6 col-sm-12 col-md-6">
                    <div class="row justify-content-center">
                        <h1 id="welcometo" className="medbuddy font-weight-bold mr-4">Welcome to</h1>
                        <h1 id="medbuddy" className="mr-4 medbuddy font-weight-bold ">MedBuddy</h1>

                    </div>
                    <div className="row justify-content-center">
                            <LoginForm />
                    </div>

                </div>
                {/* <div className="container">

                </div> */}
            </div>

            {/* </section> */}
        </div>

    )
}

export default Jumbotron;