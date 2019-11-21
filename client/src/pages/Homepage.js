import React from "react";
import NavBar from "../components/Home/NavBar (public)/index";
import GoodRxwidget from "../components/Home/GoodRX widget/index";
import InfoCards from "../components/Home/Information cards/index";
import LoginForm from "../components/Home/Login Form/index"

const Home = () => {
    return (
        <Container fluid>
            <NavBar></NavBar>
            <GoodRxwidget></GoodRxwidget>
            <InfoCards></InfoCards>
            <LoginForm></LoginForm>
        </Container>
    );
};

export default Home;

