import React, { useEffect, useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import Video from "../../components/video/Video";
import CategoriesBar from "../../components/categoriesBar/CategoriesBar";
import { useDispatch, useSelector } from "react-redux";
import { getPopulaVideos } from "../../redux/actions/homeVideos.action";
import { getVideoCategories } from "../../redux/actions/videosCategories.action";
import InfiniteScroll from "react-infinite-scroll-component";
import SkeletonVideo from "../../components/skeletons/SkeletonVideo";

const HomeScreen = () => {
  const dispatch = useDispatch();

  const { videos, selectedCategory, loading } = useSelector(
    (store) => store?.homeVideos
  );
  const { categories } = useSelector((store) => store?.videosCategories);

  useEffect(() => {
    dispatch(getVideoCategories());
    dispatch(getPopulaVideos(selectedCategory));
  }, [dispatch]);

  const fetchData = () => {
    dispatch(getPopulaVideos(selectedCategory));
  };

  return (
    <Container>
      <CategoriesBar categories={categories} />
      <InfiniteScroll
        dataLength={videos?.length || []}
        next={fetchData}
        hasMore={true}
        className="row"
        loader={
          <div className="spinner-border text-danger d-block mx-auto"></div>
        }
      >
        {!loading
          ? videos.map((video) => (
              <Col lg={3} md={4} key={video?.id}>
                <Video video={video} />
              </Col>
            ))
          : [...Array(20)].map((item, i) => (
              <Col key={i} Col lg={3} md={4}>
                <SkeletonVideo />
              </Col>
            ))}
      </InfiniteScroll>
    </Container>
  );
};

export default HomeScreen;
