import { CHANGE_LOGIN } from "../actions/login.action"

const INITIAL_STATE = {
    value: false,
}

const LoginReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case CHANGE_LOGIN:
            return {...state, value: action.value}
        default:
            return state;
    }
}

export default LoginReducer;