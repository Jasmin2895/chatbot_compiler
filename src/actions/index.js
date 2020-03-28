import * as actionTypes from "./actionTypes";

export const editCodeEditor = code => {
  console.log("changed code value", code);
  return {
    type: actionTypes.EDIT_CODE,
    code: code
  };
};
