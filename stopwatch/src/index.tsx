import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import { reducerStopWatch } from './redux/reducers/StopWatchReducer';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import log from './components/LogDebug';
import { ComponentsEnum } from './components/LogDebug';

var store = createStore(reducerStopWatch);

store.subscribe(() => {
  log(ComponentsEnum.Redux, "index.tsx -> GetState: ");
  log(ComponentsEnum.Redux, store.getState()) 
});

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
