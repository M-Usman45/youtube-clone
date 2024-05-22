import {
  VIDEOS_CATEGORIES_FAILED,
  VIDEOS_CATEGORIES_REQUEST,
  VIDEOS_CATEGORIES_SUCCESS,
} from "../actionType";

export const VideosCatgoriesReducer = (
  state = {
    categories: [],
    loading: false,
  },
  action
) => {
  const { type, payload } = action;
  switch (type) {
    case VIDEOS_CATEGORIES_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case VIDEOS_CATEGORIES_SUCCESS:
      return {
        ...state,
        loading: false,
        categories: payload.categories,
      };
    case VIDEOS_CATEGORIES_FAILED:
      return {
        ...state,
        loading: false,
        error: payload,
      };
    default:
      return state;
  }
};
