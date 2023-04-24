import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import './styles/Globalstyles.css';
import 'bulma/css/bulma.min.css';
import App from './App';
// import reportWebVitals from './reportWebVitals';


ReactDOM.render(
  <React.StrictMode>
    <Router >
    <App />
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);