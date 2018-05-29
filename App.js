import React, {Component} from 'react';
import {
    createStackNavigator,
} from 'react-navigation';

import LoginScreen from './screens/LoginScreen';
import HomeScreen from './screens/HomeScreen';

export default class App extends Component {

    render() {
        return (
            <AppStackNavigator/>
        );
    }
}

const AppStackNavigator = createStackNavigator({
    Login: LoginScreen,
    Home : HomeScreen
});