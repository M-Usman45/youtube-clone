import {
  HOME_VIDEOS_FAILED,
  HOME_VIDEOS_REQUEST,
  HOME_VIDEOS_SUCCESS,
  HOME_VIDEO_SELECTED_CATEGORY,
} from "../actionType";

export const HomeVideosReducer = (
  state = {
    videos: [],
    loading: false,
    error: "",
    nextPageToken: "",
    selectedCategory: "",
  },
  action
) => {
  const { type, payload } = action;
  switch (type) {
    case HOME_VIDEOS_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case HOME_VIDEOS_SUCCESS:
      console.log(
        "my condition",
        state.selectedCategory,
        payload.selectedCategory,
        state.selectedCategory === payload.selectedCategory
      );
      return {
        ...state,
        loading: false,
        videos:
          state.selectedCategory === payload.selectedCategory
            ? [...state.videos, ...payload.videos]
            : payload.videos,
        nextPageToken: payload.nextPageToken,
        selectedCategory: payload.selectedCategory,
      };
    case HOME_VIDEOS_FAILED:
      return {
        ...state,
        loading: false,
        error: payload,
      };
    case HOME_VIDEO_SELECTED_CATEGORY:
      return {
        ...state,
        selectedCategory: payload,
      };
    default:
      return state;
  }
};
