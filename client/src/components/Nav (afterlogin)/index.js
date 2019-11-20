import React from "react";
// import { useStoreContext } from "../../utils/GlobalState";

function NavAfterLogin() {
// up date href
//add logo later
  return (
<nav class="nav justify-content-center">
  <a class="nav-link active" href="#">My Medications</a>
  <a class="nav-link active" href="#">Add Medications</a>
  <a class="nav-link" href="#">Logout</a>
</nav>
  );
}

export default NavAfterLogin;