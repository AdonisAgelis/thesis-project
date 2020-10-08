import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

import "./styles/index.css";
import "bootstrap/dist/css/bootstrap.min.css";

import Landing from "./UIComponents/landing.component";
import SignUp from "./UIComponents/signup.component";
import LogIn from "./UIComponents/login.component";
import Info from "./UIComponents/info.component";
import WorkStation from "./UIComponents/workStation.component";

const App = () => {
    return (
      <Router>
        <Route path="/" exact component={Landing} />
        <Route path="/signup" component={SignUp} />
        <Route path="/login" component={LogIn} />
        <Route path="/info" component={Info} />
        <Route path="/workstation" component={WorkStation} />
      </Router>
    );
}

export default App;
