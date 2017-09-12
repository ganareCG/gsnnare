import './assets/stylesheets/components/sass/cw.scss';

import React from 'react'; // import the main react dependency
import ReactDOM from 'react-dom'; // import reactDOM
import ReactBootstrap from 'react-bootstrap';
import ReactBootstrapSelect from 'react-bootstrap-select';
import App from './app/App.jsx'; // import the main app component

import './assets/js/bootstrap.min.js';

var jobs = require('./assets/js/jobs.js');
jobs();

ReactDOM.render(<App />, document.getElementById('container')); // render our App component and mount it to our #root element
