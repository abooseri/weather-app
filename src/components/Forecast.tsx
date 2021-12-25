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
        <div>
            
            ${precipitation}
            ${Humidity}
            ${Wind}
            ${currentTemp}
            ${description}
            ${maxTemp}
            ${minTemp}

        </div>
        <h2>Locations</h2>
        <table>
          <thead>
          <tr>
            <th>Name</th>
          </tr>
          </thead>
          <tbody>
          <tr><td>Belfast</td></tr>
          <tr><td>New York</td></tr>
          </tbody>
        </table>
        </>
    )
}

export default Forecast
