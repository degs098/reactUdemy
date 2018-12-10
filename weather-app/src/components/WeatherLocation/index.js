import React from 'react';
import Location from './Location';
import WeatherData from './WeatherData';
import './styles.css';
import {
    API_WEATHER
} from '../../constants/weather-api';
import transformWeather from '../../services/transformWeather';
import CircularProgress from '@material-ui/core/CircularProgress';

class WeatherLocation extends React.Component {

    constructor(){
        super();
        this.state = {
            city: 'Medellin',
            data: null
        };
    }  
    
    componentDidMount = () => {
        console.log("componentDidMount");
        this.handleUpdateClick();
    }
    
    componentDidUpdate = (prevProps, prevState) => {
        console.log("componentDidUpdate")
    }
    
    handleUpdateClick = () => {
        fetch(API_WEATHER).then(res => {                                        
            return res.json();
        }).then(data => {            
            const newWeather = transformWeather(data.list[0]);        
            this.setState({
                data: newWeather
            });
        });        
    }
    
    render() {                     
        const {city, data} = this.state;   
        return (
            <div className="weatherLocationCont">
                <Location city={city}></Location>
                {data ? <WeatherData data={data}></WeatherData> : <CircularProgress size={50}/>}
            </div>
        )
    }
}

export default WeatherLocation;