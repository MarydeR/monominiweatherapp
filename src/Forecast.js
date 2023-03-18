import React from "react";
import { useState } from "react";
import axios from "axios";
import ForecastDay from "./ForecastDay.js";
import { Commet } from "react-loading-indicators";

import "./Forecast.css";

export default function Forecast(props) {
  const [loaded, setLoaded] = useState(false);
  let [forecast, setForecast] = useState(null);
  function getForecast(response) {
    setLoaded(true);
    console.log(response.data.daily);
    setForecast(response.data.daily);
  }

  if (loaded) {
    return (
      <div className="Forecast">
        <div className="row">
          <div className="col" key="index">
            <ForecastDay data={forecast[1]} />
          </div>
        </div>
      </div>
    );
  } else {
    let long = props.coordinates.longitude;
    let lat = props.coordinates.latitude;
    let apiURL = `https://api.shecodes.io/weather/v1/forecast?lat=${lat}&lon=${long}&key=2ec340bdbdo84acaf6ct2a055b44668d&units=metric`;
    axios.get(apiURL).then(getForecast);

    return (
      <div>
        <Commet color="#a4a4a4" size="medium" text="" textColor="" />
      </div>
    );
  }
}