import React, {Component} from 'react';
import { View, Text, StyleSheet, Image, Button } from 'react-native';
import Style from '../Style';

class About extends Component {

    static navigationOptions = {
        tabBarIcon: () => {
            return <Image source={require('./icons/avatar.png')} style={{width: 20, height: 20}} />
        }
    }

    search () {
        this.props.navigation.navigate('Search')
    }

    render () {
        return (
            <View style={Style.view}>
                <Text style={Style.title}>A propos de l'application</Text>
                <Text>Une application de découverte des applications mobiles, en services avec l'API openWeather</Text>       
                <Button onPress={() => this.search()} title="Rechercher" style={Style.button}  />
            </View>
        );
    }
}

const style = StyleSheet.create({
  
})

export default About;