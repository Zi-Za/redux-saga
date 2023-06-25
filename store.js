import { reducer } from './reducer';
import { createStore } from 'react-redux';
import { App } from './App'
import { applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';
import { watchFetchDog} from './sagas';
import { connect } from 'react-redux';

const sagaMiddleware = createSagaMiddleware();
const store = createStore(
    reducer, 
    applyMiddleware(sagaMiddleware)
);
sagaMiddleware.run(watchFetchDog);

const ConnectedApp = connect((state) => {
    console.log(state);
    return state;
})(App);