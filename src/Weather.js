import React from "react";
import "./Weather.css";
export default function Weather() {
  return (
    <div className="Weather">
      <div className="mainsection border border-2 rounded-4">
        <div className="section1">
          <div className="row">
            <div className="col-md-6">
              <div className="row">
                <div className="col-md-5">
                  <div className="maintemperature">
                    <span className="mainT">XX° </span>{" "}
                    <span className="mainunit"> C | F</span>
                  </div>
                </div>
                <div className="col-md-7 iconbox">
                  <img
                    src="http://shecodes-assets.s3.amazonaws.com/api/weather/icons/few-clouds-day.png"
                    alt="weatherIcon"
                  ></img>
                </div>
              </div>
              <div className="row weatherdescription">
                <ul>
                  <li> Cloudy</li>
                  <li> H: xx° </li>
                  <li> L: xx°</li>
                </ul>
              </div>
            </div>
            <div className="col-md-6 citybox">
              <div className="row">
                <h1>City </h1>
              </div>
              <div className="row">
                <ul>
                  <li>date</li>
                  <li>day</li>
                  <li>local time: hh:mm</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      <footer>
        <a
          href="https://github.com/MarydeR/monominiweatherapp"
          target="_blank"
          rel="noreferrer noopener"
        >
          OpenSource
        </a>{" "}
        by MDR
      </footer>
    </div>
  );
}
