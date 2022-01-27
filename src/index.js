import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import createSagaMiddleware from "@redux-saga/core";
import { createStore, applyMiddleware } from "redux"; //import store
import { Provider } from "react-redux";
import { rootSaga } from "./Components/Saga";
const sagaMiddleware = createSagaMiddleware();

//create reducer
function reducer(state = { deatailsData: [], counter: 0 }, actions) {
  console.log(state);
  switch (actions.type) {
    case "ADD":
      return {
        ...state,
        deatailsData: [...state.deatailsData, actions.payload],
      };
    case "INC":
      return { ...state, count: state.counter + actions.payload };
    case "DEC":
      return { ...state, count: state.counter - actions.payload };

    default:
      return state;
  }
  // console.log(state)
  // return state;
}
const store = createStore(
  reducer,
  applyMiddleware(sagaMiddleware),
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

sagaMiddleware.run(rootSaga);
ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
