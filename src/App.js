import React from "react";
import Search from "./Search.js";
import Footnote from "./Footnote.js";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

function App() {
  return (
    <div className="App">
      <div className="container maincontent">
        <Search defaultcity="Manila" />
        <Footnote />
      </div>
    </div>
  );
}

export default App;
