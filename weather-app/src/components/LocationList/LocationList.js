import React from 'react';
import WeatherLocation from '../WeatherLocation';
import PropTypes from 'prop-types';
import './styles.css';

class LocationList extends React.Component{

    handleEventLocationClick = city => {        
        this.props.onSelectedLocation(city);
    }

    cityIdToComponent = cities => {        
        return cities.map((city) => 
            (
                <WeatherLocation 
                    key={city} 
                    city={city}
                    onWeatherLocationClick={() => this.handleEventLocationClick(city)}/>
            )
        );
    }

    render(){        
        return(
            <div className="locationList">
                {this.cityIdToComponent(this.props.cities)}
            </div>
        );
    }
}

LocationList.propTypes = {
    cities: PropTypes.array.isRequired,
    onSelectedLocation: PropTypes.func,
};

export default LocationList;