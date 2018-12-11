import React from 'react';
import PropTypes from 'prop-types';
import './styles.css';
import ForecastItem from './ForecastItem';
import {URL_FORECAST, API_KEY} from '../../constants/weather-api';
import transformForecast from '../../services/transformForecast';

class ForecastExtended extends React.Component{

    constructor(){
        super();
        this.state = {
            forecastData: null
        }
    }

    updateCity(city){
        const url = `${URL_FORECAST}?q=${city}&APPID=${API_KEY}`;
        fetch(url).then(data => {
            data.json().then(weatherData => {                
                const forecastData = transformForecast(weatherData);                
                this.setState({
                    forecastData
                });
            });
        });
    }

    componentDidMount(){
        this.updateCity(this.props.city);
    }

    componentWillReceiveProps(nextProps){
        if(nextProps.city !== this.props.city){
            this.setState({
                forecastData: null
            });
            this.updateCity(nextProps.city);
        }
    }

    renderProgress(){
        return 'Cargando pronóstico...';
    }

    renderForecastItemDays(forecastData){
        return forecastData.map(forecast => (<ForecastItem key={`${forecast.weekDay}-${forecast.hour}`} weekDay={forecast.weekDay} hour={forecast.hour} data={forecast.data}></ForecastItem>));        
    }
    
    render(){   
        const {forecastData} = this.state;     
        return (            
            <div>
                <h2 className="forecastTitle">Pronóstico extendido para {this.props.city}</h2>
                {forecastData ? this.renderForecastItemDays(forecastData) : this.renderProgress()}
            </div>
        )
    }
}

ForecastExtended.propTypes = {
    city: PropTypes.string.isRequired
};

export default ForecastExtended;