import React from "react";
import NavBeforeLogin from "../components/Home/NavBar (public)/index"
import SignupForm from "../components/Home/Signup form/index";


function Signup() {
    return (
        <>
            <NavBeforeLogin />
            <div className="container text-primary">
                <SignupForm />
            </div>

        </>
    )
}

export default Signup;