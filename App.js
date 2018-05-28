import React, {Component} from 'react';
import {
    View,
    Text, StyleSheet
} from 'react-native';


export default class App extends Component {
    render() {
        return (
            <View style={ao.bao}>
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
    bao:{
        backgroundColor: 'pink',
        width:200,
        height:300,
        marginTop:50,
        marginLeft:100,
        paddingTop:30
    },
    tieude: {
        backgroundColor: 'yellow',
        color: 'red'
    },
    ten: {
        backgroundColor: 'green',
        color: 'yellow'
    }
});