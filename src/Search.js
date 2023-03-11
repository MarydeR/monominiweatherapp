import React, { useState } from "react";
import axios from "axios";
import Weather from "./Weather.js";
import { Commet } from "react-loading-indicators";
import Footer from "./Footer.js";
import "./Search.css";

export default function Search() {
  function getTemperature(response) {}
  let defaultcity = "Manila";
  let [city, setCity] = useState(defaultcity);
  const [loaded, setLoaded] = useState(false);

  if (loaded) {
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
        <Footer />
      </div>
    );
  } else {
    let apiURL = `https://api.shecodes.io/weather/v1/current?query=${city}&key=2ec340bdbdo84acaf6ct2a055b44668d&units=metric`;
    axios.get(apiURL).then(getTemperature);

    return (
      <div>
        <div className="Search">
          <div className="mainsection border border-2 rounded-4">
            <div>
              <Commet color="#a4a4a4" size="medium" text="" textColor="" />
            </div>
          </div>
          <Footer />
        </div>{" "}
      </div>
    );
  }
}
