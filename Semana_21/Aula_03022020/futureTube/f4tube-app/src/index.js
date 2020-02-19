import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

import * as firebase from "firebase/app";
import "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyB6k8vaQxzTefarilNzyJdgbcwmrfdMG0M",
  authDomain: "futuretube-sam.firebaseapp.com",
  databaseURL: "https://futuretube-sam.firebaseio.com",
  projectId: "futuretube-sam",
  storageBucket: "futuretube-sam.appspot.com",
  messagingSenderId: "427080535122",
  appId: "1:427080535122:web:92dfc27f9b916e1173638b"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
