import React from "react";
// import { useStoreContext } from "../../utils/GlobalState";
import { Navbar, Nav, Button } from 'react-bootstrap';

function NavAfterLogin() {
  return (
<Navbar bg="primary" expand="lg">
  <Navbar.Brand href="/dashboard"><img height="60px" width="120px" src="bluemedbuddy.png" alt="logo"/></Navbar.Brand>
  <Navbar.Toggle aria-controls="basic-navbar-nav" />
  <Navbar.Collapse id="basic-navbar-nav">
    <Nav className="mr-auto">
      <Nav.Link href="/dashboard">Dashboard</Nav.Link>
      <Nav.Link href="/mymedications">My Medications</Nav.Link>
      <Nav.Link href="/addmedications">Add Medications</Nav.Link>    
      <Nav.Link href="/home">Logout</Nav.Link>
    </Nav>
  </Navbar.Collapse>
</Navbar>
  );
}

export default NavAfterLogin;