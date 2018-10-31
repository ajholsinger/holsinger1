import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import devPortfolio from "./portfolio/devPortfolio";
import graphicsPortfolio from "./portfolio/graphicsPortfolio";
import videoPortfolio from "./portfolio/videoPortfolio";

const Main = () => (
  <Router>
    <main>
      <Switch>
        <Route exact path="/" component={devPortfolio} />
        <Route exact path="/webdev-port" component={devPortfolio} />
        <Route exact path="/graphics-port" component={graphicsPortfolio} />
        <Route exact path="/videos-port" component={videoPortfolio} />
      </Switch>
    </main>
  </Router>
);

export default Main;
