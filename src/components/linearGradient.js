import React, { Component } from 'react';

import LinearGradient from 'react-native-linear-gradient'

export default class LinearGradiente extends Component {

    render() {
        return (
            <LinearGradient
                colors={[ '#565656', '#92AFD7']}
                style={{
                    flex: 1,

                }}
                
            >
                {this.props.children}
            </LinearGradient>
        );
    }
}
