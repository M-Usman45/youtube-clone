import request from "../../api";
import {
  HOME_VIDEOS_FAILED,
  HOME_VIDEOS_REQUEST,
  HOME_VIDEOS_SUCCESS,
} from "../actionType";

export const getPopulaVideos =
  (videoCategoryId) => async (disaptch, getState) => {
    try {
      disaptch({
        type: HOME_VIDEOS_REQUEST,
      });

      request
        .get("/videos", {
          params: {
            part: "snippet,contentDetails,statistics",
            chart: "mostPopular",
            regionCode: "PK",
            maxResults: 20,
            pageToken: getState().homeVideos.nextPageToken,
            videoCategoryId: videoCategoryId ? videoCategoryId : 0,
          },
        })
        .then(({ data }) => {
          if (data) {
            disaptch({
              type: HOME_VIDEOS_SUCCESS,
              payload: {
                videos: data?.items,
                nextPageToken: data?.nextPageToken,
                selectedCategory: videoCategoryId,
              },
            });
          }
        })
        .catch((e) => {
          console.log(e.messgae);
          disaptch({
            type: HOME_VIDEOS_FAILED,
            payload: e.messgae,
          });
        });
    } catch (e) {
      console.log(e.messgae);
      disaptch({
        type: HOME_VIDEOS_FAILED,
        payload: e.messgae,
      });
    }
  };

export const searchVideosBykeyword = (keyword) => async (disaptch) => {
  try {
    disaptch({
      type: HOME_VIDEOS_REQUEST,
    });

    request
      .get("/search", {
        params: {
          part: "snippet",
          chart: "mostPopular",
          regionCode: "PK",
          maxResults: 20,
          q: keyword,
          type: "video",
        },
      })
      .then(({ data }) => {
        if (data) {
          disaptch({
            type: HOME_VIDEOS_SUCCESS,
            payload: {
              videos: data?.items,
              nextPageToken: data?.nextPageToken,
            },
          });
        }
      });
  } catch (e) {
    console.log(e.messgae);
    disaptch({
      type: HOME_VIDEOS_FAILED,
      payload: e.messgae,
    });
  }
};
