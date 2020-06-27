import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import 'bootstrap/dist/css/bootstrap.css'
import App from './App';
import { Provider } from 'react-redux';
import configureStore from './redux/store/configureStore'
import * as serviceWorker from './serviceWorker';
import { startGetUser } from './redux/actions/user.action';
import { startGetRepos } from './redux/actions/repos.action';

const store = configureStore()

store.dispatch(startGetUser());
store.dispatch(startGetRepos());

const jsx = (
  <Provider store={store}>
    <App />
  </Provider>
)

ReactDOM.render(
  <React.StrictMode>
    {jsx}
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
