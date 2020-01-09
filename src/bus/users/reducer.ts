//Core
import { List, Seq } from 'immutable';
import moment from 'moment';

//Types
import { types, User } from './types';

const initialState = List();

export const usersReducer = (state = initialState, action: any) => {
    switch (action.type) {
        case types.FILL_USERS:
            return Seq(action.payload).groupBy( (user: User) => parseInt(moment(user.dob).format('M')) - 1 );

        case types.CLEAR_USERS:
            return state.clear();

        default:
            return state;
    }
}