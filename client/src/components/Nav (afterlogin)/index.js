import React from "react";
// import { useStoreContext } from "../../utils/GlobalState";
import { Navbar, Nav, Button } from 'react-bootstrap';

function NavAfterLogin() {
  return (
<Navbar  className="nav-color" expand="lg">
  <Navbar.Brand href="/dashboard"><img height="60px" width="120px" src="medbuddylogo.png" alt="logo"/></Navbar.Brand>
  <Navbar.Toggle aria-controls="basic-navbar-nav" />
  <Navbar.Collapse id="basic-navbar-nav">
    <Nav className="mr-auto">
      <Nav.Link className="text-light" href="/dashboard">Dashboard</Nav.Link>
      <Nav.Link className="text-light" href="/mymedications">My Medications</Nav.Link>
      <Nav.Link className="text-light" href="/addmedications">Add Medications</Nav.Link>    
      <Nav.Link className="text-light" href="/home">Logout</Nav.Link>
    </Nav>
  </Navbar.Collapse>
</Navbar>
  );
}

export default NavAfterLogin;