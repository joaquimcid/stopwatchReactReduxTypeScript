import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import './styles/css/App.css';
import App from './components/App';
import * as serviceWorker from './serviceWorker';
import { configureStore } from './redux/store/configureStore';

// store.subscribe(() => {
//   log(ComponentsEnum.Redux, "index.tsx -> GetState: ");
//   log(ComponentsEnum.Redux, store.getState()) 
// });

ReactDOM.render(
  <div className="app">
  <React.StrictMode>
    <Provider store={configureStore()}>
      <App />
    </Provider>
  </React.StrictMode>
  </div>
  ,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
