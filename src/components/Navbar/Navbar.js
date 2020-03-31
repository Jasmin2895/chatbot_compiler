import React, { Component } from "react";
import { connect } from "react-redux";
import "./Navbar.css";
import { Button, Modal, ModalBody, ModalHeader } from "shards-react";
import { editCodeEditorAction } from "./../../actions/index";
import publish_icon from "./../../../public/publish_icon.png";
import plus_icon from "./../../../public/plus_icon.png";
import { Nav, NavItem, NavLink } from "shards-react";
class Navbar extends Component {
  constructor(props) {
    super(props);
    this.onClickNewTab = this.onClickNewTab.bind(this);
    this.onClickPublish = this.onClickPublish.bind(this);
    this.state = {
      code: "",
      open: false
    };
  }

  toggle = () => {
    this.setState({
      open: !this.state.open
    });
  };
  toggleClose = () => {
    this.setState({
      open: !this.state.open
    });
  };

  onClickPublish = () => {
    console.log("publish button click");
  };

  onClickNewTab = () => {
    //erase the existing code and setup a new window,
    this.setState({
      show: !this.state.show,
      open: true
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
        <Nav>
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
        </Nav>
        <Modal open={this.state.open} toggle={this.toggle}>
          <ModalHeader>Header</ModalHeader>
          <ModalBody>👋 Hello there!</ModalBody>
          <Button onClick={this.toggle}>Small Modal!</Button>
        </Modal>
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
