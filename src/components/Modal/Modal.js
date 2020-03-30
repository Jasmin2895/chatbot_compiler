import React, { Component } from "react";
import PropTypes from "prop-types";

export default class Modal extends Component {
  constructor(props) {
    super(props);
  }
  onClose = e => {
    this.props.onClose && this.props.onClose(e);
  };

  render() {
    if (!this.props.show) {
      return null;
    }
    return (
      <div className="modal" id="modal">
        <h2>Alert Modal</h2>
        <div className="content">{this.props.children}</div>
        <div className="actions">
          <button class="toggle-button" onClick={this.onClose}>
            close
          </button>
        </div>
      </div>
    );
  }
}

Modal.prototypes = {
  onClose: PropTypes.func.isRequired,
  show: PropTypes.func.isRequired
};
