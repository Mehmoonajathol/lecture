import axios from "axios";
import { useEffect, useState } from "react";
import Navbar from "./Navbar";
import WeatherForm from "./WeatherForm";
import Footer from "./Footer";
import "./App.css";
import "./Navbar.css";

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
    <div className="app">

      {/* Navbar */}
      <Navbar />

      {/* Weather Section */}
      <main className="weather-container" id="weather">

        <h1 className="hero-title">
          Weather App
        </h1>

        <p className="hero-description">
          Check the current weather of any city around the world.
        </p>

        {/* Search Form */}
        <WeatherForm
          city={city}
          setCity={setCity}
          submitWeatherForm={submitWeatherForm}
        />

        {/* Weather Card */}
        <div className="weather-card">

          <div className="weather-icon">
            ☀️
          </div>

          <h2 className="city-name">
            {weatherInfo.cityName}
          </h2>

          <p className="state-name">
            📍 {weatherInfo.state}
          </p>

          <div className="temperature">
            {weatherInfo.tempCelcius}°C
          </div>

          <div className="weather-details">

            <div className="weather-detail">
              <span>🌡 Temperature</span>

              <strong>
                {weatherInfo.tempCelcius}°C
              </strong>
            </div>

            <div className="weather-detail">
              <span>💨 Wind Speed</span>

              <strong>
                {weatherInfo.windSpeed} km/h
              </strong>
            </div>

          </div>

        </div>

      </main>

      {/* About Section */}
      <section id="about" className="about-section">

        <h2>About Weatherly</h2>

        <p>
          Weatherly is a simple and modern weather application
          that helps you check the current weather of different cities.
        </p>

      </section>

      {/* Footer */}
      <Footer />

    </div>
  );
}

export default App;