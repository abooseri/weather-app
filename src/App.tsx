import React, {FC ,useState, ChangeEvent} from 'react';
import Forecast from './components/Forecast'
import './App.css';
import { ICurrentForecast } from './Interface';

const App: React.FC = () => {
  const [searchLocation,setSearchLocation] = useState<string>('')
  const [data,setData] = useState([])
  const disableSearch = searchLocation.trim() === '';

function getData(e: React.KeyboardEvent) {

if(e.key === "Enter") {
  fetch(`https://api.openweathermap.org/data/2.5/weather?q=${searchLocation}&units=metric&exclude=hourly,minutely,alerts&appid=6cd3632b991b6081d510d1731fbb397e`).then(
    res => res.json()
  ).then(
    data => {
      
      setData(data)
     
     
    }
  )
}
}

console.log(data)

const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
  setSearchLocation(e.target.value)
}
  return (
    <div className="container">
      <div className="title">
  <h1>Weather App</h1>
  </div>
  <div className="search">
    
      <input type="text" 
      className="location" 
      placeholder="Enter a city or zip code.."
      onChange={ handleChange } 
      value={searchLocation}
      onKeyPress={getData}
      
      // disabled={disableSearch}
      />
     
    
  </div>
    </div>
  );
}

export default App;

// Left to Do:
// display all info for current weather
// display all info for 7day forecast 
// try and catch error blocks if invalid city or zip code or if blank
// components for display 
// css and make responsive
// add Comments and types
