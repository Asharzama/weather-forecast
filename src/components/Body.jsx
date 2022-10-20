import React, { useEffect, useState, useContext } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCloud,
  faCloudRain,
  faCompass,
  faDroplet,
  faLocationDot,
  faWind,
} from "@fortawesome/free-solid-svg-icons";
import "./Body.css";
import { placeContext } from "../App";

const Body = () => {
  const { city } = useContext(placeContext);
  const [data, setData] = useState({});
  useEffect(() => {
    fetch(
      `http://api.weatherstack.com/current?access_key=f5edcfe2a1ff385107f0a0551f07596d&query=${city}`
    )
      .then((response) => response.json())
      .then((data) => {
        setData(data);
      });
  }, [city]);

  if (city === "" || data.error) {
    return (
      <div className="opening">World Weather report at your fingertip.</div>
    );
  } else {
    return (
      <div className="Body">
        <div className="weather-description">
          <div className="city">
            <FontAwesomeIcon icon={faLocationDot} /> {data?.request.query}
          </div>
          {data?.current?.weather_descriptions[0]}
        </div>

        <div>
          <FontAwesomeIcon icon={faCloud} />{" "}
          {data?.current.cloudcover === 0
            ? "Clear"
            : data?.current.cloudcover > 0 && data?.current.cloudcover <= 12
            ? "Few Clouds"
            : data?.current.cloudcover > 12 && data?.current.cloudcover <= 25
            ? "Scattered Clouds"
            : data?.current.cloudcover > 25 && data?.current.cloudcover <= 50
            ? "Partly Cloudy"
            : data?.current.cloudcover > 50 && data?.current.cloudcover <= 75
            ? "Most Cloudy"
            : "Overcast"}
        </div>

        <div className="temperature">
          <div className="main-temp">{data?.current?.temperature}°C</div>
          <div className="sec-temp">Feels like {data?.current.feelslike}°C</div>
        </div>

        <div>
          <div>
            <FontAwesomeIcon icon={faWind} /> {data?.current.wind_speed}km/h
          </div>
          <div>
            <FontAwesomeIcon icon={faCompass} /> {data?.current.wind_degree}°{" "}
            {data?.current.wind_dir}
          </div>
        </div>

        <div>
          <div>
            <FontAwesomeIcon icon={faDroplet} /> {data?.current?.humidity}%
          </div>
          <div>
            <FontAwesomeIcon icon={faCloudRain} /> {data?.current.precip}%
          </div>
        </div>
      </div>
    );
  }
};

export default Body;
