import React from "react";
import LoginForm from "../Login Form";

function Jumbotron() {
    return (
        <div class="jumbotron jumbotron-fluid">
            <div class="container">
                <h1 class="display-4">Welcome to Medbuddy</h1>
                <p class="lead">This is a modified jumbotron that occupies the entire horizontal space of its
                parent.</p>
                <div class="container">
                    <div class="row">
                        <div class="col-11">
                            <LoginForm />
                        </div>
                    </div>
                    </div>
            </div>
        </div>

    )
}

export default Jumbotron;