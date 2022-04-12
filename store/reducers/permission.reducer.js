import { CHANGE_PERMISSION } from "../actions/permission.action"

const INITIAL_STATE = {
    value: '',
}

const PermissionReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case CHANGE_PERMISSION:
            return { ...state, value: action.value }
        default:
            return state;
    }
}

export default PermissionReducer;