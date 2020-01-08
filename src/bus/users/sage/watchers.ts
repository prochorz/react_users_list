//core
import {takeEvery, all, call} from 'redux-saga/effects';

//Types
import {types} from '../types';

//workers
import {fetchUsers} from './workers';

function* watchFetchUsers() {
    yield takeEvery(types.FETCH_USERS_ASYNC, fetchUsers)
}

export function* watchUsers () {
    yield all([call(watchFetchUsers)]);
}