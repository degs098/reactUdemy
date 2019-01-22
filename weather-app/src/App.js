import React, { Component } from 'react';
import './App.css';
import LocationListContainer from './containers/LocationListContainer';
import { Grid, Row, Col } from 'react-flexbox-grid';
import Paper from '@material-ui/core/Paper';
import AppBar from '@material-ui/core/AppBar';
import Typography from '@material-ui/core/Typography';
import Toolbar from '@material-ui/core/Toolbar';
import ForecastExtendedContainer from './containers/ForecastExtendedContainer';

const cities = [
  'London,uk',
  'Washington,us',
  'Madrid,ES',
  'Bogota,CO',
  'Dublin,Irl',
  'Havana,CU'
];

class App extends Component {

  render() {
    return (
      <header className="App-header">
        <Grid className="App">
          <Row>
            <AppBar position="sticky">
              <Toolbar>
                <Typography variant="title" color="inherit">
                  WeatherApp
                </Typography>
              </Toolbar>
            </AppBar>
          </Row>
          <Row>
            <Col xs={12} md={6}>
              <LocationListContainer cities={cities}></LocationListContainer>
            </Col>
            <Col xs={12} md={6}>
              <Paper elevation={4}>
                <div className="details">
                  <ForecastExtendedContainer></ForecastExtendedContainer>
                </div>
              </Paper>
            </Col>
          </Row>
        </Grid>
      </header>
    );
  }
}

export default App;
