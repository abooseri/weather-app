export interface ICurrentForecast {
    description: string;
    currentTemp: number;
    maxTemp: number;
    minTemp: number;
    Wind: number;
    precipitation?: number;
    Humidity: number; 


}

export interface IdayForecast {
    precipitation: number;
    day?: string;
    description?: string;
    maxTemp: number;
    minTemp: number;

}
