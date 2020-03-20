import React, { Component } from "react";
import { render } from "react-dom";
import MonacoEditor from "react-monaco-editor";
export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      code: "//tyep your code here"
    };
  }

  render() {
    const code = this.state.code;
    const options = {
      selectOnLineNumbers: true
    };

    editorDidMount = (editor, moncao) => {
      console.log("editorDidMount", editor);
      editor.focus();
    };

    onChange = () => {
      console.log("onChange", newValue, e);
    };
    return (
      <div>
        <MonacoEditor
          width="800"
          height="600"
          language="javascript"
          theme="vs-dark"
          value={code}
          options={options}
          onChange={this.onChange}
          editorDidMount={this.editorDidMount}
        />
      </div>
    );
  }
}

render(<App />, document.getElementById("root"));
