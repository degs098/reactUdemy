import {URL, API_KEY} from '../constants/weather-api';

export function getUrlWeatherByCity(city){    
    return `${URL}?q=${city}&APPID=${API_KEY}`
}