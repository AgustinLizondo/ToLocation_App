import { SIGN_IN, SIGN_UP } from "../actions/auth.action"

const INITIAL_STATE = {
    token: null,
    userId: null,
    isRegistered: null,
    email: null,
}

const AuthReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case SIGN_UP:
            return { ...state, token: action.token, userId: action.userId, email: action.email }
        case SIGN_IN:
            return { ...state, token: action.token, userId: action.userId, email: action.email, isRegistered: action.isRegistered }
        default:
            return state
    }
}

export default AuthReducer;