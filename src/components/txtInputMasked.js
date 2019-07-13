import React, { Component } from 'react';

import { TextInputMask } from 'react-native-masked-text'

export default class TxtInputMask extends Component {
    render() {
        return (
            <TextInputMask
                {...this.props}
                placeholderTextColor='#FFF'
                textAlign={'center'}
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
        )
    }
}
