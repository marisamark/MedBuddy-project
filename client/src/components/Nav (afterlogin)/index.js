import React from "react";
// import { useStoreContext } from "../../utils/GlobalState";
import { Navbar, Nav, Grid, Row, Col } from 'react-bootstrap';

function NavAfterLogin() {
  return (

<Navbar  className="nav-color" expand="lg">
  <Navbar.Brand href="/dashboard" className="col"><img height="60px" width="120px" src="medbuddylogo.png" alt="logo"/></Navbar.Brand>
  <Navbar.Toggle aria-controls="basic-navbar-nav" />
  <Navbar.Collapse id="basic-navbar-nav">
    <Nav className="mr-auto" id="nav-loging"> 
        <Nav.Link className="text-light col" href="/dashboard">Dashboard</Nav.Link>   
        <Nav.Link className="text-light col-md-auto" href="/mymedications">My Medications</Nav.Link>  
        <Nav.Link className="text-light col-md-auto" href="/addmedications">Add Medications</Nav.Link>               
    </Nav>
    <Nav.Link className="text-light" href="/home" id="logout">Logout</Nav.Link> 
  </Navbar.Collapse> 
     
</Navbar>
  );
}

export default NavAfterLogin;