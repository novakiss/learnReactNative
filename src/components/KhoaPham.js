import React,{Component} from "react";
import {View,StyleSheet,Text} from 'react-native';

export default class KhoaPham extends Component{
    render(){
        return(<View style={ao.teo}>
            <Text>KhoaPham</Text>
        </View>);
    }
}

const ao= StyleSheet.create({
    teo: {
        backgroundColor:'yellow',
        borderWidth:1,
        width: 200,
        height:100,
        alignItems:'center',
        justifyContent:'center'
    }
});