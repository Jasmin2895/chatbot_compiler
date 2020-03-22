import React, { Component } from "react";
import { render } from "react-dom";
import "./Navbar.css";
import publish_icon from "./../../../public/publish_icon.png";
import plus_icon from "./../../../public/plus_icon.png";
export class Navbar extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className="navbar">
        <div className="navbar-item navbar-heading">ChatBot Playground</div>
        <div className="navbar-item">
          <div className="navbar-button">
            <img className="navbar-header-img" src={publish_icon}></img>
            Publish
          </div>
        </div>
        <div className="navbar-item">
          <div className="navbar-button">
            <img className="navbar-header-img" src={plus_icon}></img>
            New Playground
          </div>
        </div>
      </div>
    );
  }
}
