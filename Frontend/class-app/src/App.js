import React from "react";
import logo from "./logo.svg";
import "./App.css";
import store from "./Store";
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./components/layouts/Header";
import Footer from "./components/layouts/Footer";
import Home from "./components/home/Home";
import { BrowserRouter as Router, Route } from "react-router-dom";

import SingIn from "./components/User/SingIn";
import { Provider } from "react-redux";
import SingUp from "./components/User/SingUp";

function App() {
  return (
    <Provider store={store}>
      <Router>
        <div className="App">
          <Header />

          <Route exact path="/home" component={Home} />
          <Route exact path="/signUp" component={SingUp} />
          <Route exact path="/singIn" component={SingIn} />
          <Footer />
        </div>
      </Router>
    </Provider>
  );
}

export default App;
