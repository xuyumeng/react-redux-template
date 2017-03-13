import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk';
import DevTools from './components/dev-tools/devTools'

import { responsiveStoreEnhancer } from 'redux-responsive'
import reducer from './reducer'

const store = applyMiddleware(thunk)(createStore)(
    reducer,
    DevTools.instrument(),
    responsiveStoreEnhancer
);

export default store