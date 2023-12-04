import { useState } from 'react';
import './App.css';
import { fetchWeather } from './api/FetchWeather';

function App() {

  const [city, setCity] = useState('');
  const [weather, setWeather] = useState('');

  const search = async(event) => {
    if(event.key === 'Enter'){
      const data = await fetchWeather(city);
      setWeather(data);

      setCity('');
    }
  }


  return (
    <div className='main-container'>
      <input
      type='text'
      className='search'
      placeholder='Search...'
      value={city}
      onChange={(event)=>setCity(event.target.value)}
      onKeyPress={search}
      />
      {weather.main && (
        <div className='city'>
          <h2 className='city-name'>
            <span>
              {weather.name}
            </span>
            <sup>
              {weather.sys.country}
            </sup>
          </h2>
          <h2 className='city-temp'>
            {Math.round(weather.main.temp)}
            <sup>&deg;C</sup>
          </h2>
          <div className='info'>
            <img className='city-icon' src={`https://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`} alt={weather.weather[0].description}/>
            <p className=''>
              {weather.weather[0].description}
            </p>
          </div>
        </div>
      )}
    </div>
  );
}

export default App;
