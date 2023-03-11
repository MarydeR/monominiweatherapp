import React from "react";
import "./Weather.css";
export default function Weather(props) {
  return (
    <div className="Weather">
      <div>
        <div className="section1">
          <div className="row">
            <div className="col-md-8">
              <div className="row">
                <div className="col-md">
                  <div className="maintemperature">
                    <span className="mainT">{props.data.temperature}° </span>{" "}
                    <span className="mainunit"> C | F</span>
                  </div>
                </div>
                <div className="col-md iconbox">
                  <img
                    src="http://shecodes-assets.s3.amazonaws.com/api/weather/icons/few-clouds-day.png"
                    alt="weatherIcon"
                  ></img>
                </div>
              </div>
              <div className="row weatherdescription">
                <ul>
                  <li className="firstlist text-capitalize">
                    {" "}
                    {props.data.description}
                  </li>
                  <li> Humidity: {props.data.humidity}% </li>
                  <li> Wind Speed:{props.data.wind} m/s</li>
                </ul>
              </div>
            </div>
            <div className="col-md-4 citybox">
              <div className="row">
                <h1>{props.data.city}</h1>
              </div>
              <div className="row">
                <ul>
                  <li className="firstlist">Date</li>
                  <li>day</li>
                  <li>local time: hh:mm</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
