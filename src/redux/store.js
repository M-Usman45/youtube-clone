import { createStore, applyMiddleware, combineReducers } from "redux";

import { thunk } from "redux-thunk";

import { authReducer } from "./reducers/auth.reducer";
import { HomeVideosReducer } from "./reducers/homeVideos.reducer";
import { VideosCatgoriesReducer } from "./reducers/videosCategories.reducer copy";

const rootReducer = combineReducers({
  auth: authReducer,
  homeVideos: HomeVideosReducer,
  videosCategories: VideosCatgoriesReducer,
});

const store = createStore(rootReducer, {}, applyMiddleware(thunk));

export default store;
