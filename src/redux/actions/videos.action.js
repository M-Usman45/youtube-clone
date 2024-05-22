import request from "../../api";
import {
  HOME_VIDEOS_FAILED,
  HOME_VIDEOS_REQUEST,
  HOME_VIDEOS_SUCCESS,
} from "../actionType";

export const getPopulaVideos = () => async (disaptch) => {
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
          pageToken: "",
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
