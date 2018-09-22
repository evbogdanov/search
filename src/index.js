import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import {searches} from './searches';

ReactDOM.render(<App searches={searches} />, document.getElementById('app'));
registerServiceWorker();
