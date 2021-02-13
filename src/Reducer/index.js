import counterReducer from './counter';
import loggedInn from './isLogged';
import { combineReducers } from 'redux';


const allReducers= combineReducers({
    counter:counterReducer,
    logged:loggedInn
})


export default allReducers;