import React from "react";
import "./Weather.css";
export default function Weather() {
  return (
    <div className="Weather">
      <div>
        <div className="section1">
          <div className="row">
            <div className="col-md-8">
              <div className="row">
                <div className="col-md">
                  <div className="maintemperature">
                    <span className="mainT">XX° </span>{" "}
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
                  <li className="firstlist"> Cloudy</li>
                  <li> H: xx° </li>
                  <li> L: xx°</li>
                </ul>
              </div>
            </div>
            <div className="col-md-4 citybox">
              <div className="row">
                <h1>City </h1>
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
