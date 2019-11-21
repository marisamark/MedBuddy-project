import React from "react";
import NavBeforeLogin from "../components/Home/NavBar (public)/index"
import GoodRxwidget from "../components/Home/GoodRX widget/index";
import InfoCards from "../components/Home/Information cards/index";
import LoginForm from "../components/Home/Login Form/index"
import Jumbotron from "../components/Home/Jumbotron/index"

function Home() {
    return (
        <>
        <NavBeforeLogin/>

        <Jumbotron>
            <div class="container">
                <div class="row">
                    <div class="col-11">
                        <LoginForm/>
                    </div>
                </div>
                <div class="row">
                    <InfoCards />
                </div>
            </div>

        </Jumbotron>
        </>
        // <GoodRxwidget></GoodRxwidget>
         
    );
};

export default Home;

