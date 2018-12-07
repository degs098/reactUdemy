import React from 'react';
import PropTypes from 'prop-types';
import WeatherExtraInfo from './WeatherExtraInfo';
import WeatherTemperature from './WeatherTemperature';
import './styles.css';

class WeatherData extends React.Component {
  render() {    
    return (      
      <div className="weatherDataCont">
        <WeatherTemperature temperature={this.props.data.temperature} weatherState={this.props.data.weatherState}></WeatherTemperature>
        <WeatherExtraInfo humidity={this.props.data.humidity} wind={this.props.data.wind}></WeatherExtraInfo>
      </div>
    );
  }
}

WeatherData.propType = {
  data: PropTypes.shape({
    temperature: PropTypes.number.isRequired,
    weatherState: PropTypes.string.isRequired,
    humidity: PropTypes.number.isRequired,
    wind: PropTypes.number.isRequired
  })
}

export default WeatherData;