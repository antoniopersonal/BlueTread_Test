import React from 'react';
import './CityForecast.css';
function CityForecast({ city, data }) {
  const getConditionIcon = (condition) => {
    // You can add more condition mappings here
    switch (condition) {
      case 'Sunny':
        return 'fa-solid fa-sun';
      case 'Cloudy':
        return 'fa-solid fa-cloud';
      case 'Rainy':
        return 'fa-solid fa-cloud-rain';
      case 'Snowy':
        return 'fa-solid fa-snowflake';
      default:
        return 'fa-solid fa-question';
    }
  };

  const getHumidityIcon = (humidity) => {
    if (humidity >= 80) {
      return 'fa-solid fa-up-long fa-lg';
    }
    if (humidity >= 50) {
      return 'fa-solid fa-left-right fa-lg';
    }
    return 'fa-solid fa-down-long fa-lg';
  };

  return (
    <div>
      <h2>{city.name}, {city.state}</h2>
      <div className="forecast-card-container">
        {data.map((item, index) => (
          <div className="forecast-card" key={index}>
            <div className="forecast-card-header">
              <h3>{item.date}</h3>
              <p>{item.condition} <i className={getConditionIcon(item.condition)}></i></p>
            </div>
            <div className="forecast-card-body">
              
              <p>Humidity: {item.humidity}% <i className={getHumidityIcon(item.humidity)}></i></p>
              <p>Temperature: {item.temperature}&deg;F</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default CityForecast;
