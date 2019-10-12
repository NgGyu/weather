import React from 'react';
import {Alert} from "react-native";
import Loading from './Loading';
import * as Location from 'expo-location';
import axios from "axios";
import Weather from "./Weather";

const API_KEY = "317ccff56f45ed63d3cd7b37d2444794";

export default class App extends React.Component {
  state = {
    isLoading: true,
  };

  getWeather = async (latitude, longitude) => {
    //axios가 값을 fetch한다
    const {
      data: {
        main: { temp },
        weather
      }
    } = await axios.get(
      `http://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&APPID=${API_KEY}&units=metric`
    );
    console.log(weather);
    this.setState({
      isLoading: false,
      condition: weather[0].main,
      temp
    });
  };

  getLocation = async() =>{
    try {
      await Location.requestPermissionsAsync();
      const {
        coords : {latitude, longitude}
      } = await Location.getCurrentPositionAsync();
      //send to API and get weather
      this.getWeather(latitude, longitude);

    } catch (error) {
      Alert.alert("Can't find you", "So sad");
    }
    
  }
  componentDidMount(){
    this.getLocation();    
  }
  
  render(){
    const { isLoading, temp, condition } = this.state;
    return isLoading ? (
      <Loading />
    ) : (
      <Weather temp={Math.round(temp)} condition={condition} />
    );
  }
  
}
