import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, Image, Button} from 'react-native';
import { createStackNavigator } from 'react-navigation';
import { StackNavigator } from 'react-navigation';

import Masuk from './Components/Masuk';
import Welcome from './Components/Welcome';

const AppNavigator = createStackNavigator ({
  Masuk : Masuk,
  Welcome : Welcome,

});

export default class App extends Component<Props> {
  render() {
    return (
        <AppNavigator/>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
    //'#f87d42'
  }
});
