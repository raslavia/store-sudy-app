import { createStore, applyMiddleware } from "redux";
import { persistStore } from "redux-persist";
//allows browser to cache or store now

import logger from "redux-logger";
import thunk from "redux-thunk";

import rootReducer from "./root-reducer";

const middlewares = [thunk];

if (process.env.NODE_ENV === 'development') {
  middlewares.push(logger);
}

export const store = createStore(rootReducer, applyMiddleware(...middlewares));

export const persistor = persistStore(store);
//it creates new provider

// export default { store, persistStore };
