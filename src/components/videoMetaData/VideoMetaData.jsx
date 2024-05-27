import React from "react";
import "./_videoMetaData.scss";
import numeral from "numeral";
import moment from "moment";
import { MdThumbUp, MdThumbDown } from "react-icons/md";

const VideoMetaData = () => {
  return (
    <div className="videoMetaData py-2">
      <div className="videoMetaData_top">
        <h5> Video Title </h5>
        <div className="d-flex justify-content-between align-items-center py-1">
          <span>
            {numeral(500000).format("0.a")} views •
            {moment("2020-06-05").fromNow()}
          </span>
          <div>
            <span className="px-2">
              <MdThumbUp size={26} /> {numeral(500000).format("0.a")}
            </span>
            <span>
              <MdThumbDown size={26} /> {numeral(500000).format("0.a")}
            </span>
          </div>
        </div>
      </div>
      <div className="videoMetaData_channel d-flex justify-content-center align-items-between my-2 py-3">
        <div className="d-flex">
          <img
            src="https://www.pngkey.com/png/full/114-1149878_setting-user-avatar-in-specific-size-without-breaking.png"
            className="rounded-circle mr-3"
          />
          <div className="d-flex flex-column">
            <span> Backbench coders </span>
            <span> {numeral(500000).format("0.a")} Subscribers</span>
            <button className="btn border-0 p-2 m-2"> Subscribe </button>
          </div>
        </div>
      </div>
      <div className="videoMetaData_description"></div>
    </div>
  );
};

export default VideoMetaData;
