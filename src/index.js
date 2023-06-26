import React from 'react';
import { Provider } from 'react-redux';
import { ConnectedApp } from './App';
import {store} from './store';
import * as ReactDOM from 'react-dom';

ReactDOM.render(
  <Provider store={store}>
    <ConnectedApp/>
  </Provider>,
  document.getElementById('root')
);


