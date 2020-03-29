import * as actionTypes from "./../actions/actionTypes";

const initialState = {
  code: ""
};
const editCodeReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.EDIT_CODE:
      return Object.assign({}, state, {
        code: action.code
      });
    default:
      return state;
  }
};

export default editCodeReducer;
