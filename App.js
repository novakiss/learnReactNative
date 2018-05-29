import React, {Component} from 'react';
import {
    View,TouchableOpacity,Text
} from 'react-native';


export default class App extends Component{
    clickMe=()=>{
      console.log('Clicked')
    };
    render() {
        return (
            <View>
                <TouchableOpacity onPress={this.clickMe}>
                <View style={{backgroundColor:'green',width:100,height:20,marginTop:100,marginLeft:20}}>
                    <Text>Click Me</Text>
                </View>
                </TouchableOpacity>
            </View>
        );
    }
}