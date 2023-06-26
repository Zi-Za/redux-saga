import { createStore } from "redux"
import { applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';
import { watchFetchDog } from './sagas';

import { dogReducer } from './reducer';

const sagaMiddleware = createSagaMiddleware();
export const store = createStore(
    dogReducer, 
    applyMiddleware(sagaMiddleware)
);
sagaMiddleware.run(watchFetchDog);

