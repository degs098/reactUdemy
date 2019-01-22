import {URL_FORECAST, API_KEY} from './../constants/weather-api';
import transformForecast from './../services/transformForecast';

export const SET_CITY = 'SET_CITY';
export const SET_FORECAST_DATA = 'SET_FORECAST_DATA';

export const setCity = (payload) => ({ type: SET_CITY, payload});
export const setForecastData = payload => ({type: SET_FORECAST_DATA, payload});

export const setSelectedCity = payload => {
    return dispatch => {
        const url = `${URL_FORECAST}?q=${payload}&APPID=${API_KEY}`;

        //activar en el estado un indicador de busqueda de datos
        dispatch(setCity(payload));

        fetch(url).then(data => {
            data.json().then(weatherData => {                
                const forecastData = transformForecast(weatherData);                

                //modificar estado con el resultado de la promise        
                dispatch(setForecastData({city: payload, forecastData}));                        
            });
        });  
    };
}