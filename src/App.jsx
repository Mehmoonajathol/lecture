
import axios from "axios";
import { useEffect, useState } from "react";
import Navbar from "./Navbar";
import WeatherForm from "./WeatherForm";
import Footer from "./Footer";
import "./App.css";
function App() {
  const [weatherInfo, setWeatherInfo] = useState({
    tempCelcius: 0,
    windSpeed: 0,
    cityName: "",
    state: "",
  });

  const [city, setCity] = useState("");

  useEffect(() => {
    async function getWeather() {
      try {
        const res = await axios.get(
          "https://p2pclouds.up.railway.app/v1/learn/weather?city=lahore"
        );

        setWeatherInfo({
          tempCelcius: res.data.current.temp_c,
          windSpeed: res.data.current.wind_kph,
          cityName: res.data.location.name,
          state: res.data.location.region,
        });
      } catch (err) {
        console.log(err);
      }
    }

    getWeather();
  }, []);

  async function submitWeatherForm(e) {
    e.preventDefault();

    if (!city.trim()) {
      alert("Please enter a city name!");
      return;
    }

    try {
      const res = await axios.get(
        `https://p2pclouds.up.railway.app/v1/learn/weather?city=${city}`
      );

      setWeatherInfo({
        tempCelcius: res.data.current.temp_c,
        windSpeed: res.data.current.wind_kph,
        cityName: res.data.location.name,
        state: res.data.location.region,
      });

      setCity("");
    } catch (err) {
      console.log(err);
      alert("City not found!");
    }
  }

  return (
    <div className="container">
      <Navbar userName={"Mehmoona"}
      courseName={"web B18"}/>
      <WeatherForm/>
      <Footer/>
      <h1>🌤 Weather App</h1>

      <form onSubmit={submitWeatherForm}>
        <input
          type="text"
          placeholder="Enter City Name"
          value={city}
          onChange={(e) => setCity(e.target.value)}
        />

        <button type="submit">Search</button>
      </form>

      <div className="weather-card">
        <h1 className="bg-black-900">{weatherInfo.cityName}</h1>

        <h2>{weatherInfo.cityName}</h2>

        <h3>📍 State: {weatherInfo.state}</h3>

        <h3>🌡 Temperature: {weatherInfo.tempCelcius}°C</h3>

        <h3>💨 Wind Speed: {weatherInfo.windSpeed} km/h</h3>
      </div>
    </div>
  );
}

export default App;