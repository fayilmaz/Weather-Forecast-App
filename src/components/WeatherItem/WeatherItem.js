import React from "react";

const WeatherItem = ({ item }) => {
  return (
    <div style={{ display: "inline-block", margin: "10px" }}>
      <p>{item.dt_txt}</p>
      <p>temp: {Math.floor(item.main.temp)} °C</p>
      <p>weather: {item.weather[0].main}</p>
      <img
        src={`http://openweathermap.org/img/wn/${item.weather[0].icon}@2x.png`}
        alt="weather-icon"
      />
    </div>
  );
};

export default WeatherItem;
