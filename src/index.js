import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import ReduxApp from './components/app.js';
import './index.css';
import registerServiceWorker from './registerServiceWorker';

import store from './store';

ReactDOM.render(
    <Provider store={store}>
      <ReduxApp/>
    </Provider>, document.getElementById('root'));
registerServiceWorker();
