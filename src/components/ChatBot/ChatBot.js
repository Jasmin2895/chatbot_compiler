import React, { Component } from "react";
import { connect } from "react-redux";
import { editCodeEditorAction } from "./../../actions/index";
import * as action from "./../../actions/index";
import MonacoEditor from "react-monaco-editor";
import { findDOMNode } from "react-dom";
class ChatBot extends Component {
  constructor(props) {
    super(props);
    this.editorDidMount = this.editorDidMount.bind(this);
    this.onChange = this.onChange.bind(this);
    this.state = {
      code: "//Write your functions here and exceute in the chatbot"
    };
  }
  editorDidMount(editor, monaco) {
    editor.focus();
  }
  // re render component when the state is updated
  componentWillReceiveProps = nextProps => {
    if (this.props.code !== nextProps.code) {
      this.setState({
        code: nextProps.code
      });
    }
  };
  onChange(newValue, e) {
    this.setState({
      code: newValue
    });
    this.props.editCodeEditorAction(newValue);
  }
  render() {
    const options = {
      selectOnLineNumbers: true,
      fontSize: 17,
      fontFamily: "Fira Code",
      fontLigatures: true,
      formatOnType: true
    };
    return (
      <MonacoEditor
        width="800"
        height="800"
        language="javascript"
        theme="vs-dark"
        value={this.state.code}
        options={options}
        onChange={this.onChange}
        editorDidMount={this.editorDidMount}
      />
    );
  }
}

const mapStateToProps = state => {
  return {
    code: state.editCodeReducer.code
  };
};

const mapDispatchProps = dispatch => ({
  editCodeEditorAction: code => dispatch(editCodeEditorAction(code))
});

export default connect(mapStateToProps, mapDispatchProps)(ChatBot);
