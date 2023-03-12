import React from "react";
import ReactAnimatedWeather from "react-animated-weather";
import "./Weathericon.css";

export default function Weathericon(props) {
  const iconmapping = {
    "clear-sky-day": "CLEAR_DAY",
    "clear-sky-night": "CLEAR_NIGHT",
    "few-clouds-day": "PARTLY_CLOUDY_DAY",
    "few-clouds-night": "PARTLY_CLOUDY_NIGHT",
    "scattered-clouds-day": "CLOUD",
    "scattered-clouds-night": "CLOUD",
    "broken-clouds-day": "CLOUD",
    "broken-clouds-night": "CLOUD",
    "shower-rain-day": "RAIN",
    "shower-rain-night": "RAIN",
    "rain-day": "RAIN",
    "rain-night": "RAIN",
    "thunderstorm-day": "SLEET",
    "thunderstorm-night": "SLEET",
    "snow-day": "SNOW",
    "snow-night": "SNOW",
    "mist-day": "FOG",
    "mist-night": "FOG",
  };
  return (
    <div className="Weathericon">
      <ReactAnimatedWeather
        icon={iconmapping[props.icon]}
        color={"grey"}
        size={70}
        animate={true}
      />
    </div>
  );
}
