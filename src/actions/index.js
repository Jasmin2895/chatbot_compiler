import * as actionTypes from "./actionTypes";

export const editCodeEditorAction = code => ({
  type: actionTypes.EDIT_CODE,
  code
});
