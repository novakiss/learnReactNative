import React, {Component} from 'react';
import {
    View,
    Text, StyleSheet
} from 'react-native';


export default class App extends Component {
    render() {
        return (
            <View>
                <Text style={ao.tieude}>
                    Hello React Native
                </Text>
                <Text style={ao.ten}>
                    My name is Novakiss
                </Text>
            </View>
        );
    }
}

const ao = StyleSheet.create({
    tieude: {
        backgroundColor: 'yellow',
        color: 'red'
    },
    ten: {
        backgroundColor: 'green',
        color: 'yellow'
    }
});