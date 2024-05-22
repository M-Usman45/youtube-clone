import React, { useEffect, useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import Video from "../../components/video/Video";
import CategoriesBar from "../../components/categoriesBar/CategoriesBar";
import { useDispatch, useSelector } from "react-redux";
import { getPopulaVideos } from "../../redux/actions/homeVideos.action";
import { getVideoCategories } from "../../redux/actions/videosCategories.action";

const HomeScreen = () => {
  const dispatch = useDispatch();
  const [selectedCategory, setSelectedCategory] = useState("");

  const { videos } = useSelector((store) => store?.homeVideos);
  const { categories } = useSelector((store) => store?.videosCategories);

  useEffect(() => {
    dispatch(getVideoCategories());
  }, [dispatch]);

  useEffect(() => {
    if (selectedCategory) {
      dispatch(getPopulaVideos("", selectedCategory));
    }
  }, [dispatch, selectedCategory]);

  return (
    <Container>
      <CategoriesBar
        categories={categories}
        selectedCategory={selectedCategory}
        setSelectedCategory={setSelectedCategory}
      />
      <Row>
        {videos.map((video) => (
          <Col lg={3} md={4} key={video?.id}>
            <Video video={video} />
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default HomeScreen;
