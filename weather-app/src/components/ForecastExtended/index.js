import React from 'react';
import PropTypes from 'prop-types';
import './styles.css';
import ForecastItem from './ForecastItem';

const renderProgress = () => {
    return 'Cargando pronóstico...';
}

const renderForecastItemDays = (forecastData) => {
    return forecastData.map(forecast => (
        <ForecastItem 
            key={`${forecast.weekDay}-${forecast.hour}`} 
            weekDay={forecast.weekDay} 
            hour={forecast.hour} data={forecast.data}>
        </ForecastItem>));        
}


const ForecastExtended = ({city, forecastData}) => (       
    <div>
        <h2 className="forecastTitle">Pronóstico extendido para {city}</h2>

        {forecastData ? 
            renderForecastItemDays(forecastData) : 
            renderProgress()}
    </div>   
)

ForecastExtended.propTypes = {
    city: PropTypes.string.isRequired,
    forecastData: PropTypes.array.isRequired
};

export default ForecastExtended;