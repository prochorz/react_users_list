import { Seq } from 'immutable';

export interface IListProps {
    selectMonth: (id?: number) => void;
    users: Seq<any, any>
}

export enum Colors {
    gray = 'gray',
    blue = 'blue',
    green = 'green',
    red = 'red',
    white = 'white',
};