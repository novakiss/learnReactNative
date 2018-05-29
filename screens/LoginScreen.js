import React, {Component} from 'react';
import {
    View,Button
} from 'react-native';

export default class LoginScreen extends Component {
    /*static navigationOptions={
        header:null
    };*/
    render() {
        return (
            <View style={style.container}>
                <Button title="Go To Home Screen"
                onPress={()=>this.props.navigation.navigate('Home')}/>
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
