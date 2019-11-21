import React from "react";
import NavAfterLogin from "../components/Nav (afterlogin)/index";
import Meddata from "../components/My Medications/Med data/index";


function MyMedications({}) {
    return (
     <Container fluid>
        <NavAfterLogin></NavAfterLogin>
        <Meddata></Meddata>
    </Container>
    )
}

export default MyMedications;