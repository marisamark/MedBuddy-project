import React from "react";

function LoginForm() {

    return (
        <div>
            <form className="float-right mb-4">
                <div className="form-group">
                    <label for="username">Username</label>
                    <input type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Your username...">
                    </input>
                </div>

                <div className="form-group">
                    <label for="exampleInputPassword1">Password</label>
                    <input type="password" className="form-control" id="exampleInputPassword1" placeholder="Your password..."></input>
                </div>
                <button type="submit" className="btn btn-primary">Sign In</button>
            </form>
        </div>
    )
}

export default LoginForm;
