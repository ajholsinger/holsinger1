import React, { Component } from "react";
import logo from "../images/holsinger. logo teal.png";

class Header extends Component {
  constructor() {
    super();

    this.state = {
      showMenu: false
    };

    this.showMenu = this.showMenu.bind(this);
    this.closeMenu = this.closeMenu.bind(this);
  }

  showMenu(event) {
    event.preventDefault();

    this.setState({ showMenu: true }, () => {
      document.addEventListener("click", this.closeMenu);
    });
  }

  closeMenu() {
    this.setState({ showMenu: false }, () => {
      document.removeEventListener("click", this.closeMenu);
    });
  }

  render() {
    return (
      <div className="container-fluid header">
        <a href="/">
          <img className="logo" src={logo} alt="logo" />
        </a>

        <button className="dropdown-icon" onClick={this.showMenu}>
          <i className="material-icons nav">dehaze</i>
        </button>
        {this.state.showMenu ? (
          <div className="menu col-xs-12">
            <a href="/about" className="about-icon">
              <i className="material-icons Aicon">person</i>
            </a>

            <a href="/portfolio" className="port-icon">
              <i className="material-icons Picon">apps</i>
            </a>

            <a href="/media" className="media-icon">
              <i className="material-icons Micon">hearing</i>
            </a>

            <a href="/services" className="service-icon">
              <i className="material-icons Sicon">room_service</i>
            </a>

            <a href="/contact" className="contact-icon">
              <i className="material-icons Cicon">email</i>
            </a>
          </div>
        ) : null}
      </div>
    );
  }
}

export default Header;
