import React, {FC ,useState, ChangeEvent,useEffect} from 'react';
import Forecast from './components/Forecast'
import axios from 'axios';
import './App.css';
import { ICurrentForecast } from './Interface';

const App: React.FC = () => {
  const [searchLocation,setSearchLocation] = useState<string>('')
  const [data,setData] = useState<any>({})
  const [oneCall,setOneCall] = useState<any>({})
  

async function getData(e: React.KeyboardEvent) {



if(e.key === "Enter") {
    axios
    .get(`https://api.openweathermap.org/data/2.5/weather?q=${searchLocation}&units=metric&exclude=hourly,minutely,alerts&appid=6cd3632b991b6081d510d1731fbb397e`)
    .then(response => {
      setData(response)
     setSearchLocation('')
     return axios.get(`https://api.openweathermap.org/data/2.5/onecall?lat=${data.coord.lat}&lon=${data.coord.lon}&exclude=hourly,minutely,alerts&appid=6cd3632b991b6081d510d1731fbb397e`)
    })
    .then(response => {
      setOneCall(response)
    })

  // await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${searchLocation}&units=metric&exclude=hourly,minutely,alerts&appid=6cd3632b991b6081d510d1731fbb397e`)
  // .then(
  //   res => res.json())
  //   .then(
  //   data => {
  //     setData(data)
  //    setSearchLocation('')
  //   //  const lat = data.coord.lat
  //   //  const long = data.coord.lon
  //    return 
  //     function getOne() {
  //      fetch(`https://api.openweathermap.org/data/2.5/onecall?lat=${data.coord.lat}&lon=${data.coord.lon}&exclude=hourly,minutely,alerts&appid=6cd3632b991b6081d510d1731fbb397e`)
  //     .then(res => res.json() )
  //     .then(data => {
  //       setOneCall(data)
  //     })
  //    }
  //   }
  // )
}
}

// useEffect(() => {
//   async function getOne() {
//     await fetch(`https://api.openweathermap.org/data/2.5/onecall?lat={}&lon={}&exclude=hourly,minutely,alerts&appid=6cd3632b991b6081d510d1731fbb397e`).then(
//     res => res.json())
//     .then(
//     data => {
//      setOneCall(data)
//     })
//   }
// })




console.log(data)

console.log(oneCall)
const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
  setSearchLocation(e.target.value)
}
  return (
    <>
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
     
     {typeof data.main === 'undefined' ? (
        <div className="test">
          <p>Welcome!</p>
        </div>
      ): (
        <div className="data">
          <Forecast 
          precipitation={data.main.temp} 
          description={data.weather[0].description} 
          Humidity={data.main.humidity} 
          minTemp={Math.round(data.main.temp_min)} 
          maxTemp={Math.round(data.main.temp_max)} 
          Wind={data.wind.speed} 
          currentTemp={Math.round(data.main.feels_like)}
          />
        </div>
      )}
  
</div>
 
 </div>
 


 
  
    </>
  );
}

export default App;

// Left to Do:
// display all info for current weather
// display all info for 7day forecast map data compnent for ea day in 7days 
// try and catch error blocks if invalid city or zip code or if blank
// components for display 
// css and make responsive
// add Comments and types
