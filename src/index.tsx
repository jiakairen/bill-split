import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./components/App";
import Signup from "./components/authentication/Signup";
import Login from "./components/authentication/Login";
import reportWebVitals from "./reportWebVitals";
import { createClient } from "@supabase/supabase-js";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

const supabase = createClient(
  `${process.env.REACT_APP_PROJECT_URL}`,
  `${process.env.REACT_APP_PROJECT_ANON_KEY}`
);

async function getCountries() {
  const countries = await supabase.from("countries").select();
  console.log(countries);
}

// getCountries();

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

root.render(
  <Router>
    <Routes>
      <Route path="/signup" element={<Signup />} />
      <Route path="/" element={<Login />} />
    </Routes>
  </Router>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
