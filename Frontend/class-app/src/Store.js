import { createStore, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk"; // Middleware between to dispatch and Sotre
import rootReducer from "./redux/rootReducer";

const intialState = {};
const middleware = [thunk]; // Middleware between to dispatch and Sotre

let store;

if (window.navigator.userAgent.includes("Chrome")) {
  store = createStore(
    rootReducer,
    intialState,
    compose(
      applyMiddleware(...middleware),
      window.__REDUX_DEVTOOLS_EXTENSION__ &&
        window.__REDUX_DEVTOOLS_EXTENSION__()
    )
  );
} else {
  store = createStore(
    rootReducer,
    intialState,
    compose(applyMiddleware(...middleware))
  );
}

export default store;
