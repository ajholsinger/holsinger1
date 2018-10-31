import React from "react";

const Porttt = () => (
  <div className="port-options">
    <button className="graphics-port-button" onClick={showGraphicsPortfolio}>
      Graphics
    </button>
    <button className="dev-port-button" onClick={showDevPortfolio}>
      Development
    </button>
    <button className="video-port-button" onclick={showVideoPortfolio}>
      Videos
    </button>
  </div>
);

export default Porttt;
