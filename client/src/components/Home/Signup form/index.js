import React from "react";

function SignupForm(){

    return(
        <div>
            <form class="float-right mb-4">
                <div class="form-group">
                    <label for="firstName">First Name</label>
                    <input type="text" class="form-control" id="exampleInputFirstName" aria-describedby="emailHelp" placeholder="Your frist name...">
                    </input>
                </div>

                <div class="form-group">
                    <label for="lastName">Last Name</label>
                    <input type="text" class="form-control" id="exampleInputLastName1" placeholder="Your last name..."></input>
                </div>
                <div class="form-group">
                    <label for="username">Username</label>
                    <input type="text" class="form-control" id="exampleInputUsername1" placeholder="Your username..."></input>
                </div>
                <div class="form-group">
                    <label for="password">Password</label>
                    <input type="password" class="form-control" id="exampleInputPassword1" placeholder="Your password..."></input>
                </div>
                <div class="form-group">
                    <label for="email">Email</label>
                    <input type="text" class="form-control" id="exampleInputEmail1" placeholder="Your email..."></input>
                </div>
                <button type="submit" class="btn btn-primary">Sign In</button>
            </form>
        </div>
    )
}

export default SignupForm;