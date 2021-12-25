import React,{FC} from 'react'
import { ICurrentForecast } from '../Interface'

const Forecast: FC<ICurrentForecast> = ({
    precipitation,
    Humidity,
    Wind,
    currentTemp,
    description,
    maxTemp,
    minTemp,
}) => {
    return (
        <>
            <h1>Temperature: {currentTemp}°C</h1>
            <p>{precipitation}</p>
           
            <p>Humidity:{Humidity}%</p> 
            <p>Wind speed:{Wind} km/h </p>
            
            <p>Description: {description}</p>
            <p>High Temp: {maxTemp}°C</p>
            <p>Low Temp: {minTemp}°C</p>

        
        </>
    )
}

export default Forecast
