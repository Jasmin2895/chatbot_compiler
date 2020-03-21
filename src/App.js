import React, { Component } from "react";
import MonacoEditor from "react-monaco-editor";
import { ChatBot } from "./components/ChatBot";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      code: "//type your code"
    };
  }

  render() {
    return <ChatBot />;
  }
}

export default App;
