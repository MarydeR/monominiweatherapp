import React from "react";
import Timestampinfo from "./Timestampinfo.js";
import "./Weather.css";
export default function Weather(props) {
  return (
    <div className="Weather">
      <div>
        <div className="section1">
          <div className="row">
            <div className="col">
              <div className="maintemperature d-inline-block">
                <span className="mainT">{props.data.temperature}° </span>{" "}
                <span className="mainunit"> C | F</span>
              </div>

              <div className="iconbox  d-inline-block">
                <img
                  src="http://shecodes-assets.s3.amazonaws.com/api/weather/icons/few-clouds-day.png"
                  alt="weatherIcon"
                ></img>
              </div>
            </div>
            <div className="col citybox">
              <h1>{props.data.city}</h1>
            </div>
          </div>

          <div className="row">
            <div className="col">
              {" "}
              <div className="row">
                <ul className="weatherdescription">
                  <li className="firstlist text-capitalize">
                    {" "}
                    {props.data.description}
                  </li>
                  <li> Humidity: {props.data.humidity}% </li>
                  <li> Wind Speed:{props.data.wind} m/s</li>
                </ul>
              </div>
            </div>
            <div className="col">
              <Timestampinfo timestamp={props.data.timestamp} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
