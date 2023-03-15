import React, { useState, useEffect } from 'react';
import axios from 'axios';
import CityForecast from './CityForecast';

const cities = [
  { name: 'Reno', state: 'NV' },
  { name: 'Austin', state: 'TX' },
  { name: 'Tampa', state: 'FL' }
];

function WeatherForecast() {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const result = await axios.get('http://localhost:5015/weatherforecast');
      setData(result.data);
    };
    fetchData();
  }, []);

  return (
    <div>
      <h1>14-Day Weather Forecast</h1>
      {cities.map((city, index) => (
        <CityForecast key={index} city={city} data={data.filter(item => item.location === `${city.name},${city.state}`)} />
      ))}
    </div>
  );
}

export default WeatherForecast;
