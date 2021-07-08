import React from "react";

const CityName = ({ weatherData }) => {
  return (
    <div>
      <h3 style={{ display: "block", textAlign: "center" }}>
        {weatherData.city.name}
      </h3>
    </div>
  );
};

export default CityName;
