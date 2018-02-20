import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import PithreWeather from './app';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<PithreWeather />, document.getElementById('pithre'));
registerServiceWorker();
