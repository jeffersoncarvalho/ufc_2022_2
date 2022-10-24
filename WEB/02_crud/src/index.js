import 'bootstrap/dist/js/bootstrap.bundle.min'
import 'bootstrap/dist/css/bootstrap.min.css'

import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter as Router } from 'react-router-dom';
import Firebase from './utils/Firebase';
import FirebaseContext from './utils/FirebaseContext';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <FirebaseContext.Provider value={new Firebase()}>
    <Router>
      <App />
    </Router>
  </FirebaseContext.Provider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
