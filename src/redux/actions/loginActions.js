import {
    CHANGE_LOGIN,
    CHANGE_SENHA
} from './index'

export const changeLogin = text => {
    return{
        type: CHANGE_LOGIN,
        payload: text
    }
}

export const changeSenha = text => {
    return{
        type: CHANGE_SENHA,
        payload: text
    }
}