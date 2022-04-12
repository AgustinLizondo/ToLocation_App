import { FROM_THERE } from "../actions/location.action"

const INITIAL_STATE = {
    latitude: 34.4220014,
    longitude: -112.0840214,
}

const LocationReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case FROM_THERE:
            return { ...state, latitude: action.latitude, longitude: action.longitude }
        default:
            return state;
    }
}

export default LocationReducer;