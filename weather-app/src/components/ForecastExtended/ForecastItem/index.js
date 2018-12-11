import React from 'react';
import PropTypes from 'prop-types';
import WeatherData from '../../WeatherLocation/WeatherData';
import './styles.css';

class ForecastItem extends React.Component{
        
    render(){
        const {weekDay, hour, data} = this.props
        return(
            <div className="forecastItemCont">
                <div>{weekDay} - {hour} hs</div>
                <WeatherData data={data}></WeatherData>
            </div>
        );
    }
}

ForecastItem.propTypes = {
    weekDay: PropTypes.string.isRequired,
    hour: PropTypes.number.isRequired,
    data: PropTypes.shape({
        temperature: PropTypes.string.isRequired,
        weatherState: PropTypes.string.isRequired,
        humidity: PropTypes.number.isRequired,
        wind: PropTypes.string.isRequired
    }).isRequired
};

export default ForecastItem;