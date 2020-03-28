import React from "react";
import ReactDOM from "react-dom";
import { createStore } from "redux";
import { Provider } from "redux-thunk";
import thunk from "redux-thunk";
import "./index.css";
import App from "./App";
import rootReducer from "./../src/reducers/rootReducers";

const store = createStore(rootReducer);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);

serviceWorker.unregister();
