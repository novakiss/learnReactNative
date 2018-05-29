import React, {Component} from 'react';
import {
    View,Text
} from 'react-native';
import PropTypes from 'prop-types';



export default class KhachHang extends Component{
    render() {
        return (
            <View style={{backgroundColor:'yellow',padding:10}}>
                <Text>{this.props.name?this.props.name:"DEFAULT NAME"}</Text>
            </View>
        );
    }
}
KhachHang.propType={
    name: PropTypes.string
};