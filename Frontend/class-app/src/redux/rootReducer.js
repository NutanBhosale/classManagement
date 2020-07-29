import { combineReducers } from "redux";
import userReducer from "./User/userReducer";
import errorReducer from "./Error/errorReducer";

export default combineReducers({
  user: userReducer,
  errors: errorReducer,
});
