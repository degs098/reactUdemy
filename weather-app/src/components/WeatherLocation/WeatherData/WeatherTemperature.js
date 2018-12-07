import React from 'react';
import WeatherIcons from 'react-weathericons';
import PropTypes from 'prop-types';
import {
  CLOUD,
  CLOUDY,
  SUNNY,
  WINDY,
  SNOW,
  RAIN,
} from '../../../constants/weathers';

const icons = {
  [CLOUD]: 'cloud',
  [CLOUDY]: 'cloudy',
  [SUNNY]: 'day-sunny',
  [WINDY]: 'windy',
  [SNOW]: 'snow',
  [RAIN]: 'rain',
};

class WeatherTemperature extends React.Component {  

  getWeatherIcon(weatherState){
    const icon = icons[weatherState];
    const sizeIcon = '2x';
    if(icon)
      return <WeatherIcons className="wicon" name={icon} size={sizeIcon}></WeatherIcons>;
    else
      return <WeatherIcons className="wicon" name={'day-sunny'} size={sizeIcon}></WeatherIcons>;
  }

  render() {    
    return (
      <div className="weatherTemperatureCont">
        {this.getWeatherIcon(this.props.weatherState)}
        <span className="temperature">{ `${this.props.temperature}` }</span>
        <span className="temperatureType">C°</span>
      </div>
    );
  }
}

WeatherTemperature.propTypes = {
  temperature: PropTypes.number.isRequired,
  weatherState: PropTypes.string.isRequired
}

export default WeatherTemperature;