import React from 'react';
import ReactDOM from 'react-dom';
import thunk from 'redux-thunk';
import App from './App';
import { createStore, applyMiddleware, compose } from 'redux'
import { Provider } from 'react-redux'
import rootReducer from "./redux/rootReducer"
import './styles/style.scss';


const store = createStore(rootReducer, compose(
  applyMiddleware(thunk),
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
))

const app = (
  <Provider store={store}>
      <App/>
  </Provider>
)

ReactDOM.render(
  app,
  document.getElementById('root')
);