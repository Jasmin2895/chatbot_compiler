import React, { Component } from "React";
import ReactDOM from "react-dom";

export default class App extends Component {
  render() {
    return <p>This is my new react App version 1.2</p>;
  }
}

ReactDOM.render(<App />, document.getElementById("root"));
