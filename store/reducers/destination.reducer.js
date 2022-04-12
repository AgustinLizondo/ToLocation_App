import { GO_THERE } from "../actions/destination.action"

const INITIAL_STATE = {
    latitude: 36.952845,
    longitude: -121.7309
}

const DestinationReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case GO_THERE:
            return { ...state, latitude: action.latitude, longitude: action.longitude }
        default:
            return state;
    }
}

export default DestinationReducer;