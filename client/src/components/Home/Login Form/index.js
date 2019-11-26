import React, { useContext, useRef } from "react";
import ApiCalls from "../../../utils/API";
import axios from "axios";
import { GRAB_USER_INFO, GRAB_USER_ROUTINE } from "../../../utils/actions";
import { StoreContext } from "../../../utils/GlobalState";
import { push } from 'react-router-redux';

function LoginForm() {

    const [state, dispatch] = useContext(StoreContext);
    console.log("current state", state);
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
        axios.post("/api/login", {
            username: username,
            password: password
        })
            .then(function (data) {
                //console.log("window replacement");
                //console.log("data from axios", data.data);
                let transferMe = data.data
                dispatch({ type: GRAB_USER_INFO, transferMe })
                console.log(data.data)
                getUserRoutine(data.data.id);
            })
            .catch(function (err) {
                console.log(err)
            })
    }

    function getUserRoutine(id) {
        // console.log(currentUser)
        axios.get("/api/user/" + id + "/medRoutine").then(function (usersRoutine) {
            console.log("user routine", usersRoutine.data);
            let transferMyRoutine = usersRoutine.data
            //dispatch({ type: GRAB_USER_ROUTINE, transferMyRoutine })
            grabLog(usersRoutine.data);
        })
    }

    function grabLog(routineid) {
        for (let i = 0; i < routineid.length; i++) {
            axios.get("/api/medRoutine/" + routineid[i].id + "/medLog").then(function (results) {
                console.log(results.data)
                routineid[i].medlog = results.data
                // console.log("myroutine", myroutine)
                if (i === routineid.length - 1){
                    dispatch({ type: GRAB_USER_ROUTINE, payload:routineid}) 
                    // window.location.replace("/dashboard");
                    // props.history.push('/dashboard')
                    // push('/dashboard')
                    history.replace('/dashboard')
                }
            }) 
        }
       
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
