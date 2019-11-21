import React from "react";
import NavBeforeLogin from "../components/Home/NavBar (public)/index"
import GoodRxwidget from "../components/Home/GoodRX widget/index";
import InfoCards from "../components/Home/Information cards/index";
import LoginForm from "../components/Home/Login Form/index"
import Jumbotron from "../components/Home/Jumbotron/index"

function Home() {
    return (
        <Container fluid>
            <NavBeforeLogin></NavBeforeLogin>
            <Jumbotron></Jumbotron>
            <GoodRxwidget></GoodRxwidget>
            <InfoCards></InfoCards>
            <LoginForm></LoginForm>
        </Container>
    );
};

export default Home;

