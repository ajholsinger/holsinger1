import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import About from "../src/components/about";
import Header from "../src/components/header";
import Home from "../src/components/home";
import Portfolio from "../src/components/portfolio";
import Services from "../src/components/services";
import "./App.css";

const App = () => (
  <Router>
    <main>
      <Header />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/about" component={About} />
        <Route exact path="/portfolio" component={Portfolio} />
        <Route exact path="/services" component={Services} />
      </Switch>
    </main>
  </Router>
);

export default App;
