import { createStore, applyMiddleware } from 'redux';
import logger from 'redux-logger';
import rootReducer from '../root/root_reducer';
import { persistStore } from 'redux-persist';
const middleware = [logger];
const store = createStore(rootReducer, applyMiddleware(...middleware));

const persistedStore = persistStore(store);

export { store, persistedStore };