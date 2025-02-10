import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import store from "./store/store.jsx";
import { Provider } from "react-redux";

import "./index.css";
import App from "./App.jsx";

const root = createRoot(document.getElementById("root"));

root.render(
  <StrictMode>
    {/*<Provider store={store}>*/}
    {/*  <App />*/}
    {/*</Provider>*/}
    <App />
  </StrictMode>,
);
