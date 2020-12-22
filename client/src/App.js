import React, { Fragment } from "react";
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";

import Home from "./Views/Home";
import ContactUs from "./Views/ContactUs";
import TestHistory from "./Views/TestHistory";
import LogIn from "./Views/LogIn";
import SignUp from "./Views/SignUp";
import ForgotPass from "./Views/ForgotPass";
import Alert from "./Views/Alert";
import Navbar from "./Views/Navbar";

// Redux
import { Provider } from 'react-redux';
import store from './store';
//import { loadUser } from './actions/auth';
//import setAuthToken from './utils/setAuthToken';

const App = () => {

  return (
    <Provider store={store}>
      <Router>
        <Fragment>
          <Navbar />
          <Route exact path="/" component={Home}/>
          <section>
            <Alert/>
            <Switch>
              <Route exact path="/contact" component={ContactUs} />
              <Route exact path="/history" component={TestHistory} />
              <Route exact path="/login" component={LogIn} />
              <Route exact path="/signup" component={SignUp} />
              <Route exact path="/forgotpass" component={ForgotPass} />
            </Switch>
          </section>
        </Fragment>
      </Router>
    </Provider>

    );
}

export default App;
