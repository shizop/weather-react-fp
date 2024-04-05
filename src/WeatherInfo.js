import React from "react";

import FormattedDate from "./FormattedDate";

export default function WeatherInfo(props) {
  return (
    <div className="Weather-info">
      <h1>{props.data.city}</h1>
      <ul className="mb-4">
        <li>
          <FormattedDate date={props.data.date} />
        </li>
        <li className="text-capitalize">{props.data.description}</li>
      </ul>
      <div className="row">
        <div className="col-7">
          <img
            src={props.data.iconUrl}
            alt={props.data.description}
            width={70}
          />
          <span className="temperature">
            {Math.round(props.data.temperature)}
          </span>
          <span className="unit">°C</span>
        </div>
        <div className="col-5">
          <ul>
            <li>Humidity: {props.data.humidity} %</li>
            <li>Wind: {props.data.wind} km/h</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
