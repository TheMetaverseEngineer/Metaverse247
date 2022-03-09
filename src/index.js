import React from "react";
import ReactDOM from "react-dom";
import "./styles/index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
// import { MoralisProvider } from "react-moralis";
import { BrowserRouter } from "react-router-dom";
// import Moralis from "moralis";
import store from "./app/store";
import { Provider } from "react-redux";

// const APP_ID = process.env.REACT_APP_MORALIS_APPLICATION_ID;
// const SERVER_URL = process.env.REACT_APP_MORALIS_SERVER_URL;

// Moralis.start({ serverUrl: SERVER_URL, appId: APP_ID });

ReactDOM.render(
  <React.StrictMode>
    {/* <MoralisProvider appId={APP_ID} serverUrl={SERVER_URL}> */}
    <Provider store={store}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </Provider>
    {/* </MoralisProvider> */}
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
