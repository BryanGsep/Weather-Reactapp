import { useState, useEffect } from 'react';
import Search from './components/search/search';
import './App.css';
import CurrentWeather from './components/current-weather/current-weather';
import { WEATHER_API_URL, WEATHER_API_KEY } from './api';
import { ForecastWeather } from './components/forecast-weather/forecast-weather';

function App() {

  const [currentWeather, setCurrentWeather] = useState(null);
  const [forecastWeather, setForecastWeather] = useState(null)
  
  useEffect(() => {
    if (currentWeather !== null) {
      document.body.style.backgroundImage = `url(./images/${currentWeather.weather[0].icon}.png)`;
    } else {
      document.body.style.backgroundImage = "url(./images/01d.png)";
    };
  }, [currentWeather])

  const handleOnSearchChange = (searchData) => {
    const [lat, lon] = searchData.value.split(" ");
    const currentWeather =  fetch(`${WEATHER_API_URL}/weather?lat=${lat}&lon=${lon}&appid=${WEATHER_API_KEY}&units=metric`);
    const forecastWeather = fetch(`${WEATHER_API_URL}/forecast?lat=${lat}&lon=${lon}&appid=${WEATHER_API_KEY}&units=metric`);

    Promise.all([currentWeather, forecastWeather])
      .then( async (response) => {
        const weatherResponse = await response[0].json();
        const forecastResponse = await response[1].json();
        
        setCurrentWeather({city: searchData.label, ...weatherResponse});
        setForecastWeather({meta: searchData.label, ...forecastResponse});
      })
      .catch(err => console.error(err));
  }

  console.log(currentWeather)
  console.log(forecastWeather)

  return (
    <div className="container">
      <Search onSearchChange={handleOnSearchChange}/>
      {currentWeather && <CurrentWeather data={currentWeather}/>}
      {forecastWeather && <ForecastWeather data={forecastWeather}/>}
    </div>
  );
}

export default App;
