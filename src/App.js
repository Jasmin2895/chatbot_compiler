import React, { Component } from "react";
import ChatBot from "./components/ChatBot/ChatBot";
import Navbar from "./components/Navbar/Navbar";
import Modal from "./components/Modal/Modal";
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
        <Modal />
      </div>
    );
  }
}

export default App;
