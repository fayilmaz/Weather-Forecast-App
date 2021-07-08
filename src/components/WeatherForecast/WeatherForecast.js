import React from "react";

const WeatherForecast = ({ children }) => {
  return <div style={{ display: "flex", flexWrap: "wrap" }}>{children}</div>;
};

export default WeatherForecast;
