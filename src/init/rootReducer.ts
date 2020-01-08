import {combineReducers} from 'redux';

import {uiReducer as ui} from '~/bus/ui/reducer';
import {usersReducer as users} from '~/bus/users/reducer';

export const rootReducer = combineReducers({
    ui,
    users
});