import { GO_WALKING, GO_CYCLING } from "../actions/go.action"

const INITIAL_STATE = {
    value: GO_WALKING,
}

const GoReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case GO_WALKING:
            return { ...state, value: GO_WALKING }
        case GO_CYCLING:
            return { ...state, value: GO_CYCLING }
        default:
            return state;
    }
}

export default GoReducer;