import React from "react";
// import { useStoreContext } from "../../utils/GlobalState";
import { Navbar, Nav, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom'
function NavBeforeLogin() {

  return (
<Navbar className="nav-color" expand="lg">
  <Navbar.Brand href="/home" className="col"><img height="70px" width="130px" src="medbuddylogo.png" alt="logo"/></Navbar.Brand>
  <Navbar.Toggle aria-controls="basic-navbar-nav" />
  <Navbar.Collapse id="basic-navbar-nav">
    <Nav id="navpublic">
      <Link to = "/health" className="text-light col-md-11 offset-md-11 " id="healthandwellness">Health and Wellness</Link>
      
      <Link to ="/signup" className="text-light col-md-1 offset-md-1 " id="signup">Signup</Link>
      </Nav>
  </Navbar.Collapse>
</Navbar>
  );
}

export default NavBeforeLogin;