import React, { useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import Video from "../../components/video/Video";
import CategoriesBar from "../../components/categoriesBar/CategoriesBar";
import { useDispatch, useSelector } from "react-redux";
import { getPopulaVideos } from "../../redux/actions/videos.action";

const HomeScreen = () => {
  const dispatch = useDispatch();
  const { videos } = useSelector((store) => store?.homeVideos);

  useEffect(() => {
    dispatch(getPopulaVideos());
  }, [dispatch]);

  return (
    <Container>
      <CategoriesBar />
      <Row>
        {(videos || []).map((video) => (
          <Col lg={3} md={4} key={video?.id}>
            <Video video={video} key={video?.id} />
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default HomeScreen;
