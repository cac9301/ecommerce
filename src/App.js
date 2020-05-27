import React from "react";
import Header from "./components/Home/Header";
import Home from "./components/Home/Home";
import Login from "./components/login/Login"
import Footer from "./components/Home/Footer";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import NewAccount from "./components/login/NewAccount";
function App() {
  return (
    <>
      <Router>
        <Header />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/new-account" component={NewAccount} />
        </Switch>
        <Footer />
      </Router>
    </>
  );
}

export default App;
