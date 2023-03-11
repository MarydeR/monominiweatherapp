import React from "react";
import Weather from "./Weather.js";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

function App() {
  return (
    <div className="App">
      <div className="container">
        <header className="App-header">Hello MonoMini Weather App</header>
        <Weather />
      </div>
    </div>
  );
}

export default App;
