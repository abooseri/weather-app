import React,{FC} from 'react'
import { IdayForecast } from '../Interface'

const DayForecast: FC<IdayForecast> = (
    {precipitation,
       day,
        description,
        maxTemp,
        minTemp,}
) => {
    return (
        <>
        <h1>{day}</h1>
        <p>Description: {description}</p>
        <p>{precipitation}%</p>
        <p>High Temp: {maxTemp}°C</p>
        <p>Low Temp: {minTemp}°C</p>

    
    </>
    )
}

export default DayForecast
