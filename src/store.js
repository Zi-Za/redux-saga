import { configureStore } from '@reduxjs/toolkit'
import createSagaMiddleware from 'redux-saga';
import { watchFetchDog } from './sagas';

import { dogReducer } from './reducer';

const sagaMiddleware = createSagaMiddleware();

export const store = configureStore({
    reducer: dogReducer,
    middleware: [sagaMiddleware],
    devTools: true
})

sagaMiddleware.run(watchFetchDog);

