import React, { Component } from 'react';
import { TextInput } from 'react-native';

export default class TxtInput extends Component {
    render() {
        return (
            <TextInput
                {...this.props}
                textAlign={'center'}
                placeholderTextColor='#FFF'
                style={{
                    height: 50,
                    width: '90%',
                    backgroundColor: 'rgba(0,0,0,0.2)',
                    marginVertical: 10,
                    borderRadius: 90,
                    color: '#FFF',
                    fontSize: 20
                }}
            />
        );
    }
}