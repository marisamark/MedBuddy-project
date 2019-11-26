import React from "react";
import LoginForm from "../Login Form";

function Jumbotron() {
    return (
        <div className="jumbotron jumbotron-fluid bg-img">
           <section className="hero is-large is-widescreen">
            <div className="container hero-body">
                
                <h1 className="display-4">Welcome to Medbuddy</h1>
                <p className="lead">This is a modified jumbotron that occupies the entire horizontal space of its
                parent.</p>
                <div className="container">
                    <div className="row">
                        <div className="col-11">
                            <LoginForm />
                        </div>
                    </div>
                    </div>
            </div>
            </section>
        </div>

    )
}

export default Jumbotron;