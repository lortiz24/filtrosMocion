import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { AppPage } from "./pages/AppPage";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import { store } from "./store/store";
// import "../App.js";
ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <BrowserRouter>
      <Provider store={store}>
        <AppPage />
      </Provider>
    </BrowserRouter>
  </React.StrictMode>
);
