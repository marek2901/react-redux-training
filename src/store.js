import {createStore, applyMiddleware} from 'redux';

import reducer from './reducers';

import storeSync from './middleware/browserStoreSync.js';

export default createStore(reducer, applyMiddleware(storeSync));
