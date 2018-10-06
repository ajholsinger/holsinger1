import React, { Component } from "react";
import Header from "../src/components/header";
import Home from "../src/components/home";
import "./App.css";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <Home />
      </div>
    );
  }
}

export default App;
