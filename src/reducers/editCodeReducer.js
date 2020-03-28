import * as actionTypes from "./../actions/actionTypes";

export default (state = [], action) => {
  switch (action.type) {
    case actionTypes.EDIT_CODE:
      return [...state, { text: "This is a test string" }];
    default:
      return state;
  }
};
