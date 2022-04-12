import thunk from 'redux-thunk';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import GoReducer from './reducers/go.reducer';
import LoginReducer from './reducers/login.reducer';
import PermissionReducer from './reducers/permission.reducer';
import AuthReducer from './reducers/auth.reducer';
import UserReducer from './reducers/userdata.reducer';
import DestinationReducer from './reducers/destination.reducer';
import LocationReducer from './reducers/location.reducer'

const RootReducer = combineReducers({
    isLogged: LoginReducer,
    isGoing: GoReducer,
    permission: PermissionReducer,
    auth: AuthReducer,
    userData: UserReducer,
    destination: DestinationReducer,
    location: LocationReducer
})

export default createStore(RootReducer, applyMiddleware(thunk));