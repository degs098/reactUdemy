import convert from 'convert-units';
import {
    SUNNY,
} from '../constants/weathers';

const getTemp = kelvin => {
    return convert(kelvin).from('K').to("C").toFixed(2);
}

const getWeatherState = weatherData => {
    return SUNNY;
};

export default function transformWeather(weatherData){        
    const {humidity, temp} = weatherData.main;
    const {speed} = weatherData.wind;
    const weatherState = getWeatherState(weatherData);
    const temperature = getTemp(temp);

    const data = {
        humidity,
        temperature,
        weatherState,
        wind: `${speed}`
    };
    return data;
}