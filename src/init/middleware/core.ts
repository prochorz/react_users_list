import { applyMiddleware, compose } from 'redux';

//middleware
import { createLogger } from 'redux-logger';
import createSagaMiddleware, { SagaMiddleware } from 'redux-saga';

declare global {
    interface Window {
        __REDUX_DEVTOOLS_EXTENSION_COMPOSE__?: typeof compose;
        __DEV__: boolean;
    }
}

const logger: any = createLogger({
    duration: true,
    collapsed: true,
    colors: {
        title: ()=> '#139BFE',
        prevState: ()=> '#15C5FAF',
        action: ()=> '#149945',
        nextState: ()=> '#A47104',
        error: ()=> '#ff0005'
    }
});

const sagaMiddleware = createSagaMiddleware();
const devtools = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__;
const composeEnhancers = window.__DEV__ && devtools ? devtools : compose;

const middleware: SagaMiddleware[] = [ sagaMiddleware ];

if(window.__DEV__) {
    middleware.push(logger);
}

const enhancedStore = composeEnhancers( applyMiddleware(...middleware) );

export { enhancedStore, sagaMiddleware };