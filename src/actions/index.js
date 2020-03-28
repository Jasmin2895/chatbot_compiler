import * as actionTypes from "./actionTypes";

export const editCodeEditor = code => {
  return {
    type: actionTypes.EDIT_CODE,
    code
  };
};
