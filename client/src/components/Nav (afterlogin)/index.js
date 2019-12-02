import React, { useState } from "react";
// import { useStoreContext } from "../../utils/GlobalState";
import { Navbar, Nav, Button } from 'react-bootstrap';
import { BrowserRouter as Router, Route, Switch, Redirect } from "react-router-dom";
import {Link} from 'react-router'


function NavAfterLogin() {

  const [loggedState, setLoggedState] = useState(true);

  return (

    // loggedState ? (

      <Navbar className="nav-color" expand="lg">
        <Navbar.Brand href="/dashboard"><img height="60px" width="120px" src="medbuddylogo.png" alt="logo" /></Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <Link to = "/mymedications">mymedications</Link>
            {/* <Redirect className="text-light" href="/dashboard">Dashboard</Redirect>
            <Redirect className="text-light" href="/mymedications">My Medications</Redirect>
            <Redirect className="text-light" href="/addmedications">Add Medications</Redirect>
            <Redirect className="text-light" href="/home">Logout</Redirect> */}

            {/* <Nav.Link className="text-light" href="/dashboard">Dashboard</Nav.Link>
            <Nav.Link className="text-light" href="/mymedications" >My Medications</Nav.Link>
            <Nav.Link className="text-light" href="/addmedications">Add Medications</Nav.Link>
            <Nav.Link className="text-light" href="/home">Logout</Nav.Link> */}
          </Nav>
        </Navbar.Collapse>
      </Navbar>

    ) 
  //     <h1>not logged in</h1>
  // )
}

export default NavAfterLogin;