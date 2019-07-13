import React, { Component } from 'react';
import { ImageBackground } from 'react-native';

export default class BackgroundImage extends Component {
    render() {
        return (
            <ImageBackground
                {...this.props}
                source={require('../assets/background.jpg')}
                blurRadius={3}
            >
                {this.props.children}
            </ImageBackground>
        );
    }
}
