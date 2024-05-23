import React from "react";
import "./_categoriesBar.scss";
import { useDispatch, useSelector } from "react-redux";
import { getPopulaVideos } from "../../redux/actions/homeVideos.action";

const CategoriesBar = ({ categories }) => {
  const dispatch = useDispatch();
  const { selectedCategory } = useSelector((store) => store.homeVideos);

  const handleSelectCategory = (id) => {
    dispatch(getPopulaVideos(id));
  };

  return (
    <div className="categoriesBar">
      {categories.map(({ id, snippet: { title } }) => (
        <span
          onClick={() => handleSelectCategory(id)}
          key={id}
          className={selectedCategory === id ? "active" : ""}
        >
          {title}
        </span>
      ))}
    </div>
  );
};

export default CategoriesBar;
