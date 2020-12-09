import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './styles/style.scss';
import firebase from 'firebase';
import { firebaseConfig } from './config/firebase';
import { createStore, applyMiddleware, compose } from 'redux'
import { Provider } from 'react-redux'
import rootReducer from "./redux/rootReducer"


const store = createStore(rootReducer, compose(
  applyMiddleware(),
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
))

firebase.initializeApp(firebaseConfig)

const app = (
  <Provider store={store}>
      <App/>
  </Provider>
)

ReactDOM.render(
    app,
  document.getElementById('root')
);