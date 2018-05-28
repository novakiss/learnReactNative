import React, {Component} from 'react';
import {
    View,
    Text,
} from 'react-native';



export default class App extends Component{
    constructor(props){
        super(props);
        console.log("HELLO CONSTRUCTOR");
    }

    componentWillMount(){
        console.log("HELLO WILLMOUNT");
    }

    componentDidMount(){
        console.log("HELLO DIDMOUNT")
    }

    render() {
        console.log("HELLO RENDER");
        return (
            <View>
                <Text style={{marginTop:100}}>
                    Hello React Native
                </Text>
            </View>
        );
    }
}