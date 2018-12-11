import convert from 'convert-units';
import {
    SUNNY, THUNDER, DRIZZLE, RAIN, SNOW
} from '../constants/weathers';

const getTemp = kelvin => {
    return convert(kelvin).from('K').to("C").toFixed(0);
}

const getWeatherState = weatherData => {
    const {id} = weatherData;        
    if(id < 300){
        return THUNDER;
    }else if(id < 400){
        return DRIZZLE;
    }else if(id < 600){
        return RAIN;
    }else if (id < 700){
        return SNOW;
    }else if(id >= 800){
        return SUNNY;
    }
    return SUNNY;
};

export default function transformWeather(weatherData){        
    const {humidity, temp} = weatherData.main;
    const {speed} = weatherData.wind;
    const weatherState = getWeatherState(weatherData.weather[0]);
    const temperature = getTemp(temp);

    const data = {
        humidity,
        temperature,
        weatherState,
        wind: `${speed}`
    };
    return data;
}