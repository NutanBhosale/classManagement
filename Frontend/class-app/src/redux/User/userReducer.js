import { CREATE_USER, LOGIN_USER } from "./userTypes";

const initialState = {
  user: {},
};

export default function (state = initialState, action) {
  switch (action.type) {
    case CREATE_USER:
      return { ...state, user: action.payload };

    case LOGIN_USER:
      return { ...state, user: action.payload };
    default:
      return state;
  }
}
