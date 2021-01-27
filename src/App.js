import React, {Component} from "react";
import {BrowserRouter, Route} from "react-router-dom";
import Home from "./Views/Home";
import ContactUs from "./Views/ContactUs";
import TestHistory from "./Views/TestHistory";

class App extends Component {

  render() {
    return (
      <BrowserRouter>
          <Route path="/home" render={()=><Home/>}/>
          <Route path="/contact" render={()=><ContactUs/>}/>
          <Route path="/history" render={()=><TestHistory/>}/>
      </BrowserRouter>
    );
  }
}

export default App;
