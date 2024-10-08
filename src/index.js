import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

// dependencies
import 'bootstrap/dist/css/bootstrap.min.css';
import $ from 'jquery';
import Popper from 'popper.js';
import 'bootstrap/dist/js/bootstrap.bundle.min';

import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import Routes from './Routes';

import * as serviceWorker from './serviceWorker';

ReactDOM.render(
  <Router>
    <Routes />
  </Router>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
