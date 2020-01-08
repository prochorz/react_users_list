//Types
import { types } from './types';

export const uiActions= {
    startFetching:()=>{
        return {
            type: types.START_FETCHING
        };
    },
    stopFetching:()=>{
        return {
            type: types.STOP_FETCHING
        };
    },
    emitError: (error: any, meta?: string ) => {
        return {
            type: types.EMIT_ERROR,
            payload: error,
            error: true,
            meta,
        }
    }
};