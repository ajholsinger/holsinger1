import React, { Component } from "react";

class Portfolio extends Component {
  constructor() {
    super();

    this.state = {
      showPortfolio: false
    };
  }

  showPortfolio(event) {
    event.preventDefault();
    this.setState({ showPortfolio: true });
  }

  render() {
    return (
      <div className="portfolio">
        <div className="portheading">Portfolio</div>
        <div className="port-options">
          <button className="graphics-port-button" onClick={this.showPortfolio}>
            Graphics
          </button>
          <button className="dev-port-button" onClick={this.showPortfolio}>
            Development
          </button>
          <button className="video-port-button" onclick={this.showPortfolio}>
            Videos
          </button>
        </div>

        <div className="port-content" id="port-content">
          <div className="graph-port">
            <div className="graph-header">Web Development</div>
            <div className="graph-portfolio-content">DEVELOPMENT</div>
          </div>
          <div className="dev-port">
            <div className="dev-header">Web Development</div>
            <div className="dev-portfolio-content">DEVELOPMENT</div>
          </div>
        </div>
      </div>
    );
  }
}

export default Portfolio;
