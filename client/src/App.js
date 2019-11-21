import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./pages/Homepage";
import MedicationForm from "./pages/AddMedications";
import Dashboard from "./pages/Dashboard";
//import Health from "./pages/Healthpage";
import MyMedicatons from "./pages/MyMedicationspage"
//import Signup from "./pages/Signup";
//import Nav from "./components/Nav";
import { StoreProvider } from "./utils/GlobalState";


function App() {
  return (
    <Router>
      <div>
        {/* <StoreProvider> */}
          {/* <Nav /> */}
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/home" component={Home} />
            <Route exact path="/medicationForm" component={MedicationForm} />
            <Route exact path="/dashboard" component={Dashboard} /> */}
            {/* <Route exact path="/health" component={Health} /> */}
            <Route exact path="/mymedications" component={MyMedicatons} />
            {/* <Route exact path="/signup" component={Signup} /> */}
            {/* <Route component={NoMatch} /> */}
          </Switch>
        {/* </StoreProvider> */}
      </div>
    </Router>
  );
}

export default App;
