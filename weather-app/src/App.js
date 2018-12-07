import React, { Component } from 'react';
import './App.css';
import WeatherLocation from './components/WeatherLocation';

class App extends Component {
  render() {
    return (
      <div className="App">        
        <header className="App-header">          
          WeatherApp
          <WeatherLocation></WeatherLocation>
        </header>        
      </div>      
    );
  }
}

export default App;
