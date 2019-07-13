import React, { Component } from 'react';
import { StyleSheet, View } from 'react-native'

import Txt from '../../components/txt'
import TxtInputMask from '../../components/txtInputMasked';
import BackgroundImage from '../../components/backgroundImage';
import Btn from '../../components/btn';
import TxtInput from '../../components/txtInput';

export default class DadosPessoais extends Component {
    render() {
        return (
            <BackgroundImage style={styles.container}>
                <Txt>Dados pessoais</Txt>
                <TxtInput placeholder='Nome Completo' />
                <TxtInputMask
                    type={'cel-phone'}
                    placeholder='Telefone'
                />
                <TxtInput placeholder='Data de nascimento' />
            </BackgroundImage>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    }
})