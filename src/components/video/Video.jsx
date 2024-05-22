import React, { useEffect, useState } from "react";
import "./_video.scss";

import { AiFillEye } from "react-icons/ai";
import moment from "moment";
import numeral from "numeral";
import request from "../../api";

const Video = ({ video }) => {
  const {
    snippet: {
      thumbnails: {
        medium: { url },
      },
      title,
      publishedAt,
      channelId,
      channelTitle,
    },
    contentDetails: { duration },
    statistics: { viewCount },
  } = video;

  const [channelDetails, setChannelDetails] = useState();
  const channelIcon = channelDetails?.snippet?.thumbnails?.default?.url;

  useEffect(() => {
    const getChannelDetails = () => {
      request
        .get("/channels", {
          params: {
            part: "snippet",
            id: channelId,
          },
        })
        .then(({ data }) => {
          if (data?.items?.length) {
            setChannelDetails(data?.items[0]);
          }
        });
    };

    getChannelDetails();
  }, [channelId]);

  const getDuration = (time) => {
    const seconds = moment.duration(time).asSeconds();
    const duration = moment.utc(seconds * 1000).format("mm:ss");
    return duration;
  };

  return (
    <div className="video">
      <div className="video__top">
        <img src={url} alt="" />
        <span>{getDuration(duration)}</span>
      </div>
      <div className="video__title">{title}</div>
      <div className="video__details">
        <span>
          <AiFillEye /> {numeral(viewCount).format("0.a")} views •
        </span>
        <span>{moment(publishedAt).fromNow()}</span>
      </div>
      <div className="video__channel">
        <img src={channelIcon} alt="" />
        <p>{channelTitle}</p>
      </div>
    </div>
  );
};

export default Video;
