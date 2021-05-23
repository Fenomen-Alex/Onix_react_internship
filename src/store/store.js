/* eslint-disable import/no-extraneous-dependencies */
import { applyMiddleware, createStore } from 'redux';
import thunk from 'redux-thunk';
import { reducers } from './reducers';

const store = createStore(reducers, applyMiddleware(thunk));

export default store;

window.store = store;
