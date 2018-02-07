import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import './dist/css/flat-ui.css';
import './dist/css/flat-ui.css.map';
import './dist/css/flat-ui.min.css';
import './dist/css/vendor/bootstrap/css/bootstrap.min.css';


import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
