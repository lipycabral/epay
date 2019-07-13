import React from 'react'

import Login from './pages/login'
import Register from './pages/register'
import Main from './pages/main'
import Teste from './pages/teste'

import { createAppContainer, createStackNavigator } from 'react-navigation'

import { Provider } from 'react-redux'
import { createStore, applyMiddleware } from 'redux'
import ReduxThunk from 'redux-thunk'

import reducers from './redux/reducers/index'

const Routes = createAppContainer(
    createStackNavigator({
        Teste: {
            screen: Teste,
            navigationOptions:{
                header: null
            }
        },
        Login: {
            screen: Login,
            navigationOptions:{
                header: null
            }
        },
        Register: {
            screen: Register,
            navigationOptions: {
                header: null
            }
        },
        Main:{
            screen: Main,
            navigationOptions: {
                header: null
            }
        }        
    })
)

export default props => (
    <Provider
        store={createStore(reducers, {}, applyMiddleware(ReduxThunk))}
    >
        <Routes />
    </Provider>
)