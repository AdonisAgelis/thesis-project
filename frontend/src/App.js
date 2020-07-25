import React, { Component } from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import './index.css';
import "bootstrap/dist/css/bootstrap.min.css";

import Main from "./main.component";
import SignUp from "./signup.component";
import LogIn from "./login.component";
import Info from './info.component';

class App extends Component {
  render() {
    return (
      <Router>
        <Route path="/" exact component={Main} />
        <Route path="/signup" component={SignUp} />
        <Route path="/login" component={LogIn} />
        <Route path="/info" component={Info} />
      </Router>
    );
  }
}

export default App;
