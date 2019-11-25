import React, { useContext, useRef } from "react";
import { StoreContext } from "../../../utils/GlobalState";
// import usersignup from "../../../../../routes/user-api";

function SignupForm() {

    const [state, dispatch] = useContext(StoreContext);

    const firstName = useRef();
    const lastName = useRef();
    const userName = useRef();
    const password = useRef();
    const email = useRef();

    const usersignup = () => {
        // preventDefault();
        dispatch({ type: "usersignup" });
        //alert("button clicked");
        alert(firstName.current.value + " " + lastName.current.value + " " + userName.current.value + " " + password.current.value + " " + email.current.value);
        console.log(state);
    }

    return (
        <div>
            <h2 class="text-center mt-4 mb-3">Signup</h2>
            <form class="mx-auto col-4 mt-4">
                <div class="form-group">
                    <label for="firstName">First Name</label>
                    <input type="text" class="form-control" id="exampleInputFirstName" aria-describedby="emailHelp" placeholder="Your first name..." ref={firstName}>
                    </input>
                </div>
                <div class="form-group">
                    <label for="lastName">Last Name</label>
                    <input type="text" class="form-control" id="exampleInputLastName1" placeholder="Your last name..." ref={lastName}></input>
                </div>
                <div class="form-group">
                    <label for="username">Username</label>
                    <input type="text" class="form-control" id="exampleInputUsername1" placeholder="Your username..." ref={userName}></input>
                </div>
                <div class="form-group">
                    <label for="password">Password</label>
                    <input type="password" class="form-control" id="exampleInputPassword1" placeholder="Your password..." ref={password}></input>
                </div>
                <div class="form-group">
                    <label for="email">Email</label>
                    <input type="text" class="form-control" id="exampleInputEmail1" placeholder="Your email..." ref={email}></input>
                </div>
                <button type="submit" class="btn btn-primary" onClick={() => usersignup()}>Sign Up</button>
            </form>
        </div>
    )
}

export default SignupForm;