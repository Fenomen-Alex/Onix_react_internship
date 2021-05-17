/* eslint-disable import/no-extraneous-dependencies */
import { createStore } from 'redux';
import { reducers } from './reducers';

const store = createStore(reducers);

export default store;

window.store = store;
