import React from "react";

function LoginForm() {

    return (
        <div>
            <form>
                <div class="form-group">
                    <label for="username">Username</label>
                    <input type="text" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Your username...">
                    </input>
                </div>

                <div class="form-group">
                    <label for="exampleInputPassword1">Password</label>
                    <input type="password" class="form-control" id="exampleInputPassword1" placeholder="Your password..."></input>
                </div>
                <button type="submit" class="btn btn-primary">Sign In</button>
            </form>
        </div>
    )
}

export default LoginForm;
