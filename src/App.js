import React, { Component } from "react";
import MonacoEditor from "react-monaco-editor";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      code: "//type your code"
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
      selectOnLineNumbers: true
    };
    return (
      <MonacoEditor
        width="800"
        height="600"
        language="javascript"
        theme="vs-dark"
        value={code}
        fontFamily="Fira Code"
        fontLigatures={true}
        formatOnPaste="true"
        fontSize="20px"
        options={options}
        onChange={this.onChange}
        editorDidMount={this.editorDidMount}
      />
    );
  }
}

export default App;
