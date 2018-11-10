import React, { Component } from "react";
import Banner from "../images/TT Banner.png";
import coverArt from "../images/TTcoverArt.png";

class Media extends Component {
  constructor() {
    super();

    this.state = {
      playing: false
    };
  }

  render() {
    return (
      <div className="media">
        <img src={Banner} className="banner" alt="yoyoyoy" />;
        <div className="podcast">
          <a href="/bitches">
            <div className="embedded1">
              <img src={coverArt} className="coverart1" alt="cover art1" />
              <div className="embedded1header">
                Episode 1 - The Introduction
              </div>
              <div className="embedded1runtime">
                <span className="color">22:51</span>
              </div>
            </div>
          </a>
          <a href="/bitches">
            <div className="embedded2">
              <img src={coverArt} className="coverart2" alt="cover art2" />
              <div className="embedded2header">
                Episode 2 - Daily Dreamer v.1
              </div>
              <div className="embedded2runtime">
                <span className="color">23:43</span>
              </div>
            </div>
          </a>
          <a href="/bitches">
            <div className="embedded3">
              <img src={coverArt} className="coverart3" alt="cover art3" />
              <div className="embedded1header">
                Episode 3 - Daily Dreamer v.2
              </div>
              <div className="embedded1runtime">
                <span className="color">21:33</span>
              </div>
            </div>
          </a>
        </div>
      </div>
    );
  }
}

export default Media;
