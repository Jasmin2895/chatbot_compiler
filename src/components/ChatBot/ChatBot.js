import React, { Component } from "react";
import { connect } from "react-redux";
import * as action from "./../../actions/index";
import MonacoEditor from "react-monaco-editor";
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
    console.log("editorDidMount", editor);
    editor.focus();
  }
  onChange(newValue, e) {
    this.setState({
      code: newValue
    });
    console.log("onChange", newValue);
    this.props.editCodeEditor(newValue);
  }
  render() {
    console.log("editor code", this.state.code);
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
  console.log("mapStateToProps", state);
  return {
    code: state.code
  };
};

const mapDispatchProps = dispatch => {
  return {
    editCodeEditor: code => dispatch(action.editCodeEditor(code))
  };
};

export default connect(mapStateToProps, mapDispatchProps)(ChatBot);
