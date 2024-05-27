import React, { useEffect, useState } from "react";
import "./_video.scss";

import { AiFillEye } from "react-icons/ai";
import moment from "moment";
import numeral from "numeral";
import request from "../../api";
import { LazyLoadImage } from "react-lazy-load-image-component";
import { useNavigate } from "react-router-dom";

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
    id,
  } = video;

  const [channelDetails, setChannelDetails] = useState();
  const navigate = useNavigate();
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
    <div className="video" onClick={() => navigate(`/watch?v=${id}`)}>
      <div className="video__top">
        <LazyLoadImage src={url} effect="blur" />
        <span className="video__top__duration">{getDuration(duration)}</span>
      </div>
      <div className="video__title">{title}</div>
      <div className="video__details">
        <span>
          <AiFillEye /> {numeral(viewCount).format("0.a")} views •
        </span>
        <span>{moment(publishedAt).fromNow()}</span>
      </div>
      <div className="video__channel">
        <LazyLoadImage src={channelIcon} effect="blur" />

        <p>{channelTitle}</p>
      </div>
    </div>
  );
};

export default Video;
