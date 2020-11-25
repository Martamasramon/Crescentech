import React, {Component} from "react";
import {BrowserRouter, Route} from "react-router-dom";
import Home from "./Views/Home";
import ContactUs from "./Views/ContactUs";
import TestHistory from "./Views/TestHistory";
import LogIn from "./Views/LogIn";

class App extends Component {

  render() {
    return (
      <BrowserRouter>
        <Route exact path="/" render={()=><Home/>}/>
        <Route path="/contact" render={()=><ContactUs/>}/>
        <Route path="/history" render={()=><TestHistory/>}/>
        <Route path="/login" render={()=><LogIn/>}/>
      </BrowserRouter>
    );
  }
}

export default App;
