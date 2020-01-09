import { Seq } from 'immutable';

export interface IRootState {
    currentMonth?: number;
    users: Seq<number, any>
}

export interface IRootProps {
    currentMonth?: number;
    users: Seq<number, any>
}

export interface IRootActionProps {
    actions: any
}