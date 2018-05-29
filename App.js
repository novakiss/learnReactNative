import React, {Component} from 'react';
import {
    View,
} from 'react-native';

import KhachHang from './src/components/KhachHang'


export default class App extends Component{
    render() {
        return (
            <View>
                <KhachHang name="Name 1"/>
                <KhachHang name="Name 2"/>
                <KhachHang/>
            </View>
        );
    }
}