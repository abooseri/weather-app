import React, {FC ,useState, ChangeEvent} from 'react';
import Forecast from './components/Forecast'
import DayForecast from './components/DayForecast'
import './App.css';


const App: FC = () => {
  const [searchLocation,setSearchLocation] = useState<string>('')
  const [data,setData] = useState<any>({})
  const [oneCall,setOneCall] = useState<any>({})
  

async function getData(e: React.KeyboardEvent) {

 if(e.key === "Enter") {
   
  await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${searchLocation}&units=metric&exclude=hourly,minutely,alerts&appid=6cd3632b991b6081d510d1731fbb397e`)
  .then(
    res => res.json())
    .then(
    data => {
      setData(data)
     setSearchLocation('')
    //  const lat = data.coord.lat
    //  const long = data.coord.lon
    fetch(`https://api.openweathermap.org/data/2.5/onecall?lat=${data.coord.lat}&lon=${data.coord.lon}&exclude=hourly,minutely,alerts&appid=6cd3632b991b6081d510d1731fbb397e`)
    .then(res => res.json())
    .then(oneCall => {
      setOneCall(oneCall)
    })
    
    // console.log(oneCall)
    
    }
  )
}
}



// Map through and display 7 day forecast
const dayForecast = () => {
  return oneCall.daily.map((day: any, idx: any) => {
    <DayForecast 
          key={idx}
          precipitation={day.pop} 
          description={day.weather[0].description} 
         
          minTemp={Math.round(day.temp.min)} 
          maxTemp={Math.round(day.temp.max)} 
          
          day={day.weather[0].main}
          />

  })

}

console.log(data)
// console.log(data.coord.lat)

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
      
     
      />
     </div>

     {typeof data.main === 'undefined' ? (
        <div className="test">
          <p>Welcome!</p>
        </div>
      ): (
        <div className="current-data">
          <Forecast 
         
          description={data.weather[0].description} 
          Humidity={data.main.humidity} 
          minTemp={Math.round(data.main.temp_min)} 
          maxTemp={Math.round(data.main.temp_max)} 
          Wind={data.wind.speed} 
          currentTemp={Math.round(data.main.feels_like)}
          />
        </div>
      )}
      
   <div className="day-forecast">
     {typeof oneCall.daily === 'undefined' ? (
         <div className="7day-label">
         <p>7day Forecast:</p>
       </div>
     ): (
       <div className="7day">
         {dayForecast()}
        
       </div>
     )}
   </div>
   {data.cod === "404" ? (
     <p>City was not found try again...</p>
   ): (
     <>
     </>
   )}

 
 </div>
 


 
  
    </>
  )
}
// Tried to map through data for each day and 
export default App;

// Left to Do:

// display all info for 7day forecast map data compnent for ea day in 7days 
// try and catch error blocks if invalid city or zip code or if blank

// css and make responsive

