import React from "react";
// import { useStoreContext } from "../../utils/GlobalState";
import { Navbar, Nav, Button } from 'react-bootstrap';
function NavBeforeLogin() {

  return (
<Navbar bg="primary" expand="lg">
  <Navbar.Brand href="/home"><img height="60px" width="120px" src="bluemedbuddy.png" alt="logo"/></Navbar.Brand>
  <Navbar.Toggle aria-controls="basic-navbar-nav" />
  <Navbar.Collapse id="basic-navbar-nav">
    <Nav className="mr-auto">
      <Nav.Link className="text-light" href="/health">Health and Wellness</Nav.Link>
      <Nav.Link className="text-light" href="/signup">Signup</Nav.Link>
    </Nav>
  </Navbar.Collapse>
</Navbar>
  );
}

export default NavBeforeLogin;