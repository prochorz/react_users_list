//Core
import { all, call } from 'redux-saga/effects';

//Watcher
import { watchUsers } from '~/bus/users/saga/watchers';

export function* rootSage () {
    yield all([call(watchUsers)]);
}