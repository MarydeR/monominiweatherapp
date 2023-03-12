import React from "react";
import "./Timestampinfo.css";
export default function Timestampinfo(props) {
  let fulldate = new Date(props.timestamp * 1000);

  let weekdays = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednes",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  let months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  let day = fulldate.getDay();
  let numbermonth = fulldate.getMonth();
  let month = months[numbermonth];
  let date = fulldate.getDate();
  let year = fulldate.getFullYear();
  let hour = fulldate.getHours();
  let min = fulldate.getMinutes();
  let sentencedate = `${date} ${month}, ${year}`;
  let sentencetime = `${hour}:${min}`;
  return (
    <ul className="Timestampinfo">
      <li className="firstlist">{sentencedate}</li>
      <li>{weekdays[day]}</li>
      <li>local time: {sentencetime}</li>
    </ul>
  );
}
