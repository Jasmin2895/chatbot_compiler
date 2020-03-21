import React, { Component } from "react";
import MonacoEditor from "react-monaco-editor";
import { ChatBot } from "./components/ChatBot";
import "./App.css";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      code: "//type your code"
    };
  }

  render() {
    return (
      <div class="chatbot-compiler">
        <ChatBot />
      </div>
    );
  }
}

export default App;
