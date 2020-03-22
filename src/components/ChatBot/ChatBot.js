import React, { Component } from "react";
import MonacoEditor from "react-monaco-editor";
export class ChatBot extends Component {
  constructor(props) {
    super(props);
    this.state = {
      code: "//Write your functions here and exceute in the chatbot"
    };
  }
  editorDidMount(editor, monaco) {
    console.log("editorDidMount", editor);
    editor.focus();
  }
  onChange(newValue, e) {
    console.log("onChange", newValue, e);
  }
  render() {
    const code = this.state.code;
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
        value={code}
        options={options}
        onChange={this.onChange}
        editorDidMount={this.editorDidMount}
      />
    );
  }
}
