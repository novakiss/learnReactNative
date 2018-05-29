import React, {Component} from 'react';
import {
    View, Text, TouchableOpacity
} from 'react-native';


export default class App extends Component {
    state = {
        number: 100
    };

    clickMe = () => {
        this.setState({number: this.state.number + 1})
    };

    render() {
        return (
            <View>
                <Text style={{fontSize: 100}}>{this.state.number}</Text>
                <TouchableOpacity style={{backgroundColor: 'red', width: 100, height: 20}} onPress={this.clickMe}>
                    <View>
                        <Text>KlickMe</Text>
                    </View>
                </TouchableOpacity>
            </View>
        );
    }
}