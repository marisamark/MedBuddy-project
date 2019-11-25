import React from "react";
// import { useStoreContext } from "../../utils/GlobalState";

function NavBeforeLogin() {

  return (
<nav className="nav ml-2 mt-2 mr-2">
<a className="ml-2 mt-2 mr-2 mb-2" href="/home"><img height="60px" width="120px" src="bluemedbuddy.png" alt="logo"/>
</a>
<a className="nav-link active mt-3" href="/home">Home</a>
  <a className="nav-link active mt-3" href="/health">Health and Wellness</a>
  <a className="nav-link mt-3 float-left" href="/signup">Signup</a>
</nav>
  );
}

export default NavBeforeLogin;