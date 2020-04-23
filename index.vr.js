import React from 'react';
import {
  AppRegistry,
  asset,
  Pano,
  Text,
  View,
} from 'react-vr';

import WeatherCard from './vr/components/WeatherCard'
import WindCloudObject from './vr/components/WindCloudObject'

const api_key ='b3fc2a76dc95fe5642f0809c686b136e';

export default class WeatherSimulator extends React.Component {
  constructor() {
    super();

    this.state = {
      weatherObject: {
      name: '',
      main: {
        temp: 0
      },
      weather: [
        {description: ''}
      ],
      wind: {
        deg: 1,
        speed: 1
      }
      }
    }
  }

  componentDidMount() {
    fetch(`http://api.openweathermap.org/data/2.5/weather?q=India&appid=${api_key}`, {
    method: 'GET'
    })
    .then(response => response.json())
    .then(json => this.setState({weatherObject: json}));
  }

  render() {
    return (
      <View  style={{
       flex: 1,
       justifyContent: 'center',
       alignItems: 'center',
      }} >
        <Pano source={asset('lombard-vr.jpg')}/>
        <WeatherCard weatherObject = {this.state.weatherObject}/>
        <WindCloudObject wind= {this.state.weatherObject.wind}/>
      </View>
    );
  }
};

AppRegistry.registerComponent('WeatherSimulator', () => WeatherSimulator);
