import React from "react";
import { useState } from "react";
import "./Displaytemperature.css";

export default function Displaytemperature(props) {
  const [unit, setUnit] = useState("metric");

  function convertF(event) {
    event.preventDefault();
    setUnit("imperial");
  }

  function convertC(event) {
    event.preventDefault();
    setUnit("metric");
  }
  if (unit === "metric") {
    return (
      <div className="Displaytemperature">
        <div className="maintemperature d-inline-block">
          <span className="mainT">{props.temperature}° </span>{" "}
          <span className="mainunit">
            {" "}
            <strong> C | </strong>
            <a href="/" onClick={convertF}>
              F{" "}
            </a>
          </span>
        </div>
      </div>
    );
  } else {
    let Ftemperature = Math.round((props.temperature * 9) / 5 + 32);
    return (
      <div className="Displaytemperature">
        <div className="maintemperature d-inline-block">
          <span className="mainT">{Ftemperature}° </span>{" "}
          <span className="mainunit">
            {" "}
            <a href="/" onClick={convertC}>
              C{" "}
            </a>{" "}
            | <strong>F</strong>
          </span>
        </div>
      </div>
    );
  }
}
