import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';


import Txt from '../../components/txt'
import TxtInputMask from '../../components/txtInputMasked';
import BackgroundImage from '../../components/backgroundImage';
import Btn from '../../components/btn';



export default class Cpf extends Component {
    constructor(props) {
        super(props)
        this.state = {
            cpf: ''
        }
    }
    render() {
        return (
            <BackgroundImage style={styles.container}>
                <Txt>CPF</Txt>
                <TxtInputMask
                    type={'cpf'}
                    placeholder='000.000.000-00'
                    value={this.state.cpf}
                    onChangeText={text => {
                        this.setState({
                            cpf: text
                        })
                    }}
                />
            </BackgroundImage>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    
})