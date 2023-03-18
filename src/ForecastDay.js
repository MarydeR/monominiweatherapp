import React from "react";
import "./Forecast.css";

export default function ForecastDay(props) {
  let fulldate = new Date(props.data.time * 1000);
  let weekdayshort = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
  let weekday = weekdayshort[fulldate.getDay()];
  let max = Math.round(props.data.temperature.maximum);
  let min = Math.round(props.data.temperature.minimum);
  return (
    <div className="ForecasDay">
      <div className="Forecastweekday">{weekday}</div>
      <div className="Forecasticon">
        {" "}
        <img
          src={props.data.condition.icon_url}
          alt={props.data.condition.icon}
        />
      </div>
      <div>
        {" "}
        <span className="mintemp"> {max}°</span>{" "}
        <span className="maxtemp"> {min}°</span>
      </div>
    </div>
  );
}
