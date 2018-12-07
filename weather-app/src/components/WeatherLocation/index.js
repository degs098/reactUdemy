import React from 'react';
import Location from './Location';
import WeatherData from './WeatherData';
import './styles.css';
import {
    SUNNY,
    CLOUD,
} from '../../constants/weathers';
import {
    API_WEATHER
} from '../../constants/weather-api'

const data = {
    temperature: 5,
    weatherState: CLOUD,
    humidity: 10,
    wind: 10
};

const data2 = {
    temperature: 5,
    weatherState: SUNNY,
    humidity: 20,
    wind: 4
};

class WeatherLocation extends React.Component {

    constructor(){
        super();
        this.state = {
            city: 'Medellin',
            data: data2
        };
    }
    
    handleUpdateClick = () => {
        fetch(API_WEATHER).then(res => {                            
            this.setState({
                city: 'Medellin!',
                data: data
            });
            return res.json();
        }).then(data => {
            console.log(data);
        });        
    }
    
    render() {     
        const {city, data} = this.state;   
        return (
            <div className="weatherLocationCont">
                <Location city={city}></Location>
                <WeatherData data={data}></WeatherData>
                <button onClick={this.handleUpdateClick}>Actualizar</button>
            </div>
        )
    }
}

export default WeatherLocation;