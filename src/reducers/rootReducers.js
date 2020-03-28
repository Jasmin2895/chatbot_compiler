import { changeEditorCode } from "./../actions/index";

const changeEditorFilter = (state = [], action) => {
  switch (action.type) {
    case "EDIT_CODE":
      return [...state, { text: "This is a dummy string" }];
  }
};
