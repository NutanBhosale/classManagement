import axios from "axios";
import { CREATE_USER, LOGIN_USER } from "./userTypes";
import { GET_ERRORS } from "../Error/errorTypes";

export const createUser = (user, history) => async (dispatch) => {
  console.log(user);
  try {
    const res = await axios.post(
      "http://localhost:8080/api/users/register",
      user
    );
    history.push("/SingIn");
    dispatch({
      type: GET_ERRORS,
      payload: {},
    });
  } catch (error) {
    console.log("ERROR :" + error.response.data);
    dispatch({
      type: GET_ERRORS,
      payload: error.response.data,
    });
  }
};

export const loginUser = (loginUser, history) => async (dispatch) => {
  console.log(loginUser);
  try {
    const res = await axios.post(
      "http://localhost:8080/api/users/login",
      loginUser
    );
    console.log("project: " + res.data.id);
    localStorage.setItem("id", res.data.id);
    localStorage.setItem("email", res.data.email);
    localStorage.setItem("username", res.data.username);
    history.push("/Home");
    dispatch({
      type: LOGIN_USER,
      payload: res.data,
    });
  } catch (error) {
    history.push("/SingIn");
    dispatch({
      type: GET_ERRORS,
      payload: error.response.data,
    });
  }
};
