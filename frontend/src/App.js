import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import './styles/index.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { MDBAnimation } from 'mdbreact';

import Landing from './UIComponents/Landing';
import SignUp from './UIComponents/SignUp';
import LogIn from './UIComponents/Login';
import Info from './UIComponents/Info';
import WorkStation from './UIComponents/WorkStation';

const App = () => {
  return (
    <Router>
      <MDBAnimation type="fadeIn">
        <Route path="/" exact component={Landing} />
      </MDBAnimation>
      <Route path="/signup" component={SignUp} />
      <MDBAnimation type="fadeIn">
        <Route path="/login" component={LogIn} />
      </MDBAnimation>
      <MDBAnimation type="fadeIn">
        <Route path="/info" component={Info} />
      </MDBAnimation>
      <MDBAnimation type="fadeIn">
        <Route path="/workstation" component={WorkStation} />
      </MDBAnimation>
    </Router>
  );
};

export default App;
