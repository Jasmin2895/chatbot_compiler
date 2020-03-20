import React, { Component } from "react";
import ReactDOM from "react-dom";

export default class App extends Component {
  constructor(props) {
    super(props);
    console.log(props);
  }
  render() {
    return (
      <div>
        <p>This is my new react App version 1.1</p>
        <div
          id="container"
          style={{ width: "800px", height: "600px", border: "1px solid #ccc" }}
        ></div>
        <script src="index.js"></script>
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById("root"));
