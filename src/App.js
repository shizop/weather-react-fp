import React from "react";
import Weather from "./Weather";

import "./App.css";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <Weather />
        <footer>
          This project was coded by
          <a href="https://github.com/shizop"> Syaibatul </a> and is
          <a href="https://github.com/shizop/weather-react-fp">
            {" "}
            open sourced on Github
          </a>
        </footer>
      </div>
    </div>
  );
}
