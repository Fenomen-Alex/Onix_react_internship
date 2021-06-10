import React, { Suspense } from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

import './assets/css/main.css';
import { Provider } from 'react-redux';
import App from './App';
import store from './store/store';

ReactDOM.render(
  <Suspense fallback={<div>...Loading</div>}>
    <Provider store={store}>
      <App />
    </Provider>
  </Suspense>,
  document.getElementById('root')
);
