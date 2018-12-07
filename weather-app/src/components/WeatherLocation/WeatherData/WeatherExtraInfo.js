import React from 'react';
import PropTypes from 'prop-types';

class WeatherExtraInfo extends React.Component {
    render() {
        return (
            <div className="weatherExtraInfo">
                <span className="extraInfoText">{`Humedad: ${this.props.humidity}% `}</span>
                <span className="extraInfoText">{`Vientos: ${this.props.wind}m/s`}</span>
            </div>
        );
    }
} 

WeatherExtraInfo.propTypes = {
    humidity: PropTypes.number.isRequired,
    wind: PropTypes.string.isRequired,
}

export default WeatherExtraInfo;