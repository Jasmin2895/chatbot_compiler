import { createStore } from "redux";
import rootReducer from "../reducers";

export default function configureStore(initailState) {
  return createStore(rootReducer, initailState);
}
