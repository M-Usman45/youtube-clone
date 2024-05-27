import React from "react";
import "./_watch.scss";
import { Col, Row } from "react-bootstrap";
import VideoMetaData from "../../components/videoMetaData/VideoMetaData";
import Comments from "../../components/comments/Comments";
import VideoHorizonatal from "../../components/videoHorizontal/VideoHorizontal";

export const Watch = () => {
  console.log("Hello there");
  return (
    <Row>
      <Col lg={8}>
        <div className="watch_video_player">
          <iframe
            src={"https://www.youtube.com/embed/tgbNymZ7vqY"}
            allowFullScreen={true}
            height="100%"
            width="100%"
            title="my video"
            frameBorder={0}
          ></iframe>
        </div>
        <VideoMetaData />
        <Comments />
      </Col>
      <Col lg={4}>
        {[...new Array(20)].map(() => (
          <VideoHorizonatal />
        ))}
      </Col>
    </Row>
  );
};
