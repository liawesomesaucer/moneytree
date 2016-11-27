require("./styles/main.scss");

import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

import { store } from './store/initialization';

ReactDOM.render(<App store={store} />, document.getElementById('root'));
