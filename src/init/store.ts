import { createStore } from 'redux';

//Roots
import { rootReducer } from './rootReducer';
import { rootSage } from './rootSage';

//middeleware
import {enhancedStore, sagaMiddleware} from './middleware/core'

export const store = createStore(rootReducer, enhancedStore );

sagaMiddleware.run(rootSage );