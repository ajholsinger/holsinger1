import React from "react";

const Services = () => (
  <div className="container-fluid services">
    <div className="serviceHeading">Services</div>
    <div className="development-services">
      <div className="dev-header">Web Development</div>
      <div className="dev-skills1">
        <div>Personal Sites</div>
        <div>Portfolios</div>
        <div>Blogs</div>
        <div>Site Cleanup</div>
        <div>Site Refresh</div>
      </div>
      <div className="dev-skills2">
        <div>Business Sites</div>
        <div>Database Integration</div>
        <div>
          <span className="color">Ecommerce</span>
        </div>
        <div>Login Systems</div>
        <div>Server Config</div>
      </div>
    </div>

    <div className="graphic-services">
      <div className="graphic-header">Graphic Design</div>
      <div className="graphic-skills1">
        <div>Web Design</div>
        <div>Logos</div>
        <div>Banners</div>
        <div>
          <span className="color">Business Cards</span>
        </div>
        <div>Backgrounds</div>
      </div>
      <div className="graphic-skills2">
        <div>Characters</div>
        <div>Cover Art</div>
        <div>Photo Editing</div>
        <div>Profile Pictures</div>
        <div>Color Correction</div>
      </div>
    </div>

    <div className="video-services">
      <div className="video-header">Videography</div>
      <div className="video-skills1">
        <div>Promos</div>
        <div>Commercials</div>
        <div>Vlogs</div>
        <div>Weddings</div>
        <div>Documentaries</div>
      </div>
      <div className="video-skills2">
        <div>Edits</div>
        <div>Intros</div>
        <div>
          <span className="color">Hype Videos</span>
        </div>
        <div>Real Estate</div>
        <div>Music Videos</div>
      </div>
    </div>
  </div>
);

export default Services;
