import React from "react";
// import { useStoreContext } from "../../utils/GlobalState";

function NavAfterLogin() {
// up date href
//add logo later
  return (
<nav class="nav ml-2 mt-2 mr-2">
<a class="ml-2 mt-2 mr-2 mb-2" href="/dashboard"><img height="60px" width="120px" src="bluemedbuddy.png" alt="logo"/>
</a>
<a class="nav-link active mt-3" href="/dashboard">Dashboard</a>
  <a class="nav-link active mt-3" href="/mymedications">My Medications</a>
  <a class="nav-link active mt-3" href="/addmedications">Add Medications</a>
  <a class="nav-link mt-3" href="/home">Logout</a>
</nav>
  );
}

export default NavAfterLogin;