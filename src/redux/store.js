import { createStore, applyMiddleware, combineReducers } from "redux";

import { thunk } from "redux-thunk";

import { authReducer } from "./reducers/auth.reducer";

const rootReducer = combineReducers({
  auth: authReducer,
});

const store = createStore(rootReducer, {}, applyMiddleware(thunk));

export default store;
