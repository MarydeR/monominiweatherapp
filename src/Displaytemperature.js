import React from "react";
import "./Displaytemperature.css";

export default function Displaytemperature(props) {
  return (
    <div className="Displaytemperature">
      <div className="maintemperature d-inline-block">
        <span className="mainT">{props.temperature}° </span>{" "}
        <span className="mainunit">
          {" "}
          <strong> C </strong>
        </span>
      </div>
    </div>
  );
}
