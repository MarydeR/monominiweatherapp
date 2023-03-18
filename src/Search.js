import React, { useState } from "react";
import axios from "axios";
import Weather from "./Weather.js";
import Forecast from "./Forecast.js";
import { Commet } from "react-loading-indicators";
import "./Search.css";

export default function Search(props) {
  const [loaded, setLoaded] = useState(false);
  const [weatherdata, setWeatherdata] = useState({});
  const [city, setCity] = useState(props.defaultcity);
  function getTemperature(response) {
    setWeatherdata({
      city: response.data.city,
      temperature: Math.round(response.data.temperature.current),
      description: response.data.condition.description,
      humidity: Math.round(response.data.temperature.humidity),
      wind: Math.round(response.data.wind.speed),
      timestamp: response.data.time,
      icon_url: response.data.condition.icon_url,
      icon: response.data.condition.icon,
      coordinates: response.data.coordinates,
    });
    setLoaded(true);
  }
  function search() {
    let apiURL = `https://api.shecodes.io/weather/v1/current?query=${city}&key=2ec340bdbdo84acaf6ct2a055b44668d&units=metric`;
    axios.get(apiURL).then(getTemperature);
  }

  function handlesubmit(event) {
    event.preventDefault();
    search();
  }
  function citychange(event) {
    setCity(event.target.value);
  }
  if (loaded) {
    return (
      <div className="Search">
        <div className="mainsection border border-2 rounded-4">
          <Weather data={weatherdata} />
          <Forecast coordinates={weatherdata.coordinates} />
          <div className="row pt-3">
            <form className="row" onSubmit={handlesubmit}>
              <div className="col-9">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Enter City"
                  autoComplete="off"
                  onChange={citychange}
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
      </div>
    );
  } else {
    search();
    return (
      <div className="Search">
        <div className="mainsection border border-2 rounded-4">
          <div>
            <Commet color="#a4a4a4" size="medium" text="" textColor="" />
          </div>
        </div>
      </div>
    );
  }
}
