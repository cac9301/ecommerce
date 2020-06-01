import React from "react";
import Header from "./components/Home/Header";
import Home from "./components/Home/Home";
import ProductView from "./components/ProductsView/ProductView";
import ShopingView from "./components/ShopingCartView/ShopinView";
import Login from "./components/login/Login";
import Footer from "./components/Home/Footer";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import NewAccount from "./components/login/NewAccount";

import ShopingState from "./context/ShopingCart/ShopingCartState";

function App() {
  return (
    <>
      <ShopingState>
        <Router>
          <Header />
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/login" component={Login} />
            <Route exact path="/view-cart" component={ShopingView} />
            <Route exact path="/productview/:id" component={ProductView} />
            <Route exact path="/new-account" component={NewAccount} />
          </Switch>
          <Footer />
        </Router>
      </ShopingState>
    </>
  );
}

export default App;
