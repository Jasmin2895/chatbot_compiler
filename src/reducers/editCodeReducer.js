import * as actionTypes from "./../actions/actionTypes";

export default (state = [], action) => {
  console.log("reducer", state, action);
  switch (action.type) {
    case actionTypes.EDIT_CODE:
      return action.code;
    default:
      return state;
  }
};
