import React from "react";
// import { useStoreContext } from "../../utils/GlobalState";

function NavAfterLogin() {
// up date href
//add logo later
  return (
<nav class="nav justify-content-center">
<a class="nav-link active" href="/dashboard">Dashboard</a>
  <a class="nav-link active" href="/mymedications">My Medications</a>
  <a class="nav-link active" href="/addmedications">Add Medications</a>
  <a class="nav-link" href="/home">Logout</a>
</nav>
  );
}

export default NavAfterLogin;