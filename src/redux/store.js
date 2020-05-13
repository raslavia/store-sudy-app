import { createStore, applyMiddleware } from "redux";
import { persistStore } from "redux-persist";
//allows browser to cache or store now

import logger from "redux-logger";
import createSagaMiddleware from 'redux-saga';

import rootReducer from "./root-reducer";
import rootSaga from './root-saga';
const sagaMiddleware = createSagaMiddleware();

const middlewares = [sagaMiddleware];

if (process.env.NODE_ENV === 'development') {
  middlewares.push(logger);
}

export const store = createStore(rootReducer, applyMiddleware(...middlewares));

sagaMiddleware.run(rootSaga);

export const persistor = persistStore(store);
//it creates new provider

// export default { store, persistStore };
