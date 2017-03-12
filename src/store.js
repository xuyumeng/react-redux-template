import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk';

import { createResponsiveStoreEnhancer } from 'redux-responsive'
import reducer from './reducer'

export default function configureStore(initialState) {
    return applyMiddleware(thunk)(createStore)(reducer, initialState, createResponsiveStoreEnhancer({calculateInitialState: false}));
}