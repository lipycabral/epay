import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';

import Txt from '../../components/txt'
import TxtInput from '../../components/txtInput'
import BackgroundImage from '../../components/backgroundImage';
import Btn from '../../components/btn';

export default class Email extends Component {
	render() {
		return (
			<BackgroundImage style={styles.container}>
				<Txt>Email</Txt>
				<TxtInput placeholder='Email' />
				<TxtInput placeholder='Confirmação de email' />
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