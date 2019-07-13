import React, { Component } from 'react';
import { TouchableHighlight, StyleSheet, Text } from 'react-native';

export default class Btn extends Component {
    render() {
        return (
            <TouchableHighlight
                {...this.props}
                style={styles.btnEntrar}
            >
                <Text style={styles.txtEntrar}>{this.props.children}</Text>
            </TouchableHighlight>
        );
    }
}

const styles = StyleSheet.create({
    btnEntrar: {
        height: 50,
        width: '90%',
        backgroundColor: '#406E8E',
        marginVertical: 10,
        borderRadius: 90,
        justifyContent: 'center',
        alignItems: 'center',
    },
    txtEntrar: {
        color: '#FFF',
        fontSize: 20
    },
})
