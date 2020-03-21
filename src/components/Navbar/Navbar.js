import React, { Component } from "react";
import { render } from "react-dom";
import "./Navbar.css";
export class Navbar extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div class="navbar">
        <a class="navbar-item active" href="#home">
          Home
        </a>
        <a class="navbar-item" href="#news">
          News
        </a>
        <a class="navbar-item" href="#contact">
          Contact
        </a>
        <a class="navbar-item" href="#about">
          About
        </a>
      </div>
    );
  }
}
