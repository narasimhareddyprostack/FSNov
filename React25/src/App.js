import React from "react";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Pooja, Route, Switch } from "react-router-dom";
import Home from "./RoutingEx/Home";
import Services from "./RoutingEx/Services";
import Product from "./RoutingEx/Product";
import Contact from "./RoutingEx/Contact";

import Navbar from "./RoutingEx/Nav";

let App = () => {
  return (
    <>
      <Pooja>
        <Navbar />
        <Switch>
          
          <Route exact path="/Products" component={Product} />
          <Route path="/" component={Home} />

          <Route path="/Services" component={Services} />
          <Route path="/Contact" component={Contact} />
        </Switch>
      </Pooja>
    </>
  );
};

export default App;
