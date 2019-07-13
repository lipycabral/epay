import React from 'react'
import { createBottomTabNavigator } from 'react-navigation'

import Inicio from './inicio'
import Carrinho from './carrinho'
import Busca from './busca'
import Perfil from './perfil'

export default createBottomTabNavigator({
    Inicio,
    Carrinho,
    Busca,
    Perfil
})