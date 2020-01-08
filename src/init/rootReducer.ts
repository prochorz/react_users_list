import {combineReducers} from 'redux';

import {usersReducer as users} from '../bus/users/reducer';

export const rootReducer = combineReducers({
    users
});