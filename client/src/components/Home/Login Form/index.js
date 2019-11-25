import React, { useContext, useRef } from "react";
import ApiCalls from "../../../utils/API"
import axios from "axios";

function LoginForm() {

    const username = useRef();
    const password = useRef();

    function loginClick(event) {
        event.preventDefault();
        var userData = {
            username: username.current.value,
            password: password.current.value
        };
        // if (!userData.email || !userData.password) {
        //     return
        // }
        loginUser(userData.username, userData.password);
    }

    function loginUser(username, password) {
        console.log(username);
        console.log(password);

        axios.post("/api/login", {
            username: username,
            password: password
        })
            .then(function () {
                console.log("window replacement");
        window.location.replace("/dashboard");
            })
            .catch(function (err) {
                console.log(err)
            })
    }

    return (
        <div>
            <form className="float-right mb-4">
                <div className="form-group">
                    <label htmlFor="username">Username</label>
                    <input type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Your username..." ref={username}>
                    </input>
                </div>

                <div className="form-group">
                    <label htmlFor="exampleInputPassword1">Password</label>
                    <input type="password" className="form-control" id="exampleInputPassword1" placeholder="Your password..." ref={password}></input>
                </div>
                <button type="submit" className="btn btn-primary" onClick={loginClick}>Sign In</button>
            </form>
        </div>
    )
}

export default LoginForm;
