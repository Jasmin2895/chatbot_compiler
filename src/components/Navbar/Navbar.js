import React, { Component } from "react";
import { connect } from "react-redux";
import "./Navbar.css";
import Modal from "./../Modal/Modal";
import { editCodeEditorAction } from "./../../actions/index";
import publish_icon from "./../../../public/publish_icon.png";
import plus_icon from "./../../../public/plus_icon.png";
class Navbar extends Component {
  constructor(props) {
    super(props);
    this.onClickNewTab = this.onClickNewTab.bind(this);
    this.onClickPublish = this.onClickPublish.bind(this);
    this.state = {
      code: ""
    };
  }

  onClickPublish = () => {
    console.log("publish button click");
  };

  onClickNewTab = () => {
    //erase the existing code and setup a new window,
    this.setState({
      show: !this.state.show
    });
    let newText = "";
    this.setState({
      code: "//Type your code here"
    });
    this.props.editCodeEditorAction("//Type your code here");
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

const mapStateToProps = state => {
  return {
    code: state.editCodeReducer.code
  };
};

const mapDispatchToProps = dispatch => {
  return {
    editCodeEditorAction: code => dispatch(editCodeEditorAction(code))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Navbar);
