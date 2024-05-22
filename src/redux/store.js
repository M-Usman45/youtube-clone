import { createStore, applyMiddleware, combineReducers } from "redux";

import { thunk } from "redux-thunk";

import { authReducer } from "./reducers/auth.reducer";
import { HomeVideosReducer } from "./reducers/homeVideos.reducer";

const rootReducer = combineReducers({
  auth: authReducer,
  homeVideos: HomeVideosReducer,
});

const store = createStore(rootReducer, {}, applyMiddleware(thunk));

export default store;
