function WeatherForm({ city, setCity, submitWeatherForm }) {
  return (
    <form className="search-form" onSubmit={submitWeatherForm}>

      <input
        type="text"
        placeholder="Enter city name..."
        value={city}
        onChange={(e) => setCity(e.target.value)}
      />

      <button type="submit">
        Search
      </button>

    </form>
  );
}

export default WeatherForm;