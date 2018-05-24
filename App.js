import React from 'react';
import { StatusBar, View } from 'react-native';
import { TabNavigator } from 'react-navigation';

import About from './Component/About';
import Search from './Component/Search';
import Style from './Style';

const Tabs = TabNavigator({
  Search: {screen: Search },
  About: {screen: About }
  },  
  {
  tabBarPosition: 'bottom',
  tabBarOptions: {
    showIcon: true,
    showLabel: false,
    indicatorStyle: {
      height: 2,
      backgroundColor: '#fff'
    },
    style: {
      backgroundColor: '#eee',
      borderColor: '#3f101c'
    }
  },
})

export default class App extends React.Component {
  render() {
    return (
      <View style={{flex: 1}} >
        <StatusBar hidden={true} />
        <Tabs style={Style.container}/>
      </View>
     
    );
  }
}

