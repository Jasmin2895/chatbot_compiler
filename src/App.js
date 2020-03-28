import React, { Component } from "react";
import { ChatBot } from "./components/ChatBot/ChatBot";
import Navbar from "./components/Navbar/Navbar";
import "./App.css";

class App extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div class="chatbot-compiler">
        <Navbar />
        <ChatBot />
      </div>
    );
  }
}

export default App;
