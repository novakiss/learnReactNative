import React, {Component} from 'react';
import {
    View,Button
} from 'react-native';


export default class HomeScreen extends Component {
    render() {
        return (
            <View style={style.container}>
                <Button title="Go To Home Screen"
                        onPress={()=>this.props.navigation.goBack()}/>
                <Button title="Go To Home Screen"
                        onPress={()=>this.props.navigation.popToTop()}/>
            </View>
        );
    }
}
const style = {
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    }
};
