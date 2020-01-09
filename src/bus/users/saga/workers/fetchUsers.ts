//Core
import { put, apply } from 'redux-saga/effects';

import {api} from '~/REST';
import { uiActions } from '~/bus/ui/actions';
import { usersActions } from '~/bus/users/actions';

export function* fetchUsers (){
    try {
        yield put(uiActions.startFetching() );

        const response = yield apply( api, api.users.fetch, [] );
        const users = yield apply( response, response.json, [] );

        if(response.status !== 200) {
            throw new Error('🚨 shit happens');
        }

        yield put(usersActions.fillUsers(users) );
    } catch (error) {
        yield put(uiActions.emitError(error, 'fetchUsers worker'))
    } finally {
        yield put(uiActions.stopFetching() );
    }

}