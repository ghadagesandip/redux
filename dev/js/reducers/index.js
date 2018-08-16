import { combineReducers } from 'redux';

import userReducer from './users_reducer';
import activeUserReducer from './active_user_reducer';

const allReducers = combineReducers({
    users: userReducer,
    activeUser: activeUserReducer

})

export default allReducers;