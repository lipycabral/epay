import React, { Component } from 'react';
import {
    View,
    StyleSheet,
    Image,
    ImageBackground,
    Text,
    TouchableHighlight
} from 'react-native';

import TxtInput from '../../components/txtInput'
import BackgroundImage from '../../components/backgroundImage';

import { connect } from 'react-redux'

import {
    changeLogin,
    changeSenha
} from '../../redux/actions/loginActions'
import Btn from '../../components/btn';

class Login extends Component {

    _changeLogin(text) {
        this.props.changeLogin(text)
    }

    _changeSenha(text) {
        this.props.changeSenha(text)
    }

    render() {
        return (
            <BackgroundImage style={{justifyContent: 'center', alignItems: 'center', flex: 1}}>
                <Text
                    style={styles.txtBemVindo}
                >
                    Bem Vindo
                </Text>
                <Image
                    source={require('../../assets/logo.png')}
                    style={styles.logo}
                />
                <TxtInput
                    placeholder='Login'
                    value={this.props.login}
                    onChangeText={text => this._changeLogin(text)}
                />
                <TxtInput
                    placeholder='********'
                    value={this.props.senha}
                    onChangeText={text => this._changeSenha(text)}
                    secureTextEntry
                />
                <Btn
                    onPress={()=> this.props.navigation.push('Main')}
                >
                    Entrar
                </Btn>
                <View style={styles.viewBot}>
                    <Text style={styles.txtBot}>Senha</Text>
                    <Text style={styles.txtBot}> | </Text>
                    <TouchableHighlight
                        onPress={() => this.props.navigation.push('Register')}
                    >
                        <Text style={styles.txtBot}>Cadastrar</Text>
                    </TouchableHighlight>
                </View>
            </BackgroundImage>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    txtBemVindo: {
        fontSize: 40,
        color: '#FFF',
        fontWeight: 'bold',
    },
    txtInput: {
        height: 50,
        width: '90%',
        backgroundColor: 'rgba(0,0,0,0.2)',
        marginVertical: 10,
        borderRadius: 90,
        color: '#FFF',
        fontSize: 20
    },
    logo: {
        height: 128,
        width: 128,
        marginLeft: -10,
        marginVertical: 10
    },

    viewBot: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        marginLeft: 15
    },
    txtBot: {
        color: '#8EA8C3',
        fontSize: 15,
        marginHorizontal: 10,
        marginVertical: 2,

    }
})

const mapStateToProps = state => ({
    login: state.LoginReducer.login,
    senha: state.LoginReducer.senha,
})

export default connect(mapStateToProps, {
    changeLogin,
    changeSenha
})(Login)