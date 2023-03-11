import React, { useState } from "react";
import axios from "axios";
import Weather from "./Weather.js";
import "./Search.css";
import { useState } from "react";

export default function Search() {
  let city = `Manila`;
  let apiURL = `https://api.shecodes.io/weather/v1/current?query=${city}&key=2ec340bdbdo84acaf6ct2a055b44668d&units=metric`;

  return (
    <div className="Search">
      <div className="mainsection border border-2 rounded-4">
        <Weather />
        <div className="row">
          <form className="row">
            <div className="col-9">
              <input
                type="text"
                className="form-control"
                placeholder="Enter City"
                autocomplete="off"
              />
            </div>
            <div className="col">
              <button type="submit" className="btn btn-secondary mb-2">
                Search
              </button>
            </div>
          </form>
        </div>
      </div>
      <footer>
        <a
          href="https://github.com/MarydeR/monominiweatherapp"
          target="_blank"
          rel="noreferrer noopener"
        >
          OpenSourceCode
        </a>{" "}
        by MDR hosted in{" "}
        <a
          href="https://quiet-concha-b2732c.netlify.app/"
          target="_blank"
          rel="noreferrer noopener"
        >
          Netlify
        </a>{" "}
      </footer>
    </div>
  );
}
