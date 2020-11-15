import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './styles/style.scss';
import firebase from 'firebase';
import { firebaseConfig } from './config/firebase';

firebase.initializeApp(firebaseConfig)

ReactDOM.render(
  <React.StrictMode>
    <App/>
  </React.StrictMode>,
  document.getElementById('root')
);