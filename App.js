import React, {Component} from 'react';
import {
    View,
} from 'react-native';

import KhoaPham from './src/components/KhoaPham'


export default class App extends Component {
    render() {
        return (
            <View>
                <KhoaPham/>
                <KhoaPham/>
                <KhoaPham/>
                <KhoaPham/>
            </View>
        );
    }
}



