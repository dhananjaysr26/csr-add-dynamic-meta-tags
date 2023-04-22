import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route path={`/`} element={<App />} />
        <Route path={`/:postId`} element={<App />} />
      </Routes>
    </Router>
  </React.StrictMode>
);

reportWebVitals();
