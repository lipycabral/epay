import React, { Component } from 'react';
import { View, Text, TextInput, StyleSheet } from 'react-native';

export default class Teste extends Component {
    constructor(props) {
        super(props);
        this.onHandleKeyPress = this.onHandleKeyPress.bind(this)
        this.state = {
            giro: ''
        };
    }
    onHandleKeyPress = ({nativeEvent}) => {
        if(nativeEvent.key === 'Backspace'){
            
        }
    }
    render() {
        return (
            <View style={styles.container}>
                <TextInput
                    placeholder='0'
                    keyboardType='number-pad'
                    style={{
                        width: 300,
                        height: 50,
                        backgroundColor: 'black',
                        color:'white'
                    }}
                    placeholderTextColor='white'
                    onKeyPress={this.onHandleKeyPress}

                    value={this.state.giro + 't'}
                    onChangeText={(text, {nativeEvent}) => {
                        if(nativeEvent.key !== 'Backspace'){
                            this.setState({ giro: text.replace(/[^\d]/g, '')+'t' })
                        }
                    }
                    }
                />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    }
})