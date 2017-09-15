import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import watchlistApp from './reducers/episodes';

import App from './App';
import registerServiceWorker from './registerServiceWorker';

let store = createStore(watchlistApp);

ReactDOM.render(
  <Provider store={store} >
    <App />
  </Provider>,
document.getElementById('root'));

registerServiceWorker();
