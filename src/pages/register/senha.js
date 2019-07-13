import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import BackgroundImage from '../../components/backgroundImage';
import TxtInput from '../../components/txtInput';
import Txt from '../../components/txt';

export default class Senha extends Component {
	render() {
		return (
			<BackgroundImage style={styles.container}>
				<Txt>Senha</Txt>
				<TxtInput 
					placeholder='Senha'
					secureTextEntry
				/>
				<TxtInput 
					placeholder='Confirmar senha'
					secureTextEntry
				/>
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
