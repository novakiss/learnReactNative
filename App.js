import React, {Component} from 'react';
import {
    View,
    StyleSheet
} from 'react-native';


export default class App extends Component {
    render() {
        return (
            <View style={ao.bao}>
                <View style={ao.teo}></View>
                <View style={ao.ti}></View>
            </View>
        );
    }
}

const ao = StyleSheet.create({
    bao: {
        backgroundColor: 'black',
        flex: 1, //ti le no se bao trum kin man hinh
        flexDirection: "row"
    },
    teo: {
        backgroundColor: 'red',
        flex: 3
    },
    ti: {
        backgroundColor: 'yellow',
        flex: 2
    }
});