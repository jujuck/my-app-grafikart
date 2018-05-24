import React, {Component} from 'react';
import { TextInput, Image, Button, View, Text } from 'react-native';
import axios from 'axios';


import Style from '../Style';



export default class Search extends React.Component {
    constructor (props) {
        super(props)
        this.state = {
            city: 'Nantes',
            searchCity: '',
            report: null,
            request: false
        }
    }

    setCity (city) {
        this.setState({
            city: city
        })
    }

    static navigationOptions  = {
        title: 'Rechercher une ville',
        tabBarIcon: () => {
            return <Image source={require('./icons/smartphone.png')} style={{width: 20, height: 20}}/>
        }
    }

    submit() {
        this.setState({city: this.state.city, searchCity: this.state.city})
        this.fetchWeather()
    }

    fetchWeather() {
        axios.get(`http://api.openweathermap.org/data/2.5/weather?q=${this.state.city}&units=metric&APPID=1ae0e05d29e5676b5e6ae70a74f6fef2`)
            .then((response) => {
                this.setState({report: response.data, request: true, city: '' })
            })
    }

    render() {
        if (this.state.request) {
            return (
                <View style={Style.view} >
                    <Text style={Style.title}> Rechercher votre ville</Text>
                    <TextInput
                    underlineColorAndroid='transparent'
                    onChangeText={(text) => this.setCity(text)}
                    style= {Style.inputSearch}
                    value={this.state.city}
                    />
                    <Button onPress={() => this.submit()} title="Rechercher" style={Style.button} />
                    <Text style={Style.h2}> Météo pour la ville de {this.state.searchCity}</Text>
                    <Text style={Style.result} >Temperature max: {this.state.report.main.temp_max }</Text>
                    <Text style={Style.result} >Temperature min: {this.state.report.main.temp_min }</Text>
                    <Text style={Style.result}>Vitesse du vent : {this.state.report.wind.speed} km/h</Text>
                    <Text style={Style.result}>Humidité : {this.state.report.main.humidity} %</Text>
                    <Text style={Style.result}>Temps : {this.state.report.weather[0].description}</Text>
                </View>
            );
        } else {
            return (
                <View style={Style.view} >
                    <Text style={Style.title}> Rechercher votre ville</Text>
                    <TextInput
                    underlineColorAndroid='transparent'
                    onChangeText={(text) => this.setCity(text)}
                    style= {Style.inputSearch}
                    value={this.state.city}
                    />
                    <Button onPress={() => this.submit()} title="Rechercher" style={Style.button} />
                </View>
            );
        }
    }
}

