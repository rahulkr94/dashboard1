import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import AppContextProvider from './context/AppContext';
import './index.css';
// CSS Import
import "bootstrap/dist/js/bootstrap.bundle";
import "bootstrap/dist/css/bootstrap.min.css";
import "./assests/main_app.css";


ReactDOM.render(
  <React.StrictMode>
    <AppContextProvider>
      <App />
    </AppContextProvider>
  </React.StrictMode>,
  document.getElementById('root')
);