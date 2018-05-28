import React, {Component} from 'react';
import {
    View,
    Text,
    StyleSheet
} from 'react-native';


export default class App extends Component {
    render() {
        return (
            <View style={ao.bao}>
                <View style={ao.dong}>
                    <View style={ao.cot}>
                        <Text style={ao.number}>1</Text>

                    </View>
                    <View style={ao.cot}>
                        <Text style={ao.number}>2</Text>
                        <Text>ABC</Text>
                    </View>
                    <View style={ao.cot}>
                        <Text style={ao.number}>3</Text>
                        <Text>DEF</Text>
                    </View>
                </View>

                <View style={ao.dong}>
                    <View style={ao.cot}>
                        <Text style={ao.number}>4</Text>
                        <Text>GHI</Text>
                    </View>
                    <View style={ao.cot}>
                        <Text style={ao.number}>5</Text>
                        <Text>JKL</Text>
                    </View>
                    <View style={ao.cot}>
                        <Text style={ao.number}>6</Text>
                        <Text>MNO</Text>
                    </View>
                </View>
                <View style={ao.dong}>
                    <View style={ao.cot}>
                        <Text style={ao.number}>7</Text>
                        <Text>PQRS</Text>
                    </View>
                    <View style={ao.cot}>
                        <Text style={ao.number}>8</Text>
                        <Text>TUV</Text>
                    </View>
                    <View style={ao.cot}>
                        <Text style={ao.number}>9</Text>
                        <Text>WXYZ</Text>
                    </View>
                </View>
                <View style={ao.dong}>
                    <View style={ao.cot}>
                        <Text style={ao.number}>+</Text>

                    </View>
                    <View style={ao.cot}>
                        <Text style={ao.number}>0</Text>
                    </View>
                    <View style={ao.cot}>
                        <Text> </Text>
                    </View>
                </View>
            </View>
        );
    }
}

const ao = StyleSheet.create({
    bao: {
        flex: 1, //ti le no se bao trum kin man hinh
    },
    dong: {
        flex: 1,
        borderBottomColor: 'grey',
        borderBottomWidth: 1,
        flexDirection:'row'
    },
    cot: {
        flex: 1,
        borderRightWidth:1,
        borderRightColor:'black',
        justifyContent:'center',
        alignItems:'center',
    },
    number:{
        fontSize:40
    },
});