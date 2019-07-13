import React, { Component } from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';

import Txt from '../../components/txt'
import TxtInput from '../../components/txtInput'
import BackgroundImage from '../../components/backgroundImage';
import Btn from '../../components/btn';

export default class Endereco extends Component {
	render() {
		return (
			<BackgroundImage style={styles.container}>
				<Txt>Endereço</Txt>
				<TxtInput placeholder='Rua' />
				<TxtInput placeholder='Número' />
				<TxtInput placeholder='Bairro' />
				<TxtInput placeholder='Cep' />
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