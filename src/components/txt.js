import React, { Component } from 'react';
import { Text } from 'react-native';

export default class Txt extends Component {
    render() {
        return (
            <Text
                style={{
                    fontSize: 40,
                    fontWeight: 'bold',
                    color: '#FFF',
                    marginBottom: 30
                }}
            >
                {this.props.children}
            </Text>
        );
    }
}
