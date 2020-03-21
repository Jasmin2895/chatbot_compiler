import React, { Component } from "react";
import { ChatBot } from "./components/ChatBot/ChatBot";
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
