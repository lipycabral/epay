import React from 'react'
import { createBottomTabNavigator } from 'react-navigation'

import Cpf from './cpf'
import DadosPessoais from './dadosPessoais'
import Endereco from './endereco'
import Email from './email'
import Senha from './senha'

import FontAwesome from 'react-native-vector-icons/FontAwesome'
import Entypo from 'react-native-vector-icons/Entypo'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'

export default createBottomTabNavigator({
    Cpf: {
        screen: Cpf,
        navigationOptions: () => ({
            tabBarLabel: 'CPF',
            tabBarIcon: ({ focused }) => (
                <FontAwesome name='vcard-o' color={focused ? '#0000FF' : '#808080'} size={24} />
            )
        })
    },
    DadosPessoais: {
        screen: DadosPessoais,
        navigationOptions: () => ({
            tabBarLabel: 'Dados pessoais',
            tabBarIcon: ({ focused }) => (
                <FontAwesome name='user' color={focused ? '#0000FF' : '#808080'} size={24} />
            )
        })
    },
    Endereco: {
        screen: Endereco,
        navigationOptions: () => ({
            tabBarLabel: 'Endereço',
            tabBarIcon: ({ focused }) => (
                <Entypo name='address' color={focused ? '#0000FF' : '#808080'} size={24} />
            )
        })
    },
    Email: {
        screen: Email,
        navigationOptions: () => ({
            tabBarLabel: 'Email',
            tabBarIcon: ({ focused }) => (
                <Entypo name='email' color={focused ? '#0000FF' : '#808080'} size={24} />
            )
        })
    },
    Senha: {
        screen: Senha,
        navigationOptions: () => ({
            tabBarLabel: 'Senha',
            tabBarIcon: ({ focused }) => (
                <MaterialCommunityIcons name='onepassword' color={focused ? '#0000FF' : '#808080'} size={24} />
            )
        })
    }
}, {
        tabBarOptions: {
            tabStyle: {
                backgroundColor: '#000',
                borderTopWidth: 0
            },
            labelStyle: {
                backgroundColor: '#000',
                borderTopWidth: 0
            },
            style: {
                backgroundColor: '#000',
                borderTopWidth: 0
            }

        }
    }
)