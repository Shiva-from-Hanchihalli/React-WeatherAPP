import React, { useState } from 'react';
import axios from 'axios';
import WeatherCard from './WeatherCard';
import './Weather.css';


const Weather = () => {
  const apiKey = import.meta.env.VITE_APP_KEY;
const apiBase = import.meta.env.VITE_APP_BASE;
  const [city, setCity] = useState('');
  const [weather, setWeather] = useState(null);
  const [error, setError] = useState('');

  const getWeather = async (e) => {
    e.preventDefault();
    setError('');
    setWeather(null); 

    try {
      const response = await axios.get(
        `${apiBase}weather?q=${city}&units=metric&APPID=${apiKey}`
      );
      if (response.status === 200) {
        setWeather(response.data);
      } else {
        setError('City not found');
      }
    } catch (err) {
      if (err.response) {
        if (err.response.status === 404) {
          setError('City not found');
        } else {
          setError('Error fetching weather data');
        }
      } else if (err.request) {
        setError('Network error. Please try again.');
      } else {
        setError('Error: ' + err.message);
      }
    }
  };

  return (
    <div className="weather-container">
      <h1 style={{marginBottom:'10%'}}>Weather App</h1>
      <form onSubmit={getWeather}>
        <input
          type="text"
          placeholder="Enter city"
          value={city}
          onChange={(e) => setCity(e.target.value)}
        />
        <button type="submit">Get Weather</button>
      </form>
      {error && <p className="error">{error}</p>}
      {weather && <WeatherCard weather={weather} />}
      
    </div>
    
  );
};

export default Weather;
