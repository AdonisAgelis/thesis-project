import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

import "./styles/index.css";
import "bootstrap/dist/css/bootstrap.min.css";

import Main from "./UIComponents/main.component";
import SignUp from "./UIComponents/signup.component";
import LogIn from "./UIComponents/login.component";
import Info from "./UIComponents/info.component";
import Profile from "./UIComponents/profile.component";

const App = () => {
    return (
      <Router>
        <Route path="/" exact component={Main} />
        <Route path="/signup" component={SignUp} />
        <Route path="/login" component={LogIn} />
        <Route path="/info" component={Info} />
        <Route path="/profile" component={Profile} />
      </Router>
    );
}

export default App;
