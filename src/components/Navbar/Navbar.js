import React, { Component } from "react";
import { connect } from "react-redux";
import * as action from "./../../actions/index";
import "./Navbar.css";
import publish_icon from "./../../../public/publish_icon.png";
import plus_icon from "./../../../public/plus_icon.png";
class Navbar extends Component {
  constructor(props) {
    super(props);
  }
  onClickPublish = () => {
    console.log("publish button click");
  };

  onClickNewTab = () => {
    console.log("New playground clicked");
  };
  render() {
    return (
      <div className="navbar">
        <div className="navbar-item navbar-heading">ChatBot Playground</div>
        <div className="navbar-item">
          <button className="navbar-button" onClick={this.onClickPublish}>
            <img className="navbar-header-img" src={publish_icon}></img>
            Publish
          </button>
        </div>
        <div className="navbar-item">
          <button className="navbar-button" onClick={this.onClickNewTab}>
            <img className="navbar-header-img" src={plus_icon}></img>
            New Playground
          </button>
        </div>
      </div>
    );
  }
}

const mapStateToProps = dispatch => {
  return {
    code: state.code
  };
};

const mapDispatchToProps = dispatch => {
  return {
    editCodeEditor: code => dispatch(action.editCodeEditor(code))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Navbar);
