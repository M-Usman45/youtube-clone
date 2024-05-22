import request from "../../api";
import {
  VIDEOS_CATEGORIES_FAILED,
  VIDEOS_CATEGORIES_REQUEST,
  VIDEOS_CATEGORIES_SUCCESS,
} from "../actionType";

export const getVideoCategories = () => async (disaptch) => {
  try {
    disaptch({
      type: VIDEOS_CATEGORIES_REQUEST,
    });

    request
      .get("/videoCategories", {
        params: {
          part: "snippet",
          regionCode: "PK",
        },
      })
      .then(({ data }) => {
        if (data) {
          disaptch({
            type: VIDEOS_CATEGORIES_SUCCESS,
            payload: {
              categories: data?.items,
            },
          });
        }
      });
  } catch (e) {
    console.log(e.messgae);
    disaptch({
      type: VIDEOS_CATEGORIES_FAILED,
      payload: e.messgae,
    });
  }
};
