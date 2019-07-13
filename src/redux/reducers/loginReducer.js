import {
    CHANGE_LOGIN,
    CHANGE_SENHA
} from '../actions'

const INITIAL_STATE = {
    login: '',
    senha: ''
}

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case CHANGE_LOGIN:
            return { ...state, login: action.payload }
        case CHANGE_SENHA:
            return { ...state, senha: action.payload }
        default:
            return state
    }
}