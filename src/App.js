import React, { Component } from "react";
import ReactDOM from "react-dom";

export default class App extends Component {
  constructor(props) {
    super(props);
    console.log(props);
  }
  render() {
    return <p>This is my new react App version 1.1</p>;
  }
}

ReactDOM.render(<App />, document.getElementById("root"));
